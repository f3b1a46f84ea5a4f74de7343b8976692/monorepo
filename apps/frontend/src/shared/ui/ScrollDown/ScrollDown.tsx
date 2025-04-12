import { classNames } from '@local/shared/lib';
import { motion } from 'framer-motion';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';
import { FaArrowDown } from 'react-icons/fa';

export type IScrollDownProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
> & {};

export const ScrollDown = ({ className, ...props }: IScrollDownProps) => {
    const scrollToNextSection = () => {
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    };
    const { t } = useTranslation();

    return (
        <motion.div
            className={classNames('absolute cursor-pointer', {}, [className])}
            initial={{ bottom: 10, left: '50%', opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            style={{ transform: 'translateX(-50%)' }}
            // whileHover={{ scale: 1.1 }} // Эффект увеличения при наведении
            onClick={scrollToNextSection} // Переход к следующему блоку при клике
        >
            <div className="flex items-center gap-4 self-center">
                {t('scrollDown', 'Scroll down')}
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
    );
};
