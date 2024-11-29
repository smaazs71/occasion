// app/not-found/page.js
export default function NotFound() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fff7e6] text-[#555]">
        <h1 className="text-4xl font-serif text-red-500">Page Not Found</h1>
        <p className="text-lg mt-4">
          The occasion you are looking for does not exist.
        </p>
        <a
          href="/"
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded shadow-md hover:bg-blue-600"
        >
          Return Home
        </a>
      </div>
    );
  }
  