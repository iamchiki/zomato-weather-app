import WeatherLogo from "@/components/weather-log";
import SearchBox from "../components/search-box";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div className="flex flex-col items-center justify-center h-screen p-4">
        <WeatherLogo />

        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mt-3">
          <SearchBox />
        </div>
      </div>
    </main>
  );
}
