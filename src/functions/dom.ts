/**
 * Transform une chaine en élément DOM
 */
export function strToDom(str: string) {
    return document.createRange().createContextualFragment(str.trim())
        .firstChild as HTMLElement
}