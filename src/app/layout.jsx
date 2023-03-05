import Footer from "@/components/Footer";

import "./globals.css";

export const metadata = {
  title: "Google Clone",
  description: "Google search engine clone created by Next.js 13.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen">
        <main className="flex flex-col items-center flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
