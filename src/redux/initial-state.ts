/* eslint-disable @typescript-eslint/no-empty-interface */

// Exports and defines values and types of the initial redux state of application.
export default {
    load: false,
    user: '',
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

// 🐸: This makes DefaultRootState from react-redux extends InitialState, making it acessible in the whole application
// through the package.
declare module 'react-redux' {
    export interface DefaultRootState extends InitialState {}
}
