import { useEffect } from 'react';

export const useSmoothScroll = () => {
    useEffect(() => {
        const handleScroll = (event: WheelEvent) => {
            const sections = document.querySelectorAll('section');
            const scrollDirection = event.deltaY > 0 ? 'down' : 'up';

            // Определяем текущую секцию
            let currentSection: HTMLElement | null = null;
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 0 && rect.bottom > 0) {
                    currentSection = section as HTMLElement;
                }
            });

            if (currentSection) {
                let targetSection: HTMLElement | null = null;

                // Если скролл вниз, идем к следующей секции
                if (scrollDirection === 'down') {
                    targetSection =
                        currentSection.nextElementSibling as HTMLElement;
                }
                // Если скролл вверх, идем к предыдущей секции
                else {
                    targetSection =
                        currentSection.previousElementSibling as HTMLElement;
                }

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                    });
                }
            }
        };

        window.addEventListener('wheel', handleScroll, { passive: true });

        // Очистка события при размонтировании компонента
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);
};
