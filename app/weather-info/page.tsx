import SearchBox from "@/components/search-box";
import WeatherData from "@/components/weaterh-data";
import WeatherLogo from "@/components/weather-log";
import { WeatherProps } from "@/utils/types";

import React from "react";

const WeatherInfo: React.FC<WeatherProps> = ({ searchParams }) => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="p-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center">
          <WeatherLogo />

          <div className="w-full sm:w-auto flex-1">
            <SearchBox />
          </div>
        </div>
      </header>

      <main>
        <WeatherData localityData={searchParams} />
      </main>
    </div>
  );
};

export default WeatherInfo;
