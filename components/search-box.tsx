"use client";

import { localities, Locality } from "@/data/data";
import { useRouter } from "next/navigation";
import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const SearchBox: React.FC = () => {
  const router = useRouter();

  const handleOnSelect = (item: Locality) => {
    // the item selected

    router.push("/weather-info");
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
      />
    </>
  );
};

export default SearchBox;
