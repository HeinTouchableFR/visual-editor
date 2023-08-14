import {
    ForwardedRef,
    forwardRef,
    ForwardRefExoticComponent,
    MouseEventHandler,
    PropsWithChildren,
    RefAttributes,
} from 'react'
import Styles from './Sidebar.module.scss';

type SidebarHeadingProps = PropsWithChildren<{
    title?: string
    description?: string
    onClick?: MouseEventHandler<HTMLElement>
}>
export const SidebarHeading = forwardRef<HTMLDivElement, SidebarHeadingProps>(
    (
        { children, onClick, title, description },
        ref: ForwardedRef<HTMLDivElement>,
    ) => {
        return (
            <div className={`${Styles['sidebar__heading']}`} ref={ref}>
                <div className={`${Styles['sidebar__heading-title']}`} onClick={onClick}>
                    <strong>{title}</strong>
                    {description}
                </div>
                {children}
            </div>
        )
    },
) as ForwardRefExoticComponent<
    SidebarHeadingProps & RefAttributes<HTMLDivElement>
>