// 🐸: Imports axios instance | client, some type definitions of redux (AnyAction and Dispatch) and deletes
// a post from the application, hitting getPosts() after it to update frontend.
import client from '../axios-instance'

import { AnyAction, Dispatch } from 'redux'
import { getPosts, setLoading } from './'

export function deletePost(id: number) {
    return async function deletePostAsync(dispatch: Dispatch<AnyAction>) {
        dispatch(setLoading(true))
        await client.delete(id + '/')
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        dispatch<any>(getPosts())
    }
}
