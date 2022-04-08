// get createStore form redux
import { createStore } from 'redux'

// get reducer from reducer.ts
import reducer from './reducer'

export default createStore(reducer)
