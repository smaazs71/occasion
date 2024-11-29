// app/components/InvitationCard.js
export default function InvitationCard({
    inviteeName,
    occasionName,
    bride,
    groom,
    host,
    date,
    startTime,
    endTime,
    venue,
    mapLink,
  }) {
    return (
      <section className="bg-gradient-to-r from-[#fdf1ec] to-[#fff7e6] p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-serif text-[#333] mb-4">
          {occasionName}
        </h1>
        <p className="text-xl text-[#555] mb-2">
          Honoring the union of <strong>{bride}</strong> & <strong>{groom}</strong>
        </p>
        <p className="text-lg text-[#777] mb-4">Hosted by: {host}</p>
        <p className="text-md text-[#888]">
          <strong>Date:</strong> {date}
        </p>
        <p className="text-md text-[#888]">
          <strong>Time:</strong> {startTime} - {endTime}
        </p>
        <p className="text-md text-[#888] mb-4">
          <strong>Venue:</strong> {venue}
        </p>
        <a
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0b3d91] underline hover:text-[#0056b3]"
        >
          View on Map
        </a>
      </section>
    );
  }
  