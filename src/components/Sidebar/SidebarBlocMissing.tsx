import {EditorComponentData} from "src/types";
import {useRemoveBloc} from "src/store";
import {Sortable} from "src/components/Sortable";
import Icon from "src/components/ui/Icon";
import {prevent} from "src/functions/functions";
import { t } from 'src/functions/i18n'
import {SidebarHeading} from "src/components/Sidebar/SidebarHeading";
import Styles from './Sidebar.module.scss';

type SidebarBlocMissingProps = {
    data: EditorComponentData
}

export function SidebarBlocMissing({ data }: SidebarBlocMissingProps) {
    const removeBloc = useRemoveBloc()
    return (
        <Sortable item={data} className={`${Styles['sidebar__content-missing']} p-block-2 p-inline-3`}>
            <div className='editor__sidebar-content-missing-wrapper'>
                <SidebarHeading title={`${t('unknownComponent')} : ${data._name}`}>
                    <button onClick={prevent(() => removeBloc(data))}>
                        <Icon name='trash' size={20} />
                    </button>
                </SidebarHeading>
            </div>
        </Sortable>
    )
}