// sets user in application global state
export function SetUser(user: string) {
    return { type: 'SET_USER', payload: user }
}
