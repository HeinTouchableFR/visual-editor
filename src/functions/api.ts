type Params = {
    [key: string]: string | object | FormData
}

/**
 * @return {Promise<Object>}
 */
export async function jsonFetch(url: URL | string, params: Params = {}) {
    // Si on reçoit un FormData on le convertit en objet
    if (params.body instanceof FormData) {
        params.body = Object.fromEntries(params.body)
    }
    // Si on reçoit un objet, on le convertit en chaine JSON
    if (params.body && typeof params.body === 'object') {
        params.body = JSON.stringify(params.body)
    }
    params = {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        },
        ...params,
    }

    const response = await fetch(url, params)
    if (response.status === 204) {
        return null
    }
    const data = await response.json()
    if (response.ok) {
        return data
    }
    throw new ApiError(data, response.status)
}

/**
 * @return {Promise<Object>}
 */
export async function jsonFetchOrFlash(url: URL | string, params: Params = {}) {
    try {
        return await jsonFetch(url, params)
    } catch (e) {
        const result = (e as Error).message
        if (e instanceof ApiError) {
            Alert.flash(e.name, 'danger', 4)
        } else {
            Alert.flash(result, 'danger', 4)
        }
        return null
    }
}

type Violation = {
    propertyPath: string
    message: string
}
type Data = {
    title?: string
    detail?: string
    violations: Violation[]
}

/**
 * Représente une erreur d'API
 * @property {{
 *  violations: {propertyPath: string, message: string}
 * }} data
 */
export class ApiError {
    data: Data
    status: number

    constructor(data: Data, status: number) {
        this.data = data
        this.status = status
    }

    get name() {
        return `${this.data.title} ${this.data.detail || ''}`
    }

    // Renvoie les violations indexées par propertyPath
    get violations() {
        if (!this.data.violations) {
            return {
                main: `${this.data.title} ${this.data.detail || ''}`,
            }
        }
        return this.data.violations.reduce(
            (acc: Record<string, Array<string>>, violation: Violation) => {
                if (acc[violation.propertyPath]) {
                    acc[violation.propertyPath]?.push(violation.message)
                } else {
                    acc[violation.propertyPath] = [violation.message]
                }
                return acc
            },
            {},
        )
    }

    // Récupère la liste de violation pour un champ donnée
    violationsFor(field: string) {
        return this.data.violations
            .filter((v: Violation) => v.propertyPath === field)
            .map((v: Violation) => v.message)
    }
}