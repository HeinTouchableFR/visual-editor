import {EditorComponentData} from "src/types";
import React, {useEffect, useMemo, useState} from "react";
import {stringifyFields} from "src/functions/object";
import {useData, useSidebarWidth, useUpdateData} from "src/store";
import {useToggle} from "src/functions/hooks";
import {t} from 'src/functions/i18n'
import {Sidebar} from "src/components/SideBar/SideBar";
import {Preview} from "src/components/Preview/Preview";
import {useUpdateEffect} from "react-use";
import {Blocs} from "src/components/Blocs/Blocs";

// Styles
import Styles from './VisualEditor.module.scss'

import 'src/components/styles/tools/_reset.scss';
import 'src/components/styles/tools/_layout.scss';
import {Button} from "src/components/ui/Button";

type Props = {
    value: EditorComponentData[]
    previewUrl: string
    name: string
    iconsUrl: string
    element: Element
    onChange: (v: string) => void
}

export function VisualEditorComponent({
                                          value,
                                          previewUrl,
                                          name,
                                          iconsUrl,
                                          onChange,
                                      }: Props) {
    const [skipNextChange, setSkipNextChange] = useState(true); // Skip emitting a change event on the next update (usefull for external changes)
    const updateData = useUpdateData();
    const data = useData();
    const sidebarWidth = useSidebarWidth();
    const doNothing = () => null; // React wants handler :(
    const [visible, toggleVisible] = useToggle(true);
    const handleClose = () => {
        toggleVisible();
    }

    const cleanedData = useMemo(() => stringifyFields(data), [data]);

    useUpdateEffect(() => {
        setSkipNextChange(true);
        updateData(value);
    }, [value]);

    useEffect(() => {
        if (skipNextChange) {
            setSkipNextChange(false);
        } else {
            onChange(cleanedData);
        }
    }, [cleanedData]);


    return (
        <div>
            <Button
                className={'primary-outlined'}
                type={'button'}
                onClick={toggleVisible}
            >
                {t('editContent')}
            </Button>
            {visible && (
                <div
                    className={Styles['visual-editor']}
                    style={{'--sidebar': `${sidebarWidth}vw`} as React.CSSProperties}
                >
                    <Sidebar onClose={handleClose} />
                    <Preview data={data} previewUrl={previewUrl} />
                    <Blocs iconsUrl={iconsUrl} />
                </div>
            )}
            <textarea hidden name={name} value={cleanedData} onChange={doNothing}/>
        </div>
    );
}