export async function fetchWeather(lat: number, lon: number) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&temperature_unit=celsius&timezone=auto`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Ошибка получения данных');
    const data = await res.json();
    return {
        temperature: data.current_weather?.temperature,
        windspeed: data.current_weather?.windspeed,
        code: data.current_weather?.weathercode,
    };
}

