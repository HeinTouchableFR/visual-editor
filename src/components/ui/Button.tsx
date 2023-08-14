import {PropsWithChildren} from "react";
import Loader from "src/components/ui/Loader";
import Styles from 'src/components/styles/modules/Button.module.scss'

type ButtonProps = PropsWithChildren<{
    loading?: boolean,
    className?: string,
    type?: 'button' | 'submit' | 'reset' | undefined,
    onClick?: (e: any) => void
}>

export function Button({
                           loading = false,
                           type = 'button',
                           className = 'primary',
                           children,
                           ...props
                       }: ButtonProps) {
    return (
        <button className={`${Styles['btn']} ${Styles[className]}`} type={type} disabled={loading} {...props}>
            {loading && <Loader className='icon'/>}
            {children}
        </button>
    );
}