import { useState } from 'react';
import { fetchWeather } from '../services/weatherService';

export function useWeather() {
    const [weather, setWeather] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const load = async (lat: number, lon: number) => {
        setLoading(true);
        setError(null);
        try {
            const data = await fetchWeather(lat, lon);
            setWeather(data);
        } catch (e: any) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    };

    return { weather, loading, error, load };
}
