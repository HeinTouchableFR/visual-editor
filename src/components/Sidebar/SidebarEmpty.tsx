import {Button} from "src/components/ui/Button";
import {prevent} from "src/functions/functions";
import { t } from 'src/functions/i18n'
import Styles from "src/components/SideBar/Sidebar.module.scss";

type SidebarEmptyProps = {
    onAction: Function
}

export function SidebarEmpty(data: SidebarEmptyProps) {

    return (
        <div className={`${Styles['sidebar__empty']}`}>
            <p className={`m-bottom-1`}>{t('noContent')}</p>
            <div>
                <Button onClick={prevent(data.onAction)}>
                    {t('useTemplate')}
                </Button>
            </div>
        </div>
    )
}
