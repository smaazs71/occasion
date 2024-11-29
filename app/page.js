"use client";

import { useSearchParams } from "next/navigation";
import { occasionDetails } from "./data/occasionDetails";
import InvitationCard from "./components/InvitationCard";
import Advertisement from "./components/Advertisement";
import { redirect } from "next/navigation";
import { Suspense } from "react";

function InvitationContent() {
  const searchParams = useSearchParams();
  const occasionId = searchParams.get("id");
  const inviteeName = searchParams.get("name") || "Guest";

  // Find the occasion based on ID
  const occasion = occasionDetails.find((event) => event.id === occasionId);

  if (!occasion) {
    redirect("/not-found");
  }

  // Check if the invitee is part of the occasion
  if (!occasion.invitees.includes(inviteeName)) {
    redirect("/not-invited");
  }

  return (
    <main className="max-w-5xl mx-auto p-6 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-4 gap-6">
      <InvitationCard inviteeName={inviteeName} {...occasion} />
      <Advertisement {...occasion.advertisement} />
    </main>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <InvitationContent />
    </Suspense>
  );
}
