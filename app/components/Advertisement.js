// app/components/Advertisement.js
import Image from 'next/image';

const Advertisement = ({ companyName, title, description, image, link }) => (
  <div className="bg-gray-100 p-2 rounded-lg shadow-sm mt-4">
    <Image
      src={image}
      alt={title}
      width={250}
      height={125}
      className="w-full h-16 object-cover rounded"
    />
    <h3 className="text-sm font-semibold mt-2">{companyName}</h3>
    <p className="text-sm font-semibold">{title}</p>
    <p className="text-gray-600 mt-1 text-xs">{description}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-primary text-white px-2 py-1 rounded mt-2 text-xs hover:bg-secondary transition"
    >
      Learn More
    </a>
  </div>
);

export default Advertisement;
