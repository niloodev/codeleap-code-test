// Sets user in redux state.
export function setUser(user: string) {
    return { type: 'SET_USER', payload: user }
}
