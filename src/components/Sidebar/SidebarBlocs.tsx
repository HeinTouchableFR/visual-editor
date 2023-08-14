import {EditorComponentData} from "src/types";
import Styles from './Sidebar.module.scss'
import {SortableWrapper} from "src/components/Sortable";
import {useFieldDefinitions, useUpdateData} from "src/store";
import {moveItem} from "src/functions/array";
import {SidebarBloc} from "src/components/Sidebar/SidebarBloc";

export function SidebarBlocs({data}: { data: EditorComponentData[] }) {
    const updateData = useUpdateData()
    const definitions = useFieldDefinitions()
    const handleMove = (from: number, to: number) => {
        updateData(moveItem(data, from, to))
    }

    return (
        <div className={`${Styles['sidebar__content']} p-2`}>
            <SortableWrapper items={data} onMove={handleMove}>
                {data.map((v, k) => (
                    <SidebarBloc
                        key={v._id}
                        data={v}
                        definition={definitions[v._name]}
                        path={`${k}`}
                    />
                ))}
            </SortableWrapper>
        </div>
    );
}