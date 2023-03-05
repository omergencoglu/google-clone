import { Fragment } from "react";

import SearchHeader from "@/components/SearchHeader";

export const metadata = {
  title: "Search Page - Google Clone",
  description: "Search page of Google clone.",
};

export default function SearchLayout({ children }) {
  return (
    <Fragment>
      <SearchHeader />
      {children}
    </Fragment>
  );
}
