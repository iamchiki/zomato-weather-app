import { API_URL, AUTH_TOKEN } from "@/utils/constants";
import { LocalityData } from "@/utils/types";

const WeatherData: React.FC<LocalityData> = async ({ localityData }) => {
  const targetUrl = `${API_URL}?locality_id=${localityData.localityId}`;

  const response = await fetch(targetUrl, {
    method: "GET",
    headers: {
      "X-Zomato-Api-Key": `${AUTH_TOKEN}`,
    },
  });

  const result = await response.json();

  console.log(result);
  console.log(localityData);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="flex flex-col bg-white rounded-lg p-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <div className="text-center">
            <div className="font-bold text-2xl sm:text-3xl md:text-4xl">
              {localityData.cityName}
            </div>
            <div className="text-sm text-gray-500 sm:text-base md:text-lg">
              {localityData.localityName}
            </div>
          </div>
          <div className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24 md:h-32 md:w-32">
            <svg
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
            </svg>
          </div>
          <div className="flex flex-row items-center justify-center mt-6">
            <div className="font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              {result.locality_weather_data.temperature
                ? `${result.locality_weather_data.temperature}°C`
                : "N/A"}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-around mt-6 space-y-4 md:space-y-0">
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm lg:text-base">Wind Speed</div>
              <div className="text-sm text-gray-500 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-waves size-6 mr-1">
                  <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
                  <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
                  <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
                </svg>
                <p>
                  {result.locality_weather_data.wind_speed !== null
                    ? `${result.locality_weather_data.wind_speed} km/h`
                    : "N/A"}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm lg:text-base">Humidity</div>
              <div className="text-sm text-gray-500 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-droplets size-6 mr-1">
                  <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path>
                  <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path>
                </svg>
                <p>
                  {result.locality_weather_data.humidity !== null
                    ? `${result.locality_weather_data.humidity}%`
                    : "N/A"}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm lg:text-base">
                Rain Intensity
              </div>
              <div className="text-sm text-gray-500 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-cloud-rain size-6 mr-1">
                  <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
                  <path d="M16 14v6"></path> <path d="M8 14v6"></path>
                  <path d="M12 16v6"></path>
                </svg>
                <p>
                  {result.locality_weather_data.rain_intensity !== null
                    ? `${result.locality_weather_data.rain_intensity} mm/min`
                    : "N/A"}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm lg:text-base">
                Rain Accumulation
              </div>
              <div className="text-sm text-gray-500 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-flask-round size-6 mr-1">
                  <path d="M10 2v7.31"></path> <path d="M14 9.3V1.99"></path>
                  <path d="M8.5 2h7"></path>
                  <path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path>
                  <path d="M5.52 16h12.96"></path>
                </svg>
                <p>
                  {result.locality_weather_data.rain_accumulation !== null
                    ? `${result.locality_weather_data.rain_accumulation} mm`
                    : "N/A"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherData;
