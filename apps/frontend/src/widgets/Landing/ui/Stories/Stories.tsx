import { Container } from '@local/shared/ui/Container/Container';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Button, ButtonGroup } from '@heroui/react';
import { FaArrowLeft, FaArrowRight, FaHeart } from 'react-icons/fa';
import { useRef, useState, useEffect } from 'react';
import Heart from '@local/assets/icons/heart.svg';
import { useTranslation } from 'react-i18next';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];

const buttons = [
    'Bloom Season',
    'Golden Escape',
    'Snow Silence',
    'Urban Exploration',
    'Food & Wine',
    'Wellness & Nature',
    'Hike & Rise',
    'Soul of Kuban',
    'Time Travel',
    'Coastal Retreats',
];

export const Stories = () => {
    const { t } = useTranslation();

    // Создаем реф для Swiper и ButtonGroup
    const swiperRef = useRef<any>(null);
    const buttonGroupRef = useRef<any>(null);

    // Состояние для отслеживания активного слайда
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    // Функции для переключения слайдов
    const handlePrevSlide = () => {
        swiperRef.current.swiper.slidePrev();
    };

    const handleNextSlide = () => {
        swiperRef.current.swiper.slideNext();
    };

    // Обработчик изменения слайда, обновляем активный индекс
    const handleSlideChange = (swiper: any) => {
        const newIndex = swiper.activeIndex;
        setActiveSlideIndex(newIndex);

        // Прокрутка ButtonGroup до активной кнопки
        if (buttonGroupRef.current) {
            const button = buttonGroupRef.current.children[newIndex];
            if (button) {
                buttonGroupRef.current.scrollTo({
                    left: button.offsetLeft - buttonGroupRef.current.offsetLeft,
                    behavior: 'smooth',
                });
            }
        }
    };

    // Прокручиваем ButtonGroup, когда активный слайд изменяется
    useEffect(() => {
        if (buttonGroupRef.current) {
            const button = buttonGroupRef.current.children[activeSlideIndex];
            if (button) {
                buttonGroupRef.current.scrollTo({
                    left: button.offsetLeft - buttonGroupRef.current.offsetLeft,
                    behavior: 'smooth',
                });
            }
        }
    }, [activeSlideIndex]); // Следим за изменением activeSlideIndex

    return (
        <section id="stories" className="h-[100vh] relative z-100">
            <div
                // style={{
                //     backgroundImage: 'url(/stories.png)',
                //     backgroundRepeat: 'no-repeat',
                //     backgroundSize: 'cover',
                // }}
                className="w-full bg-[#404040c9] backdrop-blur-sm h-full py-10"
            >
                <Container className="flex flex-col h-full w-full relative z-10 gap-12">
                    <div className="absolute top-10 right-10 flex gap-2">
                        <Button
                            className="rounded-full text-white bg-zinc-500"
                            size="lg"
                            isIconOnly
                            endContent={<FaArrowLeft />}
                            onClick={handlePrevSlide} // При клике переключаем на предыдущий слайд
                        />
                        <Button
                            className="rounded-full text-white bg-zinc-500"
                            size="lg"
                            isIconOnly
                            endContent={<FaArrowRight />}
                            onClick={handleNextSlide} // При клике переключаем на следующий слайд
                        />
                    </div>
                    <div className="absolute top-36 right-10 rounded-full left-auto max-w-[600px] overflow-hidden">
                        <div
                            className="flex overflow-x-auto scrollbar-hide py-2"
                            style={{ scrollbarWidth: 'none' }}
                        >
                            <ButtonGroup
                                ref={buttonGroupRef}
                                className="rounded-3xl gap-1 flex bg-zinc-500 flex-nowrap whitespace-nowrap"
                            >
                                {buttons.map((item, index) => (
                                    <Button
                                        key={index}
                                        className={`${
                                            activeSlideIndex === index
                                                ? 'bg-zinc-400' // Активная кнопка
                                                : 'bg-zinc-500'
                                        } text-white px-6 py-3 text-nowrap`}
                                        size="lg"
                                        style={{
                                            minWidth: '150px',
                                            borderRadius: '9999px',
                                        }}
                                        onClick={() => {
                                            swiperRef.current.swiper.slideTo(
                                                index
                                            );
                                            setActiveSlideIndex(index); // Обновляем активный индекс
                                        }} // Переключение на соответствующий слайд
                                    >
                                        {t(`stories.button${index + 1}`, item)}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </div>
                    </div>

                    <motion.div
                        className="opacity-75 flex gap-4 items-center text-xl text-white"
                        initial={{ x: '-10%', opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        <h2>04</h2>
                        <h2>{t('stories.title', 'Season Travel Stories')}</h2>
                    </motion.div>
                    <motion.h1
                        className="opacity-75 flex gap-4 items-center text-[60px] max-w-[500px] text-white leading-[60px] mb-12"
                        initial={{ y: '-25%', opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        {t('stories.heading', 'Choose your seasonal journey')}
                    </motion.h1>
                    <Swiper
                        ref={swiperRef}
                        spaceBetween={20}
                        slidesPerView={4}
                        className="w-full"
                        onSlideChange={handleSlideChange}
                    >
                        {buttons.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col gap-6 relative">
                                    <div className="relative">
                                        <img
                                            src="/image.png"
                                            className="w-full h-full object-cover rounded-3xl"
                                            alt={`slide-${index}`}
                                        />
                                        <Button
                                            size="lg"
                                            className="rounded-full absolute top-4 right-4 bg-[#f0f0f01a] backdrop-blur-sm"
                                            isIconOnly
                                            endContent={<Heart />}
                                        />
                                        <div className="flex absolute bottom-4 left-4 items-center gap-2">
                                            <Button
                                                size="lg"
                                                className="rounded-full bg-[#f0f0f01a] backdrop-blur-sm"
                                                isIconOnly
                                                endContent={
                                                    <FaArrowRight className="-rotate-45 text-white" />
                                                }
                                            />
                                            <p className="text-white font-medium text-xl">
                                                7.4к
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2 text-white">
                                        <h5 className="text-3xl">
                                            {t(
                                                `stories.button${index + 1}`,
                                                item
                                            )}
                                        </h5>{' '}
                                        {/* Локализация названия сезона */}
                                        <p className="opacity-50 text-md">
                                            {t(
                                                'stories.slide.description',
                                                'Peach & cherry bloom in Gulkivichi gardens'
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Container>
            </div>
        </section>
    );
};
