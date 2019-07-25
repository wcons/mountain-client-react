import React, { Component } from 'react'
import { Link, Redirect, withRouter } from 'react-router-dom'
import Layout from '../shared/Layout'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import messages from '../../auth/messages'

class Mountain extends Component {
  constructor (props) {
    super(props)

    this.state = {
      mountain: null,
      error: null,
      deleted: false
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/mountains/${this.props.match.params.id}`)
      .then(res => this.setState({ mountain: res.data.mountain }))
      .catch(err => this.setState({ error: err.stack }))
  }

  destroy = () => {
    const { alert } = this.props
    axios({
      method: 'DELETE',
      url: `${apiUrl}/mountains/${this.props.match.params.id}`,
      headers: {
        Authorization: 'Token token=' + this.props.user.token
      }
    })
      .then(() => this.setState({ deleted: true }))
      .then(() => alert(messages.deleteSuccess, 'success'))
      .catch(() => alert(messages.deleteFailure, 'danger'))
  }

  render () {
    const { mountain, error, deleted } = this.state

    if (deleted) {
      return <Redirect to={
        { pathname: '/mountains/' }
      } />
    }

    if (!mountain) {
      return <p>Error: {error} </p>
    }

    return (
      <Layout>
        <h4>{mountain.name}</h4>
        <p>Height: {mountain.height}</p>
        <p>Latitude: {mountain.lat}</p>
        <p>Longitude: {mountain.long}</p>
        <button onClick={this.destroy}>Delete Mountain</button>
        <Link to={`/mountains/${this.props.match.params.id}/edit`}>
          <button>Edit Mountain</button>
        </Link>
        <Link to="/mountains/">Back</Link>

      </Layout>
    )
  }
}
export default withRouter(Mountain)
