import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import ContactsReducer from './contacts-reducer'

const reducers = {
  contactsStore: ContactsReducer,
  form: formReducer
}

const rootReducer = combineReducers(reducers)

export default rootReducer