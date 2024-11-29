import Link from "next/link";
export default function NotInvited() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1e293b] text-[#e2e8f0]">
      <h1 className="text-4xl font-serif text-red-500">Access Denied</h1>
      <p className="text-lg mt-4">You are not on the guest list.</p>
      <Link
        href="/"
        className="mt-6 px-4 py-2 bg-red-500 text-white rounded shadow-md hover:bg-red-600"
      >
        Return Home
      </Link>
    </div>
  );
}
