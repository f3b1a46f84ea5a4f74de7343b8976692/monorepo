import { Button } from '@heroui/react';
import Logo from '@local/assets/icons/footerLog.svg'; // Импорт SVG как React компонент
import { Container } from '@local/shared/ui/Container/Container';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaArrowUp } from 'react-icons/fa';

export const Footer = () => {
    const { t } = useTranslation();
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const items = [
        {
            isIcon: false,
            name: t('footer.link1'),
            link: '#home',
        },
        {
            isIcon: false,
            name: t('footer.link2'),
            link: '#about',
        },
        {
            isIcon: false,
            name: t('footer.link3'),
            link: '#coast',
        },
        {
            isIcon: true,
            name: <Logo />,
            link: '',
        },
        {
            isIcon: false,
            name: t('footer.link4'),
            link: '#gallery',
        },
        {
            isIcon: false,
            name: t('footer.link5'),
            link: '#brands',
        },
        {
            isIcon: false,
            name: t('footer.link6'),
            link: '#stories',
        },
    ];

    return (
        <div className="w-full bg-[#404040c9] backdrop-blur-sm h-full py-10 z-100 relative">
            <Container className="flex flex-col h-full w-full relative z-10 gap-12">
                <ul className="flex justify-between gap-10 items-center mx-auto">
                    {items.map((item, index) => (
                        <li key={index} className="text-white text-xl">
                            {item.link ? (
                                <a href={item.link}>{item.name}</a>
                            ) : (
                                <p>{item.name}</p>
                            )}
                        </li>
                    ))}
                </ul>
                <motion.div
                    className="absolute right-20 top-4"
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Button
                        onClick={() => scrollToTop()}
                        endContent={<FaArrowUp />}
                        variant="bordered"
                        size="lg"
                        className="rounded-full text-white bg-inherit"
                    >
                        {t('common.back')}
                    </Button>
                </motion.div>
            </Container>
        </div>
    );
};
