// import { contacts } from '../contacts-data'
import client from './fetch'

export function fetchContacts() {
  return dispatch =>
    dispatch({
      type: 'FETCH_CONTACTS',
      payload: client.get('contacts')
    })
}

export function newContact() {
  return dispatch =>
    dispatch({
      type: 'NEW_CONTACT'
    })
}

export function saveContact(contact) {
  return dispatch =>
    dispatch({
      type: 'SAVE_CONTACT',
      payload: client.post('contacts', contact)
    })
}