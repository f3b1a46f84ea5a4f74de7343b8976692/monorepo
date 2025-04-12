import { IContainerProps } from './Container.props';
import { classNames } from '@local/shared/lib';

export const Container = ({
    children,
    className,
    ...props
}: IContainerProps) => {
    return (
        <div
            className={classNames(
                'max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8',
                {},
                [className]
            )}
            {...props}
        >
            {children}
        </div>
    );
};
