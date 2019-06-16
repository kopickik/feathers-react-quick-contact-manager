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

export function fetchContact(id) {
  return dispatch =>
    dispatch({
      type: 'FETCH_CONTACT',
      payload: client.get(`contacts/${id}`)
    })
}

export function updateContact(contact) {
  return dispatch =>
    dispatch({
      type: 'UPDATE_CONTACT',
      payload: client.put(`contacts/${contact._id}`, contact)
    })
}

export function deleteContact(id) {
  return dispatch =>
    dispatch({
      type: 'DELETE_CONTACT',
      payload: client.delete(`contacts/${id}`)
    })
}