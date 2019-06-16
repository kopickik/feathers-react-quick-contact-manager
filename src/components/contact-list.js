import React from 'react'
import { Card } from 'semantic-ui-react'
import ContactCard from './contact-card'

export default function ContactList({contacts, deleteContact}) {
  const list = () => {
    return contacts.map(contact => {
      return (
        <ContactCard key={contact._id} contact={contact} deleteContact={deleteContact}/>
      )
    })
  }

  return(
    <Card.Group>
      { list() }
    </Card.Group>
  )
}