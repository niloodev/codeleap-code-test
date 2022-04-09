// sets posts from api
import { PostType } from '../redux/initial-state'

export function setPosts(posts: Array<PostType>) {
    return { type: 'SET_POSTS', payload: posts }
}
