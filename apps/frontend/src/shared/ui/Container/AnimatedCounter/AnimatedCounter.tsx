import { useEffect, useState } from 'react';

// AnimatedCounter компонент с логикой анимации
export const AnimatedCounter = ({
    endValue,
    duration = 2,
}: {
    endValue: number;
    duration: number;
}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const isFloat = endValue % 1 !== 0; // Проверяем, является ли число с плавающей точкой
        const stepTime = (duration * 1000) / endValue; // Скорость увеличения числа
        let currentValue = 0;

        // Для целых чисел увеличиваем на 1, для чисел с плавающей точкой — на 0.1
        const step = isFloat ? 0.1 : 1;

        const interval = setInterval(() => {
            if (currentValue < endValue) {
                currentValue += step;
                // Ограничиваем количество знаков после запятой, если число с плавающей точкой
                setCount(
                    isFloat
                        ? parseFloat(currentValue.toFixed(1))
                        : Math.floor(currentValue)
                );
            } else {
                setCount(
                    isFloat
                        ? parseFloat(endValue.toFixed(1))
                        : Math.floor(endValue)
                );
                clearInterval(interval);
            }
        }, stepTime);

        return () => clearInterval(interval);
    }, [endValue, duration]);

    // Форматируем число в строку
    const formattedCount = count.toLocaleString('en-US', {
        minimumFractionDigits: 0, // не показывать дробные части, если число целое
        maximumFractionDigits: count % 1 === 0 ? 0 : 1, // показываем 1 знак после запятой, если число с плавающей точкой
    });

    return <span>{formattedCount}</span>;
};
