const defaultState = {
  contacts: [],
  contact: {name: {}, email: ''},
  loading: false,
  errors: {}
}

export default (state = defaultState, action = {}) => {
  switch(action.type) {
    case 'FETCH_CONTACTS': {
      return {
        ...state,
        contacts: action.payload
      }
    }
    case 'FETCH_CONTACTS_FULFILLED': {
      return {
        ...state,
        contacts: action.payload.data.data || action.payload.data
      }
    }
    case 'NEW_CONTACT': {
      return {
        ...state,
        contact: {name: {}, email: ''}
      }
    }
    case 'SAVE_CONTACT_PENDING': {
      return {
        ...state,
        loading: true
      }
    }
    case 'SAVE_CONTACT_FULFILLED': {
      return {
        ...state,
        contacts: [...state.contacts, action.payload.data],
        errors: {},
        loading: false
      }
    }
    case 'SAVE_CONTACT_REJECTED': {
      const data = action.payload.response.data
      const { "name.first": first, "name.last": last, phone, email } = data.errors
      const errors = { global: data.message, name: { first, last }, phone, email }
      return {
        ...state,
        errors: errors,
        loading: false
      }
    }
    case 'FETCH_CONTACT_PENDING': {
      return {
        ...state,
        loading: true,
        contact: {name: {}, email: ''}
      }
    }
    case 'FETCH_CONTACT_FULFILLED': {
      return {
        ...state,
        contact: action.payload.data,
        errors: {},
        loading: false
      }
    }
    case 'FETCH_CONTACT_REJECTED': {
      const data = action.payload.response.data
      const { "name.first": first, "name.last": last, phone, email } = data.errors
      const errors = { global: data.message, name: { first, last }, phone, email }
      return {
        ...state,
        errors: errors,
        loading: false
      }
    }
    case 'UPDATE_CONTACT_PENDING': {
      return {
        ...state,
        loading: true
      }
    }
    case 'UPDATE_CONTACT_REJECTED': {
      const data = action.payload.response.data
      const { "name.first": first, "name.last": last, phone, email } = data.errors
      const errors = { global: data.message, name: { first, last }, phone, email }
      return {
        ...state,
        errors: errors,
        loading: false
      }
    }
    case 'DELETE_CONTACT_FULFILLED': {
      const id = action.payload.data._id
      return {
        ...state,
        contacts: state.contacts.filter(item => item._id !== id),
        errors: {},
        loading: false
      }
    }
    default: return state
  }
}