// get createStore form redux
import { configureStore } from '@reduxjs/toolkit'

// get reducer from reducer.ts
import reducer from './reducer'

export default configureStore({
    reducer,
})
