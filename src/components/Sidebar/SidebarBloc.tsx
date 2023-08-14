import {memo, useMemo, useRef} from "react";
import {EditorComponentData, EditorComponentDefinition} from "src/types";
import {SidebarBlocMissing} from "src/components/Sidebar/SidebarBlocMissing";
import {SidebarHeading} from "src/components/Sidebar/SidebarHeading";
import {prevent} from "src/functions/functions";
import {Sortable} from "src/components/Sortable";
import {useFieldFocused, useRemoveBloc, useSetFocusIndex} from "src/store";
import {useToggle, useUpdateEffect} from "src/functions/hooks";
import { t } from 'src/functions/i18n'
import {strToDom} from "src/functions/dom";
import {RoundedButton} from "src/components/ui/RoundedButton";
import Icon from "src/components/ui/Icon";
import Styles from './Sidebar.module.scss';
import {Flex} from "src/components/ui/Flex";
import {SidebarFields} from "src/components/Sidebar/SidebarFields";

type SidebarBlocProps = {
    data: EditorComponentData
    definition?: EditorComponentDefinition
    path: string
}
export const SidebarBloc = memo(function SidebarItem({
                                                         data,
                                                         definition,
                                                         path,
                                                     }: SidebarBlocProps) {
    const ref = useRef<HTMLDivElement>(null)
    const isFocused = useFieldFocused(data._id)
    const [isCollapsed, toggleCollapsed, setCollapsed] = useToggle(!isFocused)
    const removeBloc = useRemoveBloc()
    const setFocusIndex = useSetFocusIndex()
    const label =
        definition?.label && data[definition.label] ? data[definition.label] : null

    // Scroll vers l'élément lorsqu'il a le focus
    useUpdateEffect(() => {
        if (isFocused) {
            setCollapsed(false)
            window.setTimeout(
                () =>
                    ref.current!.scrollIntoView({ behavior: 'smooth', block: 'start' }),
                100,
            )
        } else {
            setCollapsed(true)
        }
    }, [isFocused])

    const labelHTMLSafe = useMemo(
        () => (label?.includes('<') ? strToDom(label).innerText : label),
        [label],
    )

    const handleRemove = () => {
        removeBloc(data)
    }

    const focusBloc = () => {
        if (isCollapsed) {
            setFocusIndex(path)
        }
        toggleCollapsed()
    }

    if (!definition) {
        return <SidebarBlocMissing data={data} />
    }

    return (
        <Sortable className={`${Styles['sidebar__content-item']} p-block-2 p-inline-3`} item={data}>
            <SidebarHeading
                ref={ref}
                title={definition.title}
                description={isCollapsed ? labelHTMLSafe : null}
                onClick={prevent(focusBloc)}
            >
                <SidebarHeading>
                    <RoundedButton
                        danger
                        onClick={handleRemove}
                        title={t('deleteComponent')}
                    >
                        <Icon name={'trash'} size={20} />
                    </RoundedButton>
                </SidebarHeading>
                <RoundedButton
                    rotate={isCollapsed ? -90 : 0}
                    onClick={prevent(toggleCollapsed)}
                >
                    <Icon name={'down'} size={20} />
                </RoundedButton>
            </SidebarHeading>
            {!isCollapsed && (
                <Flex>
                    <SidebarFields fields={definition.fields} data={data} path={path} />
                </Flex>
            )}
        </Sortable>
    );
})