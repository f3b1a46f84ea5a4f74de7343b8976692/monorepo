import I1 from '@local/assets/icons/1.svg';
import I2 from '@local/assets/icons/2.svg';
import I3 from '@local/assets/icons/3.svg';
import I4 from '@local/assets/icons/4.svg';
import I5 from '@local/assets/icons/5.svg';
import I6 from '@local/assets/icons/6.svg';
import I7 from '@local/assets/icons/7.svg';
import I8 from '@local/assets/icons/8.svg';
import I9 from '@local/assets/icons/9.svg';
import I10 from '@local/assets/icons/10.svg';
import I11 from '@local/assets/icons/11.svg';
import I12 from '@local/assets/icons/12.svg';
import Partners from '@local/assets/icons/partners.svg';
import { Container } from '@local/shared/ui/Container/Container';
import Star from '@local/assets/icons/_.svg';
import { motion } from 'framer-motion';
import { Button } from '@heroui/react';
import { FaArrowUp } from 'react-icons/fa';
import { ScrollDown } from '@local/shared/ui/ScrollDown';
import { useTranslation } from 'react-i18next';

const icons = [
    { id: 1, icon: I1 },
    { id: 2, icon: I2 },
    { id: 3, icon: I3 },
    { id: 4, icon: I4 },
    { id: 5, icon: I5 },
    { id: 6, icon: I6 },
    { id: 7, icon: I7 },
    { id: 8, icon: I8 },
    { id: 9, icon: I9 },
    { id: 10, icon: I10 },
    { id: 11, icon: I11 },
    { id: 12, icon: I12 },
];

export const Brands = () => {
    const { t } = useTranslation();
    return (
        <div
            id="brands"
            className="flex h-[100vh] relative z-100 bg-white gap-4"
        >
            <Container className="flex flex-col w-full gap-10 h-full z-10 relative">
                <motion.span
                    whileInView={{ rotate: 45 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{
                        duration: 2,
                        ease: 'linear',
                    }}
                    className="absolute -left-16"
                >
                    <Star />
                </motion.span>
                <div className="flex justify-between gap-4 mt-36">
                    <div className="relative text-zinc-700 flex flex-col gap-32">
                        <motion.p
                            className="opacity-75 text-medium self-end max-w-92"
                            initial={{ x: '25%', opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                        >
                            {t('brands.description1')}
                        </motion.p>
                        <div className="flex flex-col gap-8">
                            <motion.div
                                className="opacity-75 text-medium"
                                initial={{ x: '-25%', opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 1, ease: 'easeOut' }}
                            >
                                <Partners />
                            </motion.div>
                            <motion.div
                                className="self-end"
                                initial={{ y: '50%', opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 1, ease: 'easeOut' }}
                            >
                                <Button
                                    size="lg"
                                    className="bg-zinc-950 text-white"
                                    endContent={
                                        <FaArrowUp className="rotate-45" />
                                    }
                                >
                                    Become a Partner
                                </Button>
                            </motion.div>
                        </div>
                        <motion.p
                            className="opacity-75 text-medium"
                            initial={{ x: '-25%', opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                        >
                            {t('brands.description2')}
                        </motion.p>
                    </div>
                    <div className="grid grid-cols-4 gap-12">
                        {icons.map((item) => (
                            <motion.div
                                className="opacity-75 text-medium self-end flex justify-center items-center shadow-custom"
                                initial={{ x: '25%', opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 1, ease: 'easeOut' }}
                                key={item.id}
                            >
                                <item.icon />
                            </motion.div>
                        ))}
                    </div>
                </div>
                <ScrollDown />
            </Container>
        </div>
    );
};
