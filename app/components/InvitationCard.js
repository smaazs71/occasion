// app/components/InvitationCard.js
import Image from "next/image";

const InvitationCard = ({
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
}) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <Image
      src="/images/celebration.webp"
      alt="Celebration"
      width={800}
      height={400}
      className="w-full h-60 object-cover"
    />
    <div className="p-6 text-center">
      <h2 className="text-4xl font-bold text-primary">{occasionName}</h2>
      <p className="text-lg mt-4">Dear {inviteeName},</p>
      {bride && groom && (
        <p className="text-xl mt-4">
          We are delighted to invite you to the wedding of:
        </p>
      )}
      {host && (
        <p className="text-xl mt-4">
          Join us to celebrate the birthday of {host}
        </p>
      )}
      <div className="my-4 text-2xl font-semibold text-secondary">
        {bride && <p>{bride}</p>}
        {groom && <p>& {groom}</p>}
      </div>
      <p className="text-lg">
        <strong>Date:</strong> {date} <br />
        <strong>Start Time:</strong> {startTime} <br />
        <strong>End Time:</strong> {endTime}
      </p>
      <div className="my-4">
        <div className="w-full h-60 rounded-lg overflow-hidden mb-4">
          <iframe
            src={mapLink}
            width="100%"
            height="100%"
            style={{ border: "0", borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <p className="mt-2">
          <strong>Venue:</strong> {venue}
        </p>
      </div>
    </div>
  </div>
);

export default InvitationCard;
