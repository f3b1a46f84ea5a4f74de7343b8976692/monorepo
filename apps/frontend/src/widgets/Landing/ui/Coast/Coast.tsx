import { Container } from '@local/shared/ui/Container/Container';
import { motion } from 'framer-motion';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import Land from '@local/assets/icons/land.svg';
import Text from '@local/assets/icons/thirdText.svg';
import RoundedLune from '@local/assets/icons/roundedLine.svg';
import Kransodar from '@local/assets/icons/krasnodar.svg';
import { Button } from '@heroui/react';
import { ScrollDown } from '@local/shared/ui/ScrollDown';
import { useTranslation } from 'react-i18next';

const thirdLines = [
    'Leave the city noise behind and discovera',
    'land where Black Sea breezes meet',
    'alpine peaks. Krasnodar region offers ',
    'year-round getaways, from wellnessspas',
    'to ski resorts – all infused with ',
    'local soul and sunshine.',
];

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: 'easeOut',
        },
    },
};

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

export const Coast = () => {
    const { t } = useTranslation();

    return (
        <section
            id="coast"
            className="h-[100vh] bg-inherit relative z-100 bg-white flex pt-10 flex-col gap-8"
        >
            <Container className="flex flex-col w-full gap-10 h-full z-10 relative">
                <div className="flex flex-col relative gap-40">
                    <motion.div
                        className="absolute flex gap-4 items-center"
                        initial={{ top: -10, left: 0, opacity: 0 }}
                        animate={{ top: -10, left: 20, opacity: 1 }}
                        transition={{ duration: 1, delay: 0 }}
                    >
                        <h3 className="text-zinc-700 text-2xl">02</h3>
                        <h3 className="text-zinc-700 text-2xl">
                            {t('coast.title')}
                        </h3>
                    </motion.div>
                    <motion.span
                        className="absolute"
                        initial={{ bottom: -450, left: 0, opacity: 0 }}
                        animate={{ bottom: -450, left: 20, opacity: 1 }}
                        transition={{ duration: 1, delay: 0 }}
                    >
                        <Land />
                    </motion.span>
                </div>
                <motion.div
                    className="absolute flex gap-4 items-center max-w-screen-sm"
                    initial={{ top: -10, right: 0, opacity: 0 }}
                    animate={{ top: -10, right: 20, opacity: 1 }}
                    transition={{ duration: 1, delay: 0 }}
                >
                    <motion.div
                        className="flex flex-col relative"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <h3 className="text-zinc-900 self-center text-5xl leading-[1.1] font-medium">
                            {t('coast.heading')}
                        </h3>
                    </motion.div>
                    <motion.span
                        className="absolute right-10 top-10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <RoundedLune />
                    </motion.span>
                </motion.div>
                <div className="relative mt-64">
                    <motion.div
                        className="absolute flex gap-4 items-center max-w-screen-sm"
                        initial={{ top: -10, right: 0, opacity: 0 }}
                        animate={{ top: -10, right: 120, opacity: 1 }}
                        transition={{ duration: 1, delay: 0 }}
                    >
                        <motion.div
                            className="text-md text-zinc-700 max-w-64"
                            initial="hidden"
                            animate="visible"
                            variants={letterAnimation}
                            whileInView="visible"
                            viewport={{ once: false }} // Убедитесь, что анимация будет повторяться
                        >
                            {t(
                                'coast.description',
                                'Leave the city noise behind and discovera land where Black Sea breezes meet alpine peaks. Krasnodar region offers  year-round getaways, from wellnessspas to ski resorts – all infused with local soul and sunshine'
                            )}
                        </motion.div>
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
                                    {t('coast.stats1')}
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
                                    {t('coast.stats2')}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className="flex relative mt-52">
                    <motion.span
                        className="absolute"
                        initial={{ bottom: -150, left: 0, opacity: 0 }}
                        animate={{ bottom: -150, left: 20, opacity: 1 }}
                        transition={{ duration: 1, delay: 0 }}
                    >
                        <Text />
                    </motion.span>
                    <motion.div
                        className="flex flex-col gap-8 absolute right-20"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <motion.hr
                            initial={{ width: 0 }}
                            whileInView={{ width: '80%' }}
                            transition={{ duration: 1 }}
                            className="border-t h-[2px] bg-zinc-300 mx-auto"
                        />
                        <div className="flex justify-between gap-40 items-center">
                            <div className="flex flex-col gap-2">
                                <h4 className="text-xl text-zinc-900">
                                    {t('coast.kuban.title')}
                                </h4>
                                <p className="text-sm text-zinc-400 max-w-40">
                                    {t('coast.kuban.subtitle')}
                                </p>
                            </div>
                            <Kransodar />
                            <Button
                                variant="bordered"
                                size="lg"
                                className="border-zinc-900 rounded-3xl"
                                endContent={<FaArrowUp className="rotate-45" />}
                            >
                                {t('coast.button')}
                            </Button>
                        </div>
                    </motion.div>
                </div>
                <ScrollDown />
            </Container>
        </section>
    );
};
