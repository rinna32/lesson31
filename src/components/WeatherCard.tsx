import React from 'react';

export const WeatherCard: React.FC<{ weather: any }> = ({ weather }) => {
    if (!weather) return null;
    return (
        <div className="p-4 border rounded-xl text-center shadow-sm bg-white">
            <div className="text-5xl font-bold">{Math.round(weather.temperature)}°C</div>
            <div>Ветер: {weather.windspeed} м/с</div>
            <div className="text-sm opacity-70">Код погоды: {weather.code}</div>
        </div>
    );
};
