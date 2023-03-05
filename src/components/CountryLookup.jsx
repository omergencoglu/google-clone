"use client";

import { useEffect, useState } from "react";

const API_Key = process.env.NEXT_PUBLIC_IP_API_KEY;

export default function CountryLookup() {
  const [country, setCountry] = useState("Finding location...");
  const [countryLoading, setCountryLoading] = useState(false);

  useEffect(() => {
    async function fetchCountry() {
      setCountryLoading(true);

      const response = await fetch(
        `https://extreme-ip-lookup.com/json/?key=${API_Key}`
      );

      if (!response) {
        setCountryLoading(false);
        setCountry("Couldn't find location.");
        return;
      }
      const data = await response.json();
      setCountry(data.country);

      setCountryLoading(false);
    }

    fetchCountry();
  }, []);
  ("");
  return <div>{countryLoading ? "Loading..." : country}</div>;
}
