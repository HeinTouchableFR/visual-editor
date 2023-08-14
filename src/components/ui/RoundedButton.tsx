import { CSSProperties } from 'react'
import Styles from 'src/components/styles/modules/RoundedButton.module.scss';
import {Tooltip} from "src/components/ui/Tooltip";

type ButtonProps = JSX.IntrinsicElements['button'] & {
    danger?: boolean
    success?: boolean
    rotate?: number
    title?: string
    additionalStyle?: CSSProperties | undefined
}

export function RoundedButton({
                               danger,
                               success,
                               rotate,
                               title,
                               additionalStyle,
                               ...props
                           }: ButtonProps) {
    const style = rotate
        ? { transform: `rotate(${rotate}deg)`, ...additionalStyle }
        : additionalStyle
    const button = (
        <button
            className={`${Styles['rounded__button']} ${danger && Styles['danger']} ${
                success && 'success'
            }`}
            {...props}
            aria-label={title}
            style={style}
        />
    )

    if (title) {
        return (
            <Tooltip content={title} trigger='focus'>
                {button}
            </Tooltip>
        )
    }

    return (
        <div>
            {button}
        </div>
    );
}
