import "./globals.css";

export const metadata = {
  title: "Wedding Invitation",
  description: "A wedding invitation site built by Maaz.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-blue-100 to-pink-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
