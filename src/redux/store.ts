// Get configureStore from @reduxjs/toolkit.
import { configureStore } from '@reduxjs/toolkit'

// Get reducer from redux/reducer.ts
import reducer from './reducer'

// 🐸: configureStore is way better than createStore, thats because of the auto thunk middleware implementation
// that @reduxjs/toolkit provides, and since we are using API requests with Axios is necessary the use of the thunk
// functions provided by redux.
export default configureStore({
    reducer,
})
