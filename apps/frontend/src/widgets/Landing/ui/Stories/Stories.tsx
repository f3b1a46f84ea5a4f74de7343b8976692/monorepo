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
    {
        name: 'Bloom Season',
        img: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Krasnodar_teatr.jpg',
    },
    {
        name: 'Golden Escape',
        img: 'https://cdn.tripster.ru/photos/3111ac1d-f823-4254-850a-d044c0f43dd4.jpg',
    },
    {
        name: 'Snow Silence',
        img: 'https://cdn.tripster.ru/thumbs2/e2fa5262-4bd7-11ee-8656-d6c2bdfda223.1220x600.jpeg',
    },
    {
        name: 'Urban Exploration',
        img: 'https://cdn.tripster.ru/thumbs2/3dd20b6a-5e6d-11ee-a16e-cac32b1340bf.1220x600.jpeg',
    },
    {
        name: 'Food & Wine',
        img: 'https://vashotel-a.akamaihd.net/0000000240723647/x300/bb5f91d94ac69898555766ccd2576e25.jpg',
    },
    {
        name: 'Wellness & Nature',
        img: 'https://guide-tours.ru/wp-content/uploads/2023/03/lazarevskoe-ili-loo-jpg.webp',
    },
    {
        name: 'Hike & Rise',
        img: 'https://sutochno.ru/doc/images/galleries/182/eysk2.jpg',
    },
    {
        name: 'Soul of Kuban',
        img: 'https://tripplanet.ru/wp-content/uploads/europe/russia/novorossysk/dostoprimechatelnosti-novorossijska.jpg',
    },
    {
        name: 'Time Travel',
        img: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/%D4%B1%D6%80%D5%B4%D5%A1%D5%BE%D5%AB%D6%80%D5%AB_%D5%AF%D5%A5%D5%B6%D5%BF%D6%80%D5%B8%D5%B6%D5%A1%D5%AF%D5%A1%D5%B6_%D5%B0%D6%80%D5%A1%D5%BA%D5%A1%D5%BC%D5%A1%D5%AF.jpg',
    },
    {
        name: 'Coastal Retreats',
        img: 'https://cdn.tripster.ru/thumbs2/3dd20b6a-5e6d-11ee-a16e-cac32b1340bf.1220x600.jpeg',
    },
];

export const Stories = () => {
    const { t } = useTranslation();

    const swiperRef = useRef<any>(null);
    const buttonGroupRef = useRef<any>(null);

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const handlePrevSlide = () => {
        swiperRef.current.swiper.slidePrev();
    };

    const handleNextSlide = () => {
        swiperRef.current.swiper.slideNext();
    };

    const handleSlideChange = (swiper: any) => {
        const newIndex = swiper.activeIndex;
        setActiveSlideIndex(newIndex);

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
    }, [activeSlideIndex]);

    return (
        <section id="stories" className="h-[100vh] relative z-100">
            <div className="w-full bg-[#404040c9] backdrop-blur-sm h-full py-10">
                <Container className="flex flex-col h-full w-full relative z-10 gap-12">
                    <div className="absolute top-10 right-10 flex gap-2">
                        <Button
                            className="rounded-full text-white bg-zinc-500"
                            size="lg"
                            isIconOnly
                            endContent={<FaArrowLeft />}
                            onClick={handlePrevSlide}
                        />
                        <Button
                            className="rounded-full text-white bg-zinc-500"
                            size="lg"
                            isIconOnly
                            endContent={<FaArrowRight />}
                            onClick={handleNextSlide}
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
                                {buttons.map((button, index) => (
                                    <Button
                                        key={index}
                                        className={`${
                                            activeSlideIndex === index
                                                ? 'bg-zinc-400'
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
                                            setActiveSlideIndex(index);
                                        }}
                                    >
                                        {t(
                                            `stories.button${index + 1}`,
                                            button.name
                                        )}
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
                        {buttons.map((button, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col gap-6 relative">
                                    <div className="relative">
                                        <img
                                            src={button.img}
                                            className="w-full h-[400px]  object-cover rounded-3xl"
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
                                                button.name
                                            )}
                                        </h5>
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
