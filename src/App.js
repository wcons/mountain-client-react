import React, { Component } from 'react'
import './App.scss'
import { Route, withRouter } from 'react-router-dom'
import AutoDismissAlert from './auth/components/AutoDismissAlert/AutoDismissAlert'
import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import Mountains from './components/routes/Mountains'
import Mountain from './components/routes/Mountain'
import MountainCreate from './components/routes/MountainCreate'
import MountainEdit from './components/routes/MountainEdit'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }

  render () {
    const { alerts, user } = this.state

    return (
      <React.Fragment>
        <Header user={user} />

        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/list-mountain' render={() => (
            <MountainCreate alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/mountains' render={() => (
            <Mountains alert={this.alert} user={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} exact path='/mountains/:id' render={() => (
            <Mountain alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/mountains/:id/edit' render={() => (
            <MountainEdit alert={this.alert} user={user} />
          )} />
        </main>
        {alerts && alerts.map((alert, index) => (
          <AutoDismissAlert
            key={index}
            alert={alert}
          />
        ))}
      </React.Fragment>
    )
  }
}

export default withRouter(App)
