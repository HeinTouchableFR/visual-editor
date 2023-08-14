import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {uniqId} from "src/functions/string";

export function useUniqId(prefix: string = ''): string {
    return useMemo(() => prefix + uniqId(), [])
}

/**
 * Alterne une valeur
 */
export function useToggle(initialValue: boolean = false) {
    const [value, setValue] = useState(initialValue)
    return [value, useCallback(() => setValue(v => !v), []), setValue] as const
}

export function useUpdateEffect(cb: Function, deps: any[]): void {
    const isFirstRender = useRef(true)

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        }
        return cb()
    }, deps)
}