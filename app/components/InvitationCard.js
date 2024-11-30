import Image from "next/image";
import { formatDate } from "../utils/formatDate";

export default function InvitationCard({
  inviteeName,
  occasionName,
  bride,
  groom,
  host,
  invitationText,
  date,
  startTime,
  endTime,
  venue,
  mapLink,
}) {
  return (
    <div className="relative flex items-center justify-center py-6 lg:py-0 text-center px-4 sm:px-6 lg:px-8">
      {/* Content Wrapper */}
      <div className="relative z-10 p-4 rounded-md max-w-4xl mx-auto">
        {/* Occasion and Name Section */}
        <div className="grid gap-6 sm:gap-4 lg:gap-2">
          {occasionName && (
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif mb-4">
              {occasionName}
            </h1>
          )}
          {invitationText && (
            <p className="text-lg sm:text-xl lg:text-2xl font-lora grid gap-2">
              {invitationText(inviteeName)}
            </p>
          )}
          <div className="grid gap-2">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-playfair font-medium">
              {groom}
            </h1>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-medium">
              &
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-playfair font-medium">
              {bride}
            </h1>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-lora font-semibold">
            Inshallah on
          </h2>
          <div className="grid gap-4">
            <p className="text-lg sm:text-xl lg:text-2xl font-lora font-normal">
              {formatDate(date)}, {startTime} to {endTime}
            </p>
            <div className="grid gap-4 lg:gap-2">
              <p className="text-lg sm:text-xl lg:text-2xl font-lora font-normal">
                Location: {venue}
              </p>
              <p className="text-lg sm:text-xl lg:text-2xl font-lora font-normal">
                <a
                  href={mapLink}
                  target="blank"
                  className="text-[#80B52C] underline hover:text-green-600"
                >
                  Click here to get directions
                </a>
              </p>
              <div className="grid gap-1">
                <p className="text-sm sm:text-base lg:text-lg font-lora">
                  ✨ Your presence will be our greatest gift as we celebrate
                  this blessed event. ✨
                </p>
                <p className="text-sm sm:text-base lg:text-lg font-lora overflow-auto">
                  📸 Kindly cherish the moment with us by respecting our wish
                  for no photos during the ceremony. 📸
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={"/images/Vector.svg"}
              alt=""
              height={150}
              width={150}
              className="sm:h-56 sm:w-48 lg:h-20 lg:w-52"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// import Image from "next/image";
// import { formatDate } from "../utils/formatDate";

// export default function InvitationCard({
//   inviteeName,
//   occasionName,
//   bride,
//   groom,
//   host,
//   invitationText,
//   date,
//   startTime,
//   endTime,
//   venue,
//   mapLink,
// }) {
//   return (
//     <div className="relative flex items-center justify-center text-center ">
//       {/* Content Wrapper */}
//       <div className="relative z-10 p-4 rounded-md max-w-4xl mx-auto">
//         {/* Occasion and Name Section */}
//         <div className="grid gap-1">
//           {occasionName && (
//             <h1 className="text-4xl font-serif mb-4">{occasionName}</h1>
//           )}
//           {invitationText && (
//             <p className="text-2xl mb-4 font-lora grid gap-1">
//               {invitationText(inviteeName)}
//             </p>
//           )}
//           <div className="grid gap-3">
//             <h1 className="text-7xl font-playfair font-medium">{groom}</h1>
//             <h1 className="text-7xl font-playfair font-medium">&</h1>
//             <h1 className="text-7xl font-playfair font-medium">{bride}</h1>
//           </div>
//           <h2 className="text-3xl font-lora font-semibold">Inshallah on</h2>
//           <div className="grid gap-4">
//             <p className="text-2xl font-lora font-normal">
//               {formatDate(date)}, {startTime} to {endTime}
//             </p>
//             <div className="grid gap-1">
//               <p className="text-2xl font-lora font-normal">
//                 Location: {venue}
//               </p>
//               <p className="text-2xl font-lora font-normal ">
//                 <a href={mapLink} target="blank" className="text-[#80B52C]">
//                   Click here to get direction
//                 </a>
//               </p>
//               <div className="grid gap-0 mb-1">
//                 <p className="text-2xl font-lora font-normal p-0 m-0">
//                   ✨ Your presence will be our greatest gift as we celebrate
//                   this blessed event. ✨
//                 </p>

//                 <p className="text-2xl font-lora font-normal p-0 m-0">
//                   📸 Please refrain from taking photos during the ceremony. 📸
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="flex items-center justify-center text-center">
//             <Image src={"/images/Vector.svg"} alt="" height="200" width="200" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
