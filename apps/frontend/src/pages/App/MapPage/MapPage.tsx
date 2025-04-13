import { useEffect, useState, useRef } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { BackButton } from '@local/shared/ui/BackButton';

export const MapPage = () => {
    const map = useRef<any | null>(null);

    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const [location, setLocation] = useState<{
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

    // Получаем координаты из URL (lat, lon)
    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const lat = parseFloat(queryParams.get('lat') || '');
        const lon = parseFloat(queryParams.get('lon') || '');

        if (!isNaN(lat) && !isNaN(lon)) {
            setLocation({ lat, lon });
        }
    }, []);

    const defaultState = {
        center: location
            ? [location.lat, location.lon]
            : [55.751574, 37.573856],
        zoom: 14,
        controls: ['zoomControl'],
    };

    return (
        <div className="relative">
            <BackButton />
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-expect-error */}
            <YMaps query={{ apikey: import.meta.env.VITE_YANDEX_MAP_API }}>
                <Map
                    instanceRef={map}
                    defaultState={defaultState}
                    modules={['control.ZoomControl']}
                    width={`${dimensions.width}px`}
                    height={`${dimensions.height}px`}
                >
                    {location && (
                        <Placemark geometry={[location.lat, location.lon]} />
                    )}
                </Map>
            </YMaps>
        </div>
    );
};
