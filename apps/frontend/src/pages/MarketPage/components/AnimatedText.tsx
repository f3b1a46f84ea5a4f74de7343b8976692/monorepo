import { classNames } from '@local/shared/lib';
import React, {
    DetailedHTMLProps,
    HTMLAttributes,
    useEffect,
    useState,
} from 'react';

interface AnimatedTextProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    text: string;
    delay?: number;
    style?: React.CSSProperties;
    className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
    text,
    delay = 0,
    style,
    className,
}) => {
    const [isAnimating, setIsAnimating] = useState(true);
    const [renderedText, setRenderedText] = useState('');

    useEffect(() => {
        setIsAnimating(true);
        setRenderedText('');

        const animationDuration = text.length * 50 + delay + 300;
        const timer = setTimeout(() => {
            setIsAnimating(false);
            setRenderedText(text);
        }, animationDuration);

        return () => clearTimeout(timer);
    }, [text, delay]);

    return (
        <span
            className={classNames('text-animation-container', {}, [className])}
            style={style}
        >
            {isAnimating ? (
                <span className="animated-text">
                    {text.split('').map((char, index) => (
                        <span
                            key={index}
                            style={{
                                animationDelay: `${index * 30 + delay}ms`,
                                whiteSpace: char === ' ' ? 'pre' : 'normal',
                            }}
                        >
                            {char}
                        </span>
                    ))}
                </span>
            ) : (
                <span className="static-text text-wrap">{renderedText}</span>
            )}
        </span>
    );
};

export default AnimatedText;
