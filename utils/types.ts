export interface Locality {
  id: number;
  cityName: string;
  localityName: string;
  localityId: string;
  latitude: number;
  longitude: number;
  device_type: string;
}

export interface WeatherProps {
  searchParams: { localityId: string; cityName: string; localityName: string };
}

export interface LocalityId {
  localityId: string;
}

export interface LocalityData {
  localityData: { localityId: string; cityName: string; localityName: string };
}
