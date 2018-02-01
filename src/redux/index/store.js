/**
 * Created by Donghui Huo on 2018/1/31.
 */
import {createStore, applyMiddleware} from 'redux'
import reducer from './reducers'
import middleware from '../common/middleware'

const store = createStore(reducer,
  applyMiddleware(...middleware)
)

export default store
