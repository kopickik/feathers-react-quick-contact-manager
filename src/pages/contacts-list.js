import React, { Component } from 'react'
import { connect } from 'react-redux'
import ContactList from '../components/contact-list'
import { fetchContacts } from '../actions/contacts-actions'

class ContactsList extends Component {

  componentDidMount() {
    this.props.fetchContacts()
  }

  render() {
    return (
      <div>
        <h1>List of Contacts</h1>
        <ContactList contacts={this.props.contacts} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contactsStore.contacts
  }
}

export default connect(mapStateToProps, {fetchContacts})(ContactsList)