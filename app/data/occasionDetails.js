export const occasionDetails = [
  {
    id: "1",
    // occasionName: "Walima - A Wedding Reception",
    groom: "Mohamed Maaz Shaikh",
    bride: "Daughter of Ali Kadar Khan",
    host: ["Mr. Khan", "Mrs. Khan", "Ahmed's Parents"],
    invitationText: (invitee) => {
      return (
        <>
          With the blessings of Almighty Allah, Mr. Maqbool Ahmed and family
          warmly invite
          <h1 className="text-3xl sm:text-4xl lg:text-5xl italic underline capitalize text-center">
            {invitee}
          </h1>
          to the Walima Ceremony celebrating the union of
        </>
      );
    },
    date: "2025-01-04",
    startTime: "7:00",
    endTime: "10:00 PM",
    venue:
      "Saint Mary College hall, Kalina Church, Kalina Kurla road near Kunchi Kuruvi Nagar, Santacruz East Mumbai-29",
    mapLink: "https://maps.app.goo.gl/xtn2H8z6YvKDqgLcA",
    invitees: ["maaz", "sara", "john"],
    advertisement: {
      companyName: "AP Furniture",
      image: "/images/advertisement.webp",
      title: "Premium Appliance Trolleys",
      description:
        "Durable and stylish trolleys for your washing machine and refrigerator.",
      link: "https://theap.in",
    },
  },
];
