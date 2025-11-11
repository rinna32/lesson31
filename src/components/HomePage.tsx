import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function HomePage() {
    return (
        <div className="p-6 bg-white rounded-xl shadow-lg mt-4 text-center">
            <h1 className="text-2xl font-semibold mb-3">
                приложение погоды
            </h1>

            <div className="rounded-lg overflow-hidden shadow-inner border border-gray-200">
                <YMaps>
                    <Map
                        defaultState={{
                            center: [55.751244, 37.618423],
                            zoom: 10,
                        }}
                        width="100%"
                        height="300px"
                    >
                        <Placemark
                            geometry={[55.751244, 37.618423]}
                            properties={{
                                balloonContent: 'Москва 🌆',
                                hintContent: 'Столица России',
                            }}
                        />
                    </Map>
                </YMaps>
            </div>

            <p className="text-gray-500 text-sm mt-2">
                интерактивная карта Яндекс
            </p>
        </div>
    );
}