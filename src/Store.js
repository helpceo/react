import {createStore, combineReducers} from 'redux'

import {reducer as reduxaReducer} from './components/reduxing'

// const reducer = combineReducers({
//   reduxing: reduxaReducer
// })

export default createStore(reduxaReducer)

