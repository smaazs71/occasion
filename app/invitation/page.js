"use client";

import { useSearchParams } from "next/navigation";
import { occasionDetails } from "../data/occasionDetails";
import InvitationCard from "../components/InvitationCard";
import Advertisement from "../components/Advertisement";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import Head from "next/head";

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
    <main className="w-full">
      <InvitationCard inviteeName={inviteeName} {...occasion} />

      <div className="mt-8 flex flex-col md:flex-row justify-center align-middle">
        {occasion.advertisements.map((advertisement, index) => (
          <Advertisement key={index} {...advertisement} />
        ))}
      </div>
    </main>
  );
}

export default function Page() {
  return (
    <>
      <Head>
        <title>Wedding Invitation</title>
        <meta property="og:title" content="You're Invited!" />
        <meta
          property="og:description"
          content="Join us for the joyous union of [Bride's Name] & [Groom's Name]. Your presence will make our day extra special!"
        />
        <meta property="og:image" content="public/images/ogimage.webp" />
        <meta
          property="og:url"
          content="https://occasion.vercel.app/?id=1&name=maaz"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Wedding Invitation" />
      </Head>
      {/* Page Content */}
      <Suspense fallback={<p>Loading...</p>}>
        <InvitationContent />
      </Suspense>
    </>
  );
}
