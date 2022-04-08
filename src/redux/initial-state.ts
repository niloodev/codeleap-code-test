/* eslint-disable @typescript-eslint/no-empty-interface */

// exports and defines values and types of initial-state
export default {
    user: '',
    posts: [],
}

export interface InitialState {
    user: string
    posts: Array<any>
}

declare module 'react-redux' {
    export interface DefaultRootState extends InitialState {}
}
