// app/layout.js
import "./globals.css";
import Footer from "./components/Footer";

export const metadata = {
  title: "Wedding Invitation",
  description: "Modern and elegant wedding invitation website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
