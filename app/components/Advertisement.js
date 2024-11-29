// app/components/Advertisement.js
export default function Advertisement({
    companyName,
    image,
    title,
    description,
    link,
  }) {
    return (
      <footer className="bg-[#f4f4f4] p-6 rounded-lg shadow-lg mt-6">
        <h2 className="text-2xl font-serif text-center mb-4 text-[#333]">
          Advertisement
        </h2>
        <div className="flex flex-col items-center">
          <img
            src={image}
            alt={`${companyName} Advertisement`}
            className="rounded-lg shadow-md mb-4 w-full sm:w-1/2"
          />
          <p className="text-lg text-[#555] mb-2">
            <strong>{title}</strong>
          </p>
          <p className="text-md text-[#777] text-center mb-4">{description}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#333] text-white rounded shadow-md hover:bg-[#444]"
          >
            Visit Us
          </a>
        </div>
      </footer>
    );
  }
  