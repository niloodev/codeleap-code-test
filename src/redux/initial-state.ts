/* eslint-disable @typescript-eslint/no-empty-interface */

// exports and defines values and types of initial-state
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

declare module 'react-redux' {
    export interface DefaultRootState extends InitialState {}
}
