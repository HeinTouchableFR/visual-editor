import {CSSProperties, forwardRef, PropsWithChildren} from "react";
import Styles from 'src/components/styles/modules/Flex.module.scss';

type FlexProps = PropsWithChildren<{
    between?: boolean;
    column?: boolean;
    gap?: number;
    style?: CSSProperties;
}> & JSX.IntrinsicElements["div"];

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
    ({ between, column, gap = 1, children, ...props }, ref) => {
        return (
            <div
                className={`${Styles['flex']} ${between && Styles['between']} ${column && Styles['column']}`}
                style={{ gap: `${gap} * var(--space))`} as CSSProperties}
                {...props}
                ref={ref}
            >
                {children}
            </div>
        );
    }
);