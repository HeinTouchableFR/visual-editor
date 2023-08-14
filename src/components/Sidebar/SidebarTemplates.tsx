import {useSetData, useTemplates} from "src/store";
import {useCallback, useState} from "react";
import {EditorComponentTemplate} from "src/types";
import Loader from "src/components/ui/Loader";
import {prevent} from "src/functions/functions";
import Styles from './Sidebar.module.scss';

type SidebarTemplatesProps = {
    onClick: () => void
}
export function SidebarTemplates({ onClick }: SidebarTemplatesProps) {
    const templates = useTemplates()
    const setData = useSetData()
    const [loadingTemplate, setLoadingTemplate] =
        useState<EditorComponentTemplate>()

    const callback = useCallback(
        async (t: EditorComponentTemplate) => {
            setLoadingTemplate(t)
            let data: EditorComponentTemplate['data']
            if (typeof t.data === 'function') {
                setLoadingTemplate(t)
                data = await t.data().catch(() => [])
                setLoadingTemplate(t)
            } else {
                data = t.data
            }
            setData(data)
            onClick()
        },
        [setData, onClick],
    )

    return (
        <div className={`${Styles['sidebar__templates']} p-2`}>
            {templates.map(template => (
                <div
                    key={template.name}
                    className={`${Styles['sidebar__templates-card']} ${loadingTemplate === template && 'loading'}`}
                    onClick={prevent(() => (loadingTemplate === template ? null : callback(template)))}
                >
                    {loadingTemplate === template && <Loader />}
                    <img src={template.image} alt='' />
                    <div className={`${Styles['sidebar__templates-card-body']}`}>
                        <div className={`${Styles['sidebar__templates-card-body-title']}`}>
                            {template.name}
                        </div>
                        <div>{template.description}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}