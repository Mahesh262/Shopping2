import {createStore} from 'redux';
import { Todoreducer } from './TodoReducers';

export let Todostore = createStore(Todoreducer);