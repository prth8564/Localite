import { getHangoutPlaces } from '../googlePlaces';

export const placesResolver = {
  Query: {
    async hangoutPlaces(_: any, args: { lat: number; lng: number; radius?: number }, context: any) {
      const apiKey = process.env.GOOGLE_PLACES_API_KEY;
      if (!apiKey) throw new Error('Google Places API key not set');
      return getHangoutPlaces({
        lat: args.lat,
        lng: args.lng,
        radius: args.radius,
        apiKey,
      });
    },
  },
};