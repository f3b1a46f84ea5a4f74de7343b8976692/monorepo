import { Container } from '@local/shared/ui/Container/Container';
import { Navbar } from '../../widgets/Landing/ui/Navbar/Navbar';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import { useSmoothScroll } from '@local/shared/hooks/useSmoothScroll';
import Line from '@local/assets/icons/line.svg';

const lines = [
    'Immerse',
    'yourself',
    'in the wonders',
    'of Krasnodar',
    'region.',
];

const thirdLines = [
    ' Lorem ipsum dolor sit amet consectetur',
    ' adipisicing elit. Aspernatur perferendis ullam',
    ' rem dignissimos animi, dolores officiis saepe',
];
const letterAnimation = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: i * 0.025,
            duration: 0.4,
            ease: 'easeOut',
        },
    }),
};

const subtitleVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1,
            duration: 0.8,
            ease: 'easeOut',
        },
    },
};

const descriptionVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 1.4,
            duration: 0.8,
            ease: 'easeOut',
        },
    },
};

export const LandingPage = () => {
    useSmoothScroll(); // Применяем хук

    return (
        <main
            style={{
                overflowY: 'hidden',
                scrollBehavior: 'smooth', // Плавный скролл по всей странице
            }}
        >
            <video
                style={{ position: 'fixed' }}
                src="/background.mp4"
                autoPlay
                loop
                muted
                className=" top-0 left-0 w-full h-[200vh] object-cover z-0"
            />

            {/* Анимация растягивающейся линии */}
            <motion.div
                style={{
                    transform: 'translateX(-35%)',
                }}
                className="absolute z-100 -bottom-[105vh]"
                initial={{ width: 0, left: '35%' }}
                transition={{
                    duration: 2, // Продолжительность анимации
                    ease: 'easeInOut',
                }}
            >
                <Line />
            </motion.div>

            {/* Первая секция */}
            <section className="h-[100vh] bg-inherit relative z-10 mb-20">
                <Container className="flex flex-col gap-10 h-full relative z-10">
                    <Navbar />
                    <div className="flex justify-between items-start">
                        <motion.h1
                            className="text-[140px] leading-[130px] text-nowrap text-white text-left max-w-4xl"
                            initial="hidden"
                            animate="visible"
                            variants={letterAnimation}
                            whileInView="visible"
                            viewport={{ once: false }} // Убедитесь, что анимация будет повторяться
                        >
                            {lines.map((line, lineIndex) => (
                                <div key={lineIndex}>
                                    {line.split('').map((char, charIndex) => (
                                        <motion.span
                                            key={`${lineIndex}-${charIndex}`}
                                            custom={lineIndex * 10 + charIndex} // чтобы delay шёл по всей фразе
                                            variants={letterAnimation}
                                            className="inline-block"
                                        >
                                            {char === ' ' ? '\u00A0' : char}
                                        </motion.span>
                                    ))}
                                </div>
                            ))}
                        </motion.h1>

                        <div className="flex flex-col gap-4 self-end h-full w-full relative">
                            <motion.p
                                className="absolute text-nowrap text-xl text-white right-5 bottom-28"
                                variants={subtitleVariant}
                                initial="hidden"
                                animate="visible"
                                whileInView="visible"
                                viewport={{ once: false }} // Повторяйте анимацию
                                transition={{
                                    repeat: Infinity,
                                    repeatType: 'loop',
                                    duration: 3,
                                    ease: 'easeInOut',
                                }}
                            >
                                Mountain Magic, Sea Charm
                            </motion.p>

                            <motion.p
                                className="absolute text-xl text-white right-5 bottom-0 w-96 text-left"
                                variants={descriptionVariant}
                                initial="hidden"
                                animate="visible"
                                whileInView="visible"
                                viewport={{ once: false }} // Повторяйте анимацию
                            >
                                Your journey begins here – explore sunny
                                beaches, snowy peaks, and unforgettable
                                adventures in Russia’s premier destination
                            </motion.p>
                        </div>
                    </div>

                    <motion.div
                        className="absolute"
                        initial={{ bottom: 30, left: '50%', opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 3 }}
                        style={{ transform: 'translateX(-50%)' }} // Центрируем по горизонтали
                    >
                        <div className="flex items-center gap-4 text-white self-center">
                            Scroll down
                            <motion.div
                                animate={{ y: [0, 3, 0] }}
                                transition={{
                                    duration: 1.2,
                                    ease: 'easeInOut',
                                    repeat: Infinity,
                                }}
                            >
                                <FaArrowDown />
                            </motion.div>
                        </div>
                    </motion.div>
                </Container>
            </section>

            {/* Вторая секция */}
            <section className="h-[100vh] bg-inherit relative z-10 flex pt-10 flex-col gap-8">
                <Container className="flex flex-col w-full gap-10 h-full z-10 relative">
                    <motion.div
                        className="absolute flex gap-4 items-center"
                        initial={{ top: -10, left: 0, opacity: 0 }}
                        animate={{ top: -10, left: 20, opacity: 1 }}
                        transition={{ duration: 1, delay: 0 }}
                    >
                        <h3 className="text-white text-2xl">01</h3>
                        <h3 className="text-white text-2xl">About resorts</h3>
                    </motion.div>
                    <motion.div
                        className="absolute flex gap-4 items-center max-w-screen-sm"
                        initial={{ top: -10, right: 0, opacity: 0 }}
                        animate={{ top: -10, right: 20, opacity: 1 }}
                        transition={{ duration: 1, delay: 0 }}
                    >
                        <h3 className="text-white text-3xl leading-10 font-medium">
                            From Black Sea beaches to mountain health retreats,
                            Krasnodar region offers a year-round escape for
                            every traveler. Rejuvenate in mineral spas, hike
                            coastal cliffs, or ski the slopes of the Caucasus –
                            all within a single destination.
                        </h3>
                    </motion.div>
                    <div className="relative mt-72">
                        <motion.div
                            className="absolute flex gap-4 items-center max-w-screen-sm"
                            initial={{ top: -10, right: 0, opacity: 0 }}
                            animate={{ top: -10, right: 120, opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                            whileInView={{ opacity: 1 }}
                        >
                            <div className="flex flex-col gap-4 text-white">
                                <FaArrowDown className="-rotate-45" />
                                <div className="flex align-top">
                                    <h3 className="text-[120px] min-w-[300px] leading-[100px]">
                                        16.3
                                    </h3>
                                    <p className="text-[18px] leading-[18px]">
                                        Million Tourist <br /> Visits Annually
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="absolute flex gap-4 items-center max-w-screen-sm"
                            initial={{ bottom: -340, opacity: 0, left: 120 }}
                            animate={{ bottom: -400, opacity: 1 }}
                            transition={{ duration: 1, delay: 2 }}
                            whileInView={{ opacity: 1 }} // Анимация активируется при попадании в поле зрения
                        >
                            <div className="flex flex-col gap-4 text-white">
                                <FaArrowDown className="-rotate-45" />
                                <div className="flex align-top">
                                    <h3 className="text-[120px] leading-[100px]">
                                        3
                                    </h3>
                                    <p className="text-[18px] leading-[18px]">
                                        Climatic Zones <br /> In One Region
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="absolute flex gap-4 items-center max-w-screen-sm"
                            initial={{ bottom: -450, right: 0, opacity: 0 }}
                            animate={{ bottom: -450, right: 120, opacity: 1 }}
                            transition={{ duration: 1, delay: 3 }}
                            whileInView={{ opacity: 1 }}
                        >
                            <div className="flex flex-col gap-4 text-white">
                                <FaArrowDown className="-rotate-45" />
                                <div className="flex align-top">
                                    <h3 className="text-[120px] leading-[100px]">
                                        400+
                                    </h3>
                                    <p className="text-[18px] leading-[18px]">
                                        km, Black Sea <br /> coastline
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>
            {/* Третья секция */}
            <section className="h-[100vh] bg-inherit relative z-100 bg-white flex pt-32 flex-col gap-8">
                <Container className="flex flex-col w-full gap-10 h-full z-10 relative">
                    <motion.div
                        className="absolute flex gap-4 items-center"
                        initial={{ top: -10, left: 0, opacity: 0 }}
                        animate={{ top: -10, left: 20, opacity: 1 }}
                        transition={{ duration: 1, delay: 0 }}
                    >
                        <h3 className="text-zinc-700 text-2xl">02</h3>
                        <h3 className="text-zinc-700 text-2xl">Guides</h3>
                    </motion.div>
                    <motion.div
                        className="absolute flex gap-4 items-center max-w-screen-sm"
                        initial={{ top: -10, right: 0, opacity: 0 }}
                        animate={{ top: -10, right: 20, opacity: 1 }}
                        transition={{ duration: 1, delay: 0 }}
                    >
                        <h3 className="text-zinc-700 text-3xl leading-10 font-medium">
                            From Black Sea beaches to mountain health retreats,
                            Krasnodar region offers a year-round escape for
                            every traveler. Rejuvenate in mineral spas, hike
                            coastal cliffs, or ski the slopes of the Caucasus –
                            all within a single destination.
                        </h3>
                    </motion.div>
                    <div className="relative mt-72">
                        <motion.div
                            className="absolute flex gap-4 items-center max-w-screen-sm"
                            initial={{ top: -10, right: 0, opacity: 0 }}
                            animate={{ top: -10, right: 120, opacity: 1 }}
                            transition={{ duration: 1, delay: 0 }}
                        >
                            <motion.h1
                                className="text-md text-nowrap text-zinc-700 text-left"
                                initial="hidden"
                                animate="visible"
                                variants={letterAnimation}
                                whileInView="visible"
                                viewport={{ once: false }} // Убедитесь, что анимация будет повторяться
                            >
                                {thirdLines.map((line, lineIndex) => (
                                    <div key={lineIndex}>
                                        {line
                                            .split('')
                                            .map((char, charIndex) => (
                                                <motion.span
                                                    key={`${lineIndex}-${charIndex}`}
                                                    custom={
                                                        lineIndex * 10 +
                                                        charIndex
                                                    } // чтобы delay шёл по всей фразе
                                                    variants={letterAnimation}
                                                    className="inline-block"
                                                >
                                                    {char === ' '
                                                        ? '\u00A0'
                                                        : char}
                                                </motion.span>
                                            ))}
                                    </div>
                                ))}
                            </motion.h1>
                        </motion.div>
                        <motion.div
                            className="absolute flex gap-4 items-center max-w-screen-sm"
                            initial={{ bottom: -340, opacity: 0, left: 120 }}
                            animate={{ bottom: -400, opacity: 1 }}
                            transition={{ duration: 1, delay: 2 }}
                            whileInView={{ opacity: 1 }} // Анимация активируется при попадании в поле зрения
                        >
                            <div className="flex flex-col gap-4 text-white">
                                <FaArrowDown className="-rotate-45" />
                                <div className="flex align-top">
                                    <h3 className="text-[120px] leading-[100px]">
                                        3
                                    </h3>
                                    <p className="text-[18px] leading-[18px]">
                                        Climatic Zones <br /> In One Region
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="absolute flex gap-4 items-center max-w-screen-sm"
                            initial={{ bottom: -450, right: 0, opacity: 0 }}
                            animate={{ bottom: -450, right: 120, opacity: 1 }}
                            transition={{ duration: 1, delay: 3 }}
                            whileInView={{ opacity: 1 }}
                        >
                            <div className="flex flex-col gap-4 text-white">
                                <FaArrowDown className="-rotate-45" />
                                <div className="flex align-top">
                                    <h3 className="text-[120px] leading-[100px]">
                                        400+
                                    </h3>
                                    <p className="text-[18px] leading-[18px]">
                                        km, Black Sea <br /> coastline
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>
        </main>
    );
};
