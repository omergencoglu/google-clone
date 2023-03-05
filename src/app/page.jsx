import { Fragment } from "react";
import Image from "next/image";

import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";

export default function Home() {
  return (
    <Fragment>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png"
          alt="Google logo"
          width={300}
          height={100}
          className="select-none"
          priority
        />
        <HomeSearch />
      </div>
    </Fragment>
  );
}
