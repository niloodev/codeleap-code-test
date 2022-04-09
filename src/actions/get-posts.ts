// gets posts from api
import client from '../axios-instance'
import { AnyAction, Dispatch } from 'redux'
import { setPosts, setLoading } from './'

// every action results in getPosts, so it automatically changes loading to false
export function getPosts() {
    return async function getPostsAsync(dispatch: Dispatch<AnyAction>) {
        const res = await client.get('')

        dispatch(setPosts(res.data.results))
        dispatch(setLoading(false))
    }
}
