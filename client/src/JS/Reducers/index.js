import { combineReducers } from 'redux';
import {contactsReducer} from './contactsReducer'
import {editReducer} from './edit'

export const rootReducer=combineReducers({contactsReducer,editReducer})