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
    <section className="bg-[#1e293b] p-6 rounded-lg shadow-xl text-center text-[#e2e8f0] lg:col-span-3 space-y-8">
      {/* Occasion and Name Section */}
      <div className="space-y-4">
        <h1 className="text-4xl font-serif text-[#10b981] mb-4">
          {occasionName}
        </h1>
        <p className="text-2xl italic mb-4">
          In the name of Allah, the Most Gracious, the Most Merciful
        </p>
        <p className="text-xl mb-4">
          Join us in celebrating the blessed union of{" "}
          <strong className="text-[#9333ea] text-3xl font-extrabold">
            {bride}
          </strong>{" "}
          and{" "}
          <strong className="text-[#9333ea] text-3xl font-extrabold">
            {groom}
          </strong>
          .
        </p>

        {/* Invitee Name Section (Middle) */}
        <div className="text-lg mb-4">
          <p className="text-lg text-[#94a3b8]">
            Dear{" "}
            <strong className="text-[#9333ea] text-2xl font-bold">
              {inviteeName}
            </strong>
            , you are personally invited to this joyous occasion. Your presence
            will bring blessings to the gathering.
          </p>
        </div>
      </div>

      {/* Date, Time, Venue Section */}
      <div className="text-lg space-y-2 mb-6">
        <p>
          <strong>Date:</strong> {date}
        </p>
        <p>
          <strong>Time:</strong> {startTime} - {endTime}
        </p>
        <p>
          <strong>Venue:</strong> {venue}
        </p>
        <a
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#9333ea] underline hover:text-[#10b981]"
        >
          View Location
        </a>
      </div>

      {/* Special Notes Section (No Gifts, No Photos) */}
      <div className="text-md text-[#94a3b8] italic mb-6">
        <p>✨ Kindly no gifts, just your presence! ✨</p>
        <p>📸 Please refrain from taking photos during the ceremony. 📸</p>
      </div>

      {/* Host Names Section (Simple Text, No Emphasis) */}
      <div className="text-lg mb-4">
        <p className="text-[#94a3b8]">
          With best compliments and wishes from:
          {host.map((name, index) =>  ` ${name} ` )}
        </p>
      </div>
    </section>
  );
}
