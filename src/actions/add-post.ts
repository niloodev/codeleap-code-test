// add post to api
import client from '../axios-instance'

import { AnyAction, Dispatch } from 'redux'
import { DefaultRootState } from 'react-redux'

import { getPosts, setLoading } from './'

export function addPost(title: string, content: string) {
    return async function fetchGetPosts(
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
