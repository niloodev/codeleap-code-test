// add post to api
import client from '../axios-instance'

import { AnyAction, Dispatch } from 'redux'
import { getPosts, setLoading } from './'

export function deletePost(id: number) {
    return async function deletePostAsync(dispatch: Dispatch<AnyAction>) {
        dispatch(setLoading(true))
        await client.delete(id.toString())
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        dispatch<any>(getPosts())
    }
}
