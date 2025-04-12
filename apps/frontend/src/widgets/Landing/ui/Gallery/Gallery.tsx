import { Button } from '@heroui/react';
import { motion } from 'framer-motion';
import { FaArrowUp, FaCross } from 'react-icons/fa';
import { Parallax } from 'react-scroll-parallax';

import { IoMdClose } from 'react-icons/io';
import { Container } from '@local/shared/ui/Container/Container';
import { ScrollDown } from '@local/shared/ui/ScrollDown';
import { useTranslation } from 'react-i18next';
export const Gallery = () => {
    const imageUrl = '/image.png';

    const { t } = useTranslation();
    const images = [
        { top: '15%', left: '10%' },
        { top: '15%', right: '10%' },
        { bottom: '10%', left: '-5%' },
        { bottom: '10%', right: '5%' },
    ];

    return (
        <section
            id="gallery"
            className="relative h-[100vh]  bg-white flex justify-center items-center overflow-hidden pt-10"
        >
            <Container className="flex flex-col w-full gap-10 h-full z-10 relative">
                <div className="left-[50%] top-0 -translate-x-[50%] flex gap-4 absolute">
                    <p className="text-2xl font-medium mb-2 text-zinc-900">
                        03
                    </p>
                    <p className="text-2xl font-medium mb-2 text-zinc-900">
                        {t('gallery.title', 'Gallery & Overview')}
                    </p>
                </div>
                <div className="absolute top-10 right-20">
                    <motion.span
                        className="text-4xl font-medium absolute -top-10 -left-1"
                        whileInView={{ rotate: 360 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{
                            duration: 3, // Длительность одного оборота
                            ease: 'linear', // Плавное вращение
                        }}
                    >
                        <IoMdClose />
                    </motion.span>

                    <Button
                        endContent={<FaArrowUp className="rotate-45" />}
                        variant="light"
                    >
                        {t('gallery.button', 'View more')}
                    </Button>
                </div>
                <div className="text-center z-10 mx-auto my-auto">
                    <Parallax
                        className="-z-10"
                        opacity={[0, 2]}
                        // translateY={[0, 2]}
                        speed={1}
                        // scale={[0, 2]}
                    >
                        <h1 className="text-[170px] leading-[1] font-bold max-w-[600px] text-zinc-900">
                            {t('gallery.title', 'View more')}
                        </h1>
                    </Parallax>
                </div>

                {/* Картинки вокруг текста */}
                {images.map((pos, idx) => (
                    <motion.img
                        key={idx}
                        src={imageUrl}
                        alt={`gallery-${idx}`}
                        className=" absolute shadow-md z-10 rounded-md"
                        style={{ ...pos }}
                        initial={{ opacity: 0, y: 200 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 2.5 + idx * 0.2,
                            ease: 'easeOut',
                        }}
                        viewport={{ once: false, amount: 0 }}
                    />
                ))}
                <ScrollDown />
            </Container>
        </section>
    );
};
