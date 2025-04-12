import { LocationInterface } from '@local/entities/map/types/location.interface';
import { useNavigate } from 'react-router-dom';

export const useGeoRedirect = () => {
    const navigate = useNavigate();

    const handleRedirect = (endLat: number, endLon: number) => {
        if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser');
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                // Получаем координаты пользователя
                const user: LocationInterface = {
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                };

                // Формируем URL для Yandex Maps с маршрутом
                const routeUrl = `https://yandex.ru/maps/?ll=${user.lon},${user.lat}&mode=routes&rtext=${user.lat},${user.lon}~${endLat},${endLon}&rtt=pd`;

                // Редиректим на сайт с маршрутом
                window.location.href = routeUrl; // Здесь происходит редирект на Yandex Maps
            },
            (error) => {
                alert('Failed to get location: ' + error.message);
            }
        );
    };

    return { handleRedirect };
};
