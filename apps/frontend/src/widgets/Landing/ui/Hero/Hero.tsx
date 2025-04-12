import { Container } from '@local/shared/ui/Container/Container';
import { motion } from 'framer-motion';
import { Navbar } from '../Navbar';
import { ScrollDown } from '@local/shared/ui/ScrollDown';
import { useTranslation } from 'react-i18next';

const letterAnimation = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: i * 0.015,
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

export const Hero = () => {
    const { t } = useTranslation();

    // Получаем массив строк
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const lines: string[] = t('hero.lines', { returnObjects: true });

    return (
        <section id="home" className="h-[100vh] bg-inherit relative z-10">
            <Container className="flex flex-col gap-10 h-full relative z-10">
                <Navbar />
                <div className="flex justify-between items-start">
                    <motion.h1
                        className="text-[140px] leading-[130px] text-nowrap text-white text-left max-w-3xl"
                        initial="hidden"
                        animate="visible"
                        variants={letterAnimation}
                        whileInView="visible"
                        viewport={{ once: false }}
                    >
                        {lines.map((line, lineIndex) => (
                            <div key={lineIndex}>
                                {line.split('').map((char, charIndex) => (
                                    <motion.span
                                        key={`${lineIndex}-${charIndex}`}
                                        custom={lineIndex * 10 + charIndex}
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
                            viewport={{ once: false }}
                            transition={{
                                repeat: Infinity,
                                repeatType: 'loop',
                                duration: 3,
                                ease: 'easeInOut',
                            }}
                        >
                            {t('hero.subtitle')}
                        </motion.p>

                        <motion.p
                            className="absolute text-xl text-white right-5 bottom-0 w-96 text-left"
                            variants={descriptionVariant}
                            initial="hidden"
                            animate="visible"
                            whileInView="visible"
                            viewport={{ once: false }}
                        >
                            {t('hero.description')}
                        </motion.p>
                    </div>
                </div>

                <ScrollDown className="text-white" />
            </Container>
        </section>
    );
};
