export default function Advertisement({
    companyName,
    image,
    title,
    description,
    link,
  }) {
    return (
      <footer className="bg-[#1e293b] p-4 rounded-lg shadow-md mt-6 lg:mt-0 lg:col-span-1">
        <h2 className="text-xl font-serif text-center mb-4 text-[#9333ea]">
          Advertisement
        </h2>
        <div className="flex flex-col items-center">
          <img
            src={image}
            alt={`${companyName} Advertisement`}
            className="rounded-lg shadow-md mb-4 w-full sm:w-3/4 lg:w-full"
          />
          <p className="text-md text-[#e2e8f0] mb-2">
            <strong>{title}</strong>
          </p>
          <p className="text-sm text-[#94a3b8] text-center mb-4">{description}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 bg-[#10b981] text-white rounded shadow-md text-sm hover:bg-[#059669]"
          >
            Visit Us
          </a>
        </div>
      </footer>
    );
  }
  