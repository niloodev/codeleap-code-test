// Sets load in redux state.
export function setLoading(load: boolean) {
    return { type: 'SET_LOADING', payload: load }
}
