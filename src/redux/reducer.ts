import { AnyAction } from 'redux'

// import initial state
import initialState from './initial-state'

// export main reducer
export default function reducer(state = initialState, action: AnyAction) {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.payload }
            break
    }
    return state
}
