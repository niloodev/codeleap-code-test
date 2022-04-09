// sets user in application global state
export function setLoading(load: boolean) {
    return { type: 'SET_LOADING', payload: load }
}
