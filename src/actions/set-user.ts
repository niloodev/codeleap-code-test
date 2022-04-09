// sets user in application global state
export function setUser(user: string) {
    return { type: 'SET_USER', payload: user }
}
