// 🐸: This is the .get action and the most important, because it is called by all the other actions (patch, delete and add)
// since it gets the posts and puts into the redux store state.
import client from '../axios-instance'
import { AnyAction, Dispatch } from 'redux'
import { setPosts, setLoading } from './'

export function getPosts() {
    return async function getPostsAsync(dispatch: Dispatch<AnyAction>) {
        const res = await client.get('')

        dispatch(setPosts(res.data.results))
        dispatch(setLoading(false))
    }
}
