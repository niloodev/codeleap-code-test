// add post to api
import client from '../axios-instance'

import { AnyAction, Dispatch } from 'redux'
import { getPosts, setLoading } from './'

export function patchPost(id: number, title: string, content: string) {
    return async function patchPostAsync(dispatch: Dispatch<AnyAction>) {
        dispatch(setLoading(true))
        await client.patch(id + '/', {
            title,
            content,
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        dispatch<any>(getPosts())
    }
}
