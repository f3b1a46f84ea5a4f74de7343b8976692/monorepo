import { Container } from '@local/shared/ui/Container/Container';
import { ScrollDown } from '@local/shared/ui/ScrollDown';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const stats = [
    {
        number: '16.3',
        text: 'Million Tourist \n Visits Annually',
        delay: 0.5,
        position: { top: 0, bottom: 'auto', left: 'auto', right: 120 },
    },
    {
        number: '3',
        text: 'Climatic Zones \n In One Region',
        delay: 1,
        position: { top: 0, bottom: -400, left: 20, right: 'auto' },
    },
    {
        number: '400+',
        text: 'km, Black Sea \n coastline',
        delay: 1.5,
        position: { top: 'auto', bottom: -500, left: 'auto', right: 80 },
    },
];

export const About = () => {
    const { t } = useTranslation();

    return (
        <section
            id="about"
            className="h-[100vh] bg-inherit relative z-10 flex pt-10 flex-col gap-8"
        >
            <Container className="flex flex-col w-full gap-10 h-full z-10 relative">
                {/* Заголовок слева */}
                <motion.div
                    className="absolute flex gap-4 items-center"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                >
                    <h3 className="text-white text-2xl">01</h3>
                    <h3 className="text-white text-2xl">{t('about.title')}</h3>
                </motion.div>

                {/* Текст справа */}
                <motion.div
                    className="absolute flex gap-4 items-center max-w-screen-sm right-0"
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                >
                    <h3 className="text-white text-3xl leading-10 font-medium">
                        {t('about.description')}
                    </h3>
                </motion.div>

                {/* Статистика */}
                <div className="relative mt-72">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            className="absolute flex gap-4 items-center text-white"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: stat.delay }}
                            viewport={{ once: false, amount: 0.2 }}
                            style={{
                                bottom: stat.position.bottom,
                                right: stat.position.right,
                                left: stat.position.left,
                                top: stat.position.top,
                            }}
                        >
                            <div className="flex flex-col gap-8">
                                <FaArrowDown className="-rotate-45" />
                                <div className="flex align-top">
                                    <h3 className="text-[120px] leading-[100px]">
                                        {stat.number}
                                    </h3>
                                    <p className="text-[18px] leading-[18px] whitespace-pre-line">
                                        {t(`about.stats${i + 1}.text`)}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <ScrollDown className="text-white" />
            </Container>
        </section>
    );
};
