import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import Layout from '../shared/Layout'
import MountainForm from '../shared/MountainForm'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import messages from '../../auth/messages'

class MountainEdit extends Component {
  // Step 1: initialize constructor, state
  constructor (props) {
    super(props)

    this.state = {
      mountain: {
        name: '',
        height: '',
        lat: '',
        long: ''
      },
      edited: false
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/mountains/${this.props.match.params.id}`)
      .then(res => this.setState({ mountain: res.data.mountain }))
      .catch(err => this.setState({ error: err.stack }))
  }
  // step 2: render function to display/return Jsx
  render () {
    const { mountain, updatedMountainId } = this.state
    const { handleChange, handleSubmit } = this

    if (updatedMountainId) {
      return <Redirect to={
        {
          pathname: `/mountains/${updatedMountainId}`,
          state: {
            msg: 'Updated mountain!'

          }
        }
      } />
    }
    return (
      <Layout>
        <h4>Edit a mountain:</h4>
        <MountainForm
          mountain={mountain}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath={`/mountains/${this.props.match.params.id}`}
        />
      </Layout>
    )
  }
  // Step 2.a: reuse MountainForm
  // Step 3: populate form - GET request
  // Step 3.a: update state from successful response
  // use a lifecycle
  // Step 4: handleChange and handleSubmit
  handleChange = event => {
    const updatedField = {
      [event.target.name]: event.target.value
    }
    const editedMountain = Object.assign(this.state.mountain, updatedField)
    this.setState({ mountain: editedMountain })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { alert } = this.props
    axios({
      method: 'PATCH',
      url: `${apiUrl}/mountains/${this.props.match.params.id}`,
      data: {
        mountain: this.state.mountain
      },
      headers: {
        Authorization: 'Token token=' + this.props.user.token
      }
    })
      .then(res => this.setState({ updatedMountainId: this.props.match.params.id, edited: true }))
      .then(() => alert(messages.editSuccess, 'success'))
      .catch(() => alert(messages.editFailure, 'danger'))
  }
  // Step 5: on submit - update state & handle redirect in render
}

export default withRouter(MountainEdit)
