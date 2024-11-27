// app/page.js
'use client';

import { useSearchParams } from 'next/navigation';
import { occasionDetails } from './data/occasionDetails';
import InvitationCard from './components/InvitationCard';
import Advertisement from './components/Advertisement';
import PortfolioAdvertisement from './components/PortfolioAdvertisement';
import { redirect } from 'next/navigation';

export default function Page() {
  const searchParams = useSearchParams();
  const occasionId = searchParams.get('id');
  const inviteeName = searchParams.get('name') || 'Guest';

  // Find the occasion based on ID
  const occasion = occasionDetails.find((event) => event.id === occasionId);

  if (!occasion) {
    redirect('/not-found');
  }

  // Check if the invitee is part of the occasion
  if (!occasion.invitees.includes(inviteeName)) {
    redirect('/not-invited');
  }

  return (
    <main className="max-w-4xl mx-auto p-6 space-y-8">
      <InvitationCard inviteeName={inviteeName} {...occasion} />
      <Advertisement {...occasion.advertisement} />
      <PortfolioAdvertisement />
    </main>
  );
}
