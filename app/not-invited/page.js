// app/not-invited/page.js
export default function NotInvited() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fff7e6]">
      <h1 className="text-4xl font-serif text-red-500 mb-4">Sorry!</h1>
      <p className="text-lg font-sans text-gray-700">
        It seems like you are not on the guest list.
      </p>
      <a
        href="/"
        className="mt-6 px-4 py-2 bg-red-500 text-white rounded shadow-md hover:bg-red-600"
      >
        Go Back to Home
      </a>
    </div>
  );
}
