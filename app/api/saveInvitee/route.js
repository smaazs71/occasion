import fs from "fs";
import path from "path";

// Importing the occasion details constant directly from the file
import { occasionDetails } from "../../data/occasionDetails"; // Adjust path if needed

// Define the file path for invitees
const inviteePath = path.join(process.cwd(), "app", "data", "invitee.json");

export async function POST(req) {
  try {
    // Parse the incoming request body
    const { selectedOccasion, inviteeName } = await req.json();

    // Find the selected occasion from the imported occasionDetails
    const occasion = occasionDetails.find(
      (occasion) => occasion.id === selectedOccasion
    );

    if (!occasion) {
      return new Response(JSON.stringify({ message: "Occasion not found" }), {
        status: 404,
      });
    }

    console.log(inviteePath);

    // Read the current invitee data from the file
    const inviteeFile = fs.readFileSync(inviteePath, "utf-8");
    const invitees = JSON.parse(inviteeFile);

    // Find the invitee data for the selected occasion
    const occasionInvitees = invitees.find(
      (invitee) => invitee.id === selectedOccasion
    );

    // If no invitees for the occasion, create an entry
    if (!occasionInvitees) {
      invitees.push({ id: selectedOccasion, invitees: [inviteeName] });
    } else {
      // Check if the invitee is already added
      if (occasionInvitees.invitees.includes(inviteeName)) {
        return new Response(
          JSON.stringify({ message: "Invitee already added" }),
          { status: 400 }
        );
      }

      // Add the new invitee to the list
      occasionInvitees.invitees.push(inviteeName);
    }

    // Save the updated invitee data back to the file
    fs.writeFileSync(inviteePath, JSON.stringify(invitees, null, 2));

    return new Response(
      JSON.stringify({ message: "Invitee added successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving invitee:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
