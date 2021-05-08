import { createStore, applyMiddleware } from "redux"
import { createPromise } from 'redux-promise-middleware';
import logger from "redux-logger"
import reducer from '../Reducer/index'

import thunk from "redux-thunk";


const middleware = applyMiddleware(createPromise(), thunk, logger);
const store =  createStore(reducer, middleware)


export default store