/* global NODE_ENV */
import { createStore } from 'redux';
import reducer from '../reducer/index';


const store = createStore(reducer, {});

export default store;    