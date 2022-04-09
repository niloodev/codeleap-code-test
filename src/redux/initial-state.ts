/* eslint-disable @typescript-eslint/no-empty-interface */

// Exports and defines values and types of the initial redux state of application.
// Gets the localStorage user value to initialState.
const initialState: InitialState = {
    load: false,
    user: localStorage.getItem('user')
        ? (localStorage.getItem('user') as string)
        : '',
    posts: [],
}

export interface InitialState {
    load: boolean
    user: string
    posts: Array<PostType>
}

export interface PostType {
    id: number
    username: string
    created_datetime: string
    title: string
    content: string
}

export default initialState

// 🐸: This makes DefaultRootState from react-redux extends InitialState, making it acessible in the whole application
// through the package.
declare module 'react-redux' {
    export interface DefaultRootState extends InitialState {}
}
