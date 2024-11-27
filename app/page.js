import { occasionDetails } from "./data/occasionDetails";
import InvitationCard from "./components/InvitationCard";
import Advertisement from "./components/Advertisement";
import { redirect } from "next/navigation";

export default function Page({ searchParams }) {
  const occasionId = searchParams.id;
  const inviteeName = searchParams.name || "Guest";

  const occasion = occasionDetails.find((event) => event.id === occasionId);

  if (!occasion) {
    redirect("/not-found");
  }

  if (!occasion.invitees.includes(inviteeName)) {
    redirect("/not-invited");
  }

  return (
    <main className="max-w-4xl mx-auto p-6 space-y-8">
      <InvitationCard inviteeName={inviteeName} {...occasion} />
      <Advertisement
        title="Premium Appliance Trolleys"
        description="Durable and stylish trolleys for your washing machine and refrigerator."
        image="/images/advertisement.webp"
        link="https://father-business.com"
      />
    </main>
  );
}
