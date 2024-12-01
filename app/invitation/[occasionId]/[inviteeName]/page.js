"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation"; // Updated for accessing dynamic params
import { redirect } from "next/navigation";
import Head from "next/head";
import InvitationCard from "../../../components/InvitationCard";
import Advertisement from "../../../components/Advertisement";
import { occasionDetails } from "../../../data/occasionDetails";

// Fetch occasion details from the API
async function fetchOccasionDetails(occasionId) {
  const res = await fetch(`/api/occasions/${occasionId}`);
  if (!res.ok) {
    throw new Error("Occasion not found");
  }
  return res.json();
}

// Validate invitee for the given occasion
async function validateInvitee(occasionId, inviteeName) {
  const res = await fetch(`/api/invitees?occasionId=${occasionId}`);
  if (!res.ok) {
    throw new Error("Invitee validation failed");
  }
  const { invitees } = await res.json();
  return invitees.some(
    (invitee) =>
      invitee.toLowerCase() === sanitizeName(inviteeName).toLowerCase()
  );
}

function InvitationContent({ occasion, inviteeName }) {
  return (
    <main className="w-full">
      <InvitationCard inviteeName={inviteeName} {...occasion} />
      <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4">
        {occasion.advertisements.map((advertisement, index) => (
          <Advertisement key={index} {...advertisement} />
        ))}
      </div>
    </main>
  );
}

const sanitizeName = (name) => decodeURIComponent(name).trim();

export default function Page() {
  const params = useParams(); // Use this to fetch dynamic params
  const [occasion, setOccasion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter(); // Use router for navigation

  useEffect(() => {
    async function loadOccasion() {
      try {
        const { occasionId, inviteeName } = params;
        if (!occasionId || !inviteeName) {
          // router.push("/not-found");
          // return;

          throw new Error("Invalid parameters");
        }

        // const occasionDetails = await fetchOccasionDetails(occasionId);
        const isValidInvitee = await validateInvitee(occasionId, inviteeName);
        if (!isValidInvitee) {
          router.push("/not-invited");
          return;
          // redirect("/not-invited");
        }
        setOccasion(occasionDetails.find((event) => event.id === occasionId));
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    loadOccasion();
  }, [params]);

  if (loading) {
    return <p className="text-center mt-8">Loading...</p>;
  }

  if (error) {
    return (
      <p className="text-center mt-8 text-red-500">
        Error: {error}. Please try again later.
      </p>
    );
  }

  if (!occasion) {
    redirect("/not-found");
  }

  return (
    <>
      <Head>
        <title>{`You're Invited to ${occasion.title}`}</title>
        <meta
          property="og:title"
          content={`You're Invited to ${occasion.title}`}
        />
        <meta
          property="og:description"
          content={`Join us for the joyous event: ${occasion.description}. Your presence will make our day extra special!`}
        />
        <meta
          property="og:image"
          content={occasion.image || "public/images/ogimage.webp"}
        />
        <meta
          property="og:url"
          content={`https://occasion.vercel.app/invitation/${params.occasionId}/${params.inviteeName}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Special Occasion Invitation" />
      </Head>
      <InvitationContent
        occasion={occasion}
        inviteeName={sanitizeName(params.inviteeName)}
      />
    </>
  );
}

// "use client";

// import { occasionDetails } from "../../../data/occasionDetails";
// import InvitationCard from "../../../components/InvitationCard";
// import Advertisement from "../../../components/Advertisement";
// import { redirect } from "next/navigation";
// import { Suspense } from "react";
// import Head from "next/head";

// function InvitationContent({ params }) {
//   // If params are not yet available, render a loading state
//   if (!params || !params.occasionId || !params.inviteeName) {
//     return <p>Loading...</p>; // You can replace this with a better loading UI
//   }
//   const { occasionId, inviteeName } = params;

//   // Find the occasion based on ID
//   const occasion = occasionDetails.find((event) => event.id === occasionId);

//   if (!occasion) {
//     redirect("/not-found");
//   }

//   // Check if the invitee is part of the occasion
//   if (
//     !occasion.invitees.some(
//       (invitee) => invitee.toLowerCase() === inviteeName.toLowerCase()
//     )
//   ) {
//     redirect("/not-invited");
//   }

//   return (
//     <main className="w-full">
//       <InvitationCard inviteeName={inviteeName} {...occasion} />

//       <div className="mt-8 flex flex-col md:flex-row justify-center align-middle">
//         {occasion.advertisements.map((advertisement, index) => (
//           <Advertisement key={index} {...advertisement} />
//         ))}
//       </div>
//     </main>
//   );
// }

// export default function Page({ params }) {
//   return (
//     <>
//       <Head>
//         <title>Wedding Invitation</title>
//         <meta property="og:title" content="You're Invited!" />
//         <meta
//           property="og:description"
//           content="Join us for the joyous union of [Bride's Name] & [Groom's Name]. Your presence will make our day extra special!"
//         />
//         <meta property="og:image" content="public/images/ogimage.webp" />
//         <meta
//           property="og:url"
//           content={`https://occasion.vercel.app/invitation/${params.id}/${params.name}`}
//         />
//         <meta property="og:type" content="website" />
//         <meta property="og:site_name" content="Wedding Invitation" />
//       </Head>
//       {/* Page Content */}
//       <Suspense fallback={<p>Loading...</p>}>
//         <InvitationContent params={params} />
//       </Suspense>
//     </>
//   );
// }

// "use client";

// import { useSearchParams } from "next/navigation";
// import { occasionDetails } from "../data/occasionDetails";
// import InvitationCard from "../components/InvitationCard";
// import Advertisement from "../components/Advertisement";
// import { redirect } from "next/navigation";
// import { Suspense } from "react";
// import Head from "next/head";

// function InvitationContent() {
//   const searchParams = useSearchParams();
//   const occasionId = searchParams.get("id");
//   const inviteeName = searchParams.get("name") || "Guest";

//   // Find the occasion based on ID
//   const occasion = occasionDetails.find((event) => event.id === occasionId);

//   if (!occasion) {
//     redirect("/not-found");
//   }

//   // Check if the invitee is part of the occasion
//   if (!occasion.invitees.includes(inviteeName)) {
//     redirect("/not-invited");
//   }

//   return (
//     <main className="w-full">
//       <InvitationCard inviteeName={inviteeName} {...occasion} />

//       <div className="mt-8 flex flex-col md:flex-row justify-center align-middle">
//         {occasion.advertisements.map((advertisement, index) => (
//           <Advertisement key={index} {...advertisement} />
//         ))}
//       </div>
//     </main>
//   );
// }

// export default function Page() {
//   return (
//     <>
//       <Head>
//         <title>Wedding Invitation</title>
//         <meta property="og:title" content="You're Invited!" />
//         <meta
//           property="og:description"
//           content="Join us for the joyous union of [Bride's Name] & [Groom's Name]. Your presence will make our day extra special!"
//         />
//         <meta property="og:image" content="public/images/ogimage.webp" />
//         <meta
//           property="og:url"
//           content="https://occasion.vercel.app/?id=1&name=maaz"
//         />
//         <meta property="og:type" content="website" />
//         <meta property="og:site_name" content="Wedding Invitation" />
//       </Head>
//       {/* Page Content */}
//       <Suspense fallback={<p>Loading...</p>}>
//         <InvitationContent />
//       </Suspense>
//     </>
//   );
// }
