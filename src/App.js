import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import ContactListPage from './pages/contacts-list'
import ContactFormPage from './pages/contact-form-page'
import LandingPage from './pages/landing'

class App extends Component {
  render() {
    return (
      <Container>
        <div className="ui three item menu">
          <NavLink className="item" activeClassName="active" exact to="/">
            Contacts List
          </NavLink>
          <NavLink className="item" activeClassName="active" exact to="/contacts/new">
            Add Contact
          </NavLink>
          <NavLink className="item" activeClassName="active" exact to="/landing">
            Landing
          </NavLink>
        </div>
        <Route exact path="/" component={ContactListPage} />
        <Route exact path="/contacts/new" component={ContactFormPage} />
        <Route exact path="/contacts/edit/:_id" component={ContactFormPage} />
        <Route exact path="/landing" component={LandingPage} />
      </Container>
    )
  }
}

export default App