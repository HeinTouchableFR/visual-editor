import {Button} from "src/components/ui/Button";
import { t } from 'src/functions/i18n'
import Icon from "src/components/ui/Icon";
import {PreviewModes, useData, usePreviewMode, useSetBlockIndex, useTemplates, useTogglePreviewMode} from "src/store";
import {prevent} from "src/functions/functions";
import {useCallback, useState} from "react";
import Styles from './Sidebar.module.scss';
import {SidebarEmpty} from "src/components/SideBar/SidebarEmpty";
import {SidebarBlocs} from "src/components/SideBar/SidebarBlocs";
import {SidebarTemplates} from "src/components/SideBar/SidebarTemplates";

type SidebarProps = {
    onClose: () => void
}

enum States {
    BLOCS,
    TEMPLATES,
}

export function Sidebar({
                            onClose,
                            ...props
                        }: SidebarProps) {
    const [state, setState] = useState(States.BLOCS)
    const togglePreviewMode = useTogglePreviewMode()
    const previewMode = usePreviewMode()
    const isPhone = previewMode === PreviewModes.PHONE
    const setAddBlock = useSetBlockIndex()
    const data = useData()
    const templates = useTemplates()

    const toggleMode = useCallback(() => {
        setState(v => (v === States.BLOCS ? States.TEMPLATES : States.BLOCS))
    }, [])

    const hasTemplates = templates.length > 0
    const isTemplateMode = state === States.TEMPLATES

    const showEmpty = data.length === 0 && hasTemplates

    return (
        <div className={Styles.sidebar} {...props}>
            <div className={`${Styles['sidebar__header']} p-2`}>
                <button
                    className={`${Styles['sidebar__header-close']}`}
                    type={'button'}
                    onClick={prevent(onClose)}
                    aria-label={t('close')}
                >
                    <Icon name={'cross'} size={25} />
                </button>
                <div className={`${Styles['sidebar__header-actions']}`}>
                    {hasTemplates && (
                        <button
                            className={`${Styles['sidebar__header-actions-button']}`}
                            type={'button'}
                            onClick={prevent(toggleMode)}
                            aria-label={t(isTemplateMode ? 'addComponent' : 'useTemplate')}
                        >
                            <Icon name={isTemplateMode ? 'bloc' : 'template'} size={25} />
                        </button>
                    )}
                    <button
                        className={`${Styles['sidebar__header-actions-button']}`}
                        type={'button'}
                        onClick={prevent(togglePreviewMode)}
                        aria-label={t('responsiveView')}
                    >
                        <Icon name={'responsive'} size={25} />
                    </button>
                    <Button type={'button'} onClick={prevent(() => setAddBlock())}>
                        <Icon additionalClass={`m-right-1`} name={'plus'} size={20} />
                        {t('addComponent')}
                    </Button>
                </div>
            </div>
            {state === States.BLOCS &&
                (showEmpty ? (
                    <SidebarEmpty onAction={() => setState(States.TEMPLATES)} />
                ) : (
                    <SidebarBlocs data={data} />
                ))
            }
            {state === States.TEMPLATES && (
                <SidebarTemplates onClick={() => setState(States.BLOCS)} />
            )}
            <div className={`${Styles['sidebar__footer']} p-2`}>
                <Button type={"submit"}>
                    <Icon additionalClass={`m-right-1`} name={'save'} size={20} />
                    {t('save')}
                </Button>
            </div>
        </div>
    )
}