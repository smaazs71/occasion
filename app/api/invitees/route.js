import { MongoClient } from "mongodb";

// MONGO_URI = mongodb+srv://cloudhire_dev:Qwertyuiop@cluster0.olkz57k.mongodb.net/cloudhiredb

const client = new MongoClient(
  "mongodb+srv://nexoracodefusion:Sm211qaz@cluster0.yiwojeu.mongodb.net"
); // mongodb://localhost:27017"); // Replace with your MongoDB URI
const dbName = "occasions"; // Database name

async function connectDB() {
  //   if (!client?.isConnected()) {
  await client.connect();
  //   }
  const db = client.db(dbName);
  return db.collection("invitees");
}

// GET - Fetch all invitees for an occasion
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const occasionId = searchParams.get("occasionId");

  if (!occasionId) {
    return new Response(
      JSON.stringify({ message: "Occasion ID is required" }),
      { status: 400 }
    );
  }

  try {
    const collection = await connectDB();
    const occasionInvitees = await collection.findOne({ occasionId });

    if (!occasionInvitees) {
      return new Response(
        JSON.stringify({ message: "No invitees found for this occasion" }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({ invitees: occasionInvitees.invitees }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching invitees:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}

// PUT - Update an invitee's name
export async function PUT(req) {
  const { occasionId, oldInviteeName, newInviteeName } = await req.json();

  if (!occasionId || !oldInviteeName || !newInviteeName) {
    return new Response(
      JSON.stringify({ message: "All fields are required" }),
      { status: 400 }
    );
  }

  try {
    const collection = await connectDB();
    const occasionInvitees = await collection.findOne({ occasionId });

    if (!occasionInvitees) {
      return new Response(JSON.stringify({ message: "Occasion not found" }), {
        status: 404,
      });
    }

    // Check if the old name exists in the invitees list
    if (!occasionInvitees.invitees.includes(oldInviteeName)) {
      return new Response(JSON.stringify({ message: "Invitee not found" }), {
        status: 404,
      });
    }

    // Update invitee name
    await collection.updateOne(
      { occasionId },
      { $set: { "invitees.$[elem]": newInviteeName } },
      { arrayFilters: [{ elem: oldInviteeName }] }
    );

    return new Response(
      JSON.stringify({ message: "Invitee name updated successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating invitee:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}

// DELETE - Delete an invitee
export async function DELETE(req) {
  const { occasionId, inviteeName } = await req.json();

  if (!occasionId || !inviteeName) {
    return new Response(
      JSON.stringify({ message: "Occasion ID and Invitee Name are required" }),
      { status: 400 }
    );
  }

  try {
    const collection = await connectDB();
    const occasionInvitees = await collection.findOne({ occasionId });

    if (!occasionInvitees) {
      return new Response(JSON.stringify({ message: "Occasion not found" }), {
        status: 404,
      });
    }

    // Remove invitee
    await collection.updateOne(
      { occasionId },
      { $pull: { invitees: inviteeName } }
    );

    return new Response(
      JSON.stringify({ message: "Invitee deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting invitee:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}

// POST - Add a new invitee to an occasion
export async function POST(req) {
  const { occasionId, inviteeName } = await req.json();

  if (!occasionId || !inviteeName) {
    return new Response(
      JSON.stringify({ message: "Occasion ID and Invitee Name are required" }),
      { status: 400 }
    );
  }

  try {
    const collection = await connectDB();
    const occasionInvitees = await collection.findOne({ occasionId });

    if (!occasionInvitees) {
      // If occasion doesn't exist, create a new one with the invitee
      await collection.insertOne({
        occasionId,
        invitees: [inviteeName],
      });

      return new Response(
        JSON.stringify({ message: "New occasion created and invitee added" }),
        { status: 201 }
      );
    }

    // Check if the invitee already exists
    if (occasionInvitees.invitees.includes(inviteeName)) {
      return new Response(
        JSON.stringify({ message: "Invitee already exists" }),
        { status: 409 }
      );
    }

    // Add the invitee to the existing occasion
    await collection.updateOne(
      { occasionId },
      { $push: { invitees: inviteeName } }
    );

    return new Response(
      JSON.stringify({ message: "Invitee added successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error adding invitee:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
