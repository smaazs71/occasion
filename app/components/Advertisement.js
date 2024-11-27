import Image from "next/image";

const Advertisement = ({ title, description, image, link }) => (
  <div className="bg-gray-100 p-6 rounded-lg shadow-md">
    <Image
      src={image}
      alt={title}
      width={600}
      height={300}
      className="w-full h-40 object-cover rounded"
    />
    <h3 className="text-xl font-bold mt-4">{title}</h3>
    <p className="text-gray-600 mt-2">{description}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-primary text-white px-4 py-2 rounded mt-4 hover:bg-secondary transition"
    >
      Learn More
    </a>
  </div>
);

export default Advertisement;
