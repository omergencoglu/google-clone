import Footer from "@/components/Footer";
import SearchHeader from "@/components/SearchHeader";

import "./../globals.css";

export const metadata = {
  title: "Search Page - Google Clone",
  description: "Search page of Google clone.",
};

export default function SearchLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <SearchHeader />
        <main className="flex flex-col items-center flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
