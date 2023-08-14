import { closestCenter, DndContext } from '@dnd-kit/core'
import {
    restrictToParentElement,
    restrictToVerticalAxis,
} from '@dnd-kit/modifiers'
import {
    SortableContext,
    useSortable,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { DragEndEvent } from '@dnd-kit/core/dist/types'
import { ReactNode, SyntheticEvent } from 'react'
import {IndexableObject} from "src/types";
import Styles from './Sortable.module.scss'

type SortableWrapperProps = {
    items: IndexableObject[]
    children: ReactNode
    onMove: (from: number, to: number) => void
}

export function SortableWrapper({
                                    items,
                                    children,
                                    onMove,
                                }: SortableWrapperProps) {
    const ids = items.map(item => item._id)


    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event

        if (over && active.id !== over.id) {
            onMove(ids.indexOf(active.id.toString()), ids.indexOf(over.id.toString()))
        }
    }


    return (
        <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            modifiers={[restrictToVerticalAxis, restrictToParentElement]}
        >
            <SortableContext items={ids} strategy={verticalListSortingStrategy}>
                {children}
            </SortableContext>
        </DndContext>
    )
}

type SortableProps = {
    item: IndexableObject
    children: ReactNode
    className?: string
    onClick?: (e: SyntheticEvent) => void
}

export function Sortable({
                             item,
                             children,
                             className,
                             ...props
                         }: SortableProps) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: item._id })

    const style = {
        transform: CSS.Translate.toString(transform),
        transition: transition || undefined,
    }

    return (
        <div
            className={className}
            data-dragging={isDragging ? true : undefined}
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...props}
        >
            <div className={`${Styles['editor__sortable']}`} {...listeners} />
            {children}
        </div>
    )
}
