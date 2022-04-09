// 🐸: Imports axios instance | client, some type definitions of redux (AnyAction, Dispatch and DefaultRootState)
// and other actions. This action is responsable of adding new posts to application, and hitting getPosts() action.
import client from '../axios-instance'

import { AnyAction, Dispatch } from 'redux'
import { DefaultRootState } from 'react-redux'

import { getPosts, setLoading } from './'

export function addPost(title: string, content: string) {
    return async function addPostsAsync(
        dispatch: Dispatch<AnyAction>,
        getState: () => DefaultRootState
    ) {
        dispatch(setLoading(true))
        await client.post('', {
            title,
            content,
            username: getState().user,
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        dispatch<any>(getPosts())
    }
}
