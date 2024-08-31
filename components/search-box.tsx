"use client";

import { localities } from "@/data/data";
import { Locality } from "@/utils/types";
import { useRouter } from "next/navigation";
import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const SearchBox: React.FC = () => {
  const router = useRouter();

  const handleOnSelect = (item: Locality) => {
    const data = {
      localityId: item.localityId,
      cityName: item.cityName,
      localityName: item.localityName,
    };

    const queryString = new URLSearchParams(
      data as Record<string, string>
    ).toString();

    router.push(`/weather-info?${queryString}`);
  };

  const formatResult = (item: Locality) => {
    return (
      <>
        <span
          style={{ display: "block", textAlign: "left", cursor: "pointer" }}>
          {item.localityName}
        </span>
      </>
    );
  };

  return (
    <>
      <ReactSearchAutocomplete<Locality>
        items={localities}
        fuseOptions={{ keys: ["localityName"] }}
        resultStringKeyName="localityName"
        onSelect={handleOnSelect}
        autoFocus
        formatResult={formatResult}
        placeholder="Search Weather by Locality name"
      />
    </>
  );
};

export default SearchBox;
