import Image from "next/image";
import Link from "next/link";

export default function Advertisement({
  companyName,
  image,
  title,
  description,
  link,
}) {
  return (
    <div className="p-6">
      {/* <a
        href={link}
        target="_blank"
        className="text-black hover:text-[#3c3b37] hover:opacity-80"
      > */}
      <div className="flex flex-col gap-4 items-center">
        <h1 className="font-bold">{companyName}</h1>
        <Image
          src={image}
          alt={`${companyName} Advertisement`}
          width={400} // Set width based on your requirements
          height={200} // Set height based on your requirements
          className="rounded-lg shadow-md max-h-[300px] max-w-[400px]"
        />
        <div className="grid gap-2">
          <p className="text-2xl font-semibold ">
            <strong>{title}</strong>
          </p>
          <p className="text-xl font-normal text-center">{description}</p>
          <div className="flex justify-center align-middle">
            <a
              href={link}
              target="_blank"
              className="px-3 py-1 bg-[#80B52C] text-white rounded shadow-md text-sm hover:bg-[#059669]"
            >
              Visit Us
            </a>
          </div>
        </div>
      </div>
      {/* </a> */}
    </div>
  );
}
