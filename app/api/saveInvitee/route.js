import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017"); //process.env.MONGODB_URI);
const dbName = "occasions"; // Database name

export async function POST(req) {
  try {
    const { selectedOccasion, inviteeName } = await req.json();

    // Connect to MongoDB
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("invitees"); // Collection to store invitees

    // Check if the occasion already has invitees
    const occasionInvitees = await collection.findOne({
      occasionId: selectedOccasion,
    });

    if (occasionInvitees) {
      // If invitee already exists, return an error
      if (occasionInvitees.invitees.includes(inviteeName)) {
        return new Response(
          JSON.stringify({ message: "Invitee already added" }),
          { status: 400 }
        );
      }
      // Add new invitee
      await collection.updateOne(
        { occasionId: selectedOccasion },
        { $push: { invitees: inviteeName } }
      );
    } else {
      // If occasion is new, create it
      await collection.insertOne({
        occasionId: selectedOccasion,
        invitees: [inviteeName],
      });
    }

    return new Response(
      JSON.stringify({ message: "Invitee added successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving invitee:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  } finally {
    // Close the MongoDB connection
    await client.close();
  }
}
