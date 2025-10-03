import axios from 'axios';

const GOOGLE_PLACES_API_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';

export interface Place {
  place_id?: string;
  name?: string;
  geometry?: {
    location?: {
      lat: number;
      lng: number;
    };
  };
  types?: string[];
  vicinity?: string;
  photos?: any[];
}

export async function getHangoutPlaces({
  lat,
  lng,
  radius = 2000,
  type = 'cafe|bar|restaurant|night_club|park',
  apiKey,
}: {
  lat: number;
  lng: number;
  radius?: number;
  type?: string;
  apiKey: string;
}): Promise<Place[]> {
  const params = {
    location: `${lat},${lng}`,
    radius,
    type,
    key: apiKey,
  };
  const response = await axios.get(GOOGLE_PLACES_API_URL, { params });
  if (response.data.status !== 'OK') {
    throw new Error(response.data.error_message || 'Failed to fetch places');
  }
  return response.data.results;
}
