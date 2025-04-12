import { useEffect, useState, useRef } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { BackButton } from '@local/shared/ui/BackButton';

export const MapPage = () => {
    const map = useRef<any | null>(null); // Ссылка на объект карты
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    // Извлечение координат из query параметров
    const [userLocation, setUserLocation] = useState<{
        lat: number;
        lon: number;
    } | null>(null);
    const [pointLocation, setPointLocation] = useState<{
        lat: number;
        lon: number;
    } | null>(null);

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Извлечение координат из URL
    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const userLat = parseFloat(queryParams.get('user.lat') || '0');
        const userLon = parseFloat(queryParams.get('user.lon') || '0');
        const pointLat = parseFloat(queryParams.get('point.lat') || '0');
        const pointLon = parseFloat(queryParams.get('point.lon') || '0');

        if (userLat && userLon) {
            setUserLocation({ lat: userLat, lon: userLon });
        }

        if (pointLat && pointLon) {
            setPointLocation({ lat: pointLat, lon: pointLon });
        }
    }, []);

    // Функция для добавления маршрута на карту
    const addRoute = (ymaps: any) => {
        if (userLocation && pointLocation) {
            const multiRoute = new ymaps.multiRouter.MultiRoute(
                {
                    referencePoints: [
                        [userLocation.lat, userLocation.lon], // Координаты пользователя
                        [pointLocation.lat, pointLocation.lon], // Точка назначения
                    ],
                    params: {
                        routingMode: 'pedestrian', // Режим пешеходного маршрута
                    },
                },
                {
                    boundsAutoApply: true,
                }
            );

            map.current.geoObjects.add(multiRoute);
        }
    };

    const defaultState = {
        center: userLocation
            ? [userLocation.lat, userLocation.lon]
            : [55.751574, 37.573856], // Центр карты
        zoom: 9,
        controls: ['zoomControl'],
    };

    return (
        <div className="relative">
            <BackButton />
            <YMaps query={{ apikey: import.meta.env.VITE_YANDEX_MAP_API }}>
                <Map
                    instanceRef={map}
                    defaultState={defaultState}
                    modules={['multiRouter.MultiRoute', 'control.ZoomControl']}
                    width={`${dimensions.width}px`}
                    height={`${dimensions.height}px`}
                    onLoad={addRoute} // Вызываем addRoute при загрузке карты
                >
                    {/* Маркер для пользователя */}
                    {userLocation && (
                        <Placemark
                            geometry={[userLocation.lat, userLocation.lon]}
                        />
                    )}
                    {/* Маркер для точки назначения */}
                    {pointLocation && userLocation && (
                        <Placemark
                            geometry={[
                                userLocation.lat + 1,
                                userLocation.lon + 1,
                            ]}
                        />
                    )}
                </Map>
            </YMaps>
        </div>
    );
};
