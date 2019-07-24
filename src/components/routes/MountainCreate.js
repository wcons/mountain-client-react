import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import Layout from '../shared/Layout'
import MountainForm from '../shared/MountainForm'
import AutoDismissAlert from '../../auth/components/AutoDismissAlert/AutoDismissAlert'

import axios from 'axios'
import apiUrl from '../../apiConfig'
import messages from '../../auth/messages'

class MountainCreate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      mountain: {
        name: '',
        height: '',
        lat: '',
        long: ''
      },
      alerts: [],
      createdMountainId: null
    }
  }

  handleChange = event => {
    // create an objext with updated field
    const updatedField = {
      [event.target.name]: event.target.value
    }

    // use object to create updated state object
    const editedMountain = Object.assign(this.state.mountain, updatedField)

    // finally setState with updates object
    this.setState({ movie: editedMountain })
  }

  handleSubmit = event => {
    event.preventDefault()

    axios({
      method: 'post',
      url: `${apiUrl}/mountains`,
      data: {
        mountain: this.state.mountain
      },
      headers: {
        Authorization: 'Token token=' + this.props.user.token
      }
    })

      .then(res => this.setState({ createdMountainId: res.data.mountain.id }))
      .then(() => alert(messages.createSuccess, 'success'))
      .catch(console.error)
  }

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }

  render () {
    const { handleChange, handleSubmit } = this
    const { mountain, createdMountainId, alerts } = this.state

    if (createdMountainId) {
      return <Redirect to={`/mountains/${createdMountainId}`}/>
    }
    return (
      <Layout>
        <h4>List a new mountain</h4>
        <MountainForm
          mountain={mountain}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath="/"
        />
        {alerts && alerts.map((alert, index) => (
          <AutoDismissAlert
            key={index}
            alert={alert}
          />
        ))}
      </Layout>

    )
  }
}

export default withRouter(MountainCreate)
