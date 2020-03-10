import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import RootReducer from './reducers'

const middleware = [
    thunk,
    __DEV__ && logger
];

let finalCreateStore = applyMiddleware(...middleware)(createStore);

const Store = finalCreateStore(
    RootReducer,
);

export default Store;