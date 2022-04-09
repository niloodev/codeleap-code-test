// 🐸: Sets posts from Array<PostType>, this one is called by GetPosts after the request.
import { PostType } from '../redux/initial-state'

export function setPosts(posts: Array<PostType>) {
    return { type: 'SET_POSTS', payload: posts }
}
