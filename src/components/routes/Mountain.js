import React, { Component } from 'react'
import { Link, Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
// import Layout from '../shared/Layout.js'

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
    console.log(this.props.user)
    axios({
      method: 'DELETE',
      url: `${apiUrl}/mountains/${this.props.match.params.id}`,
      headers: {
        Authorization: 'Token token=' + this.props.user.token
      }
    })
      .then(() => this.setState({ deleted: true }))
      .catch(err => this.setState({ error: err.message }))
  }

  render () {
    const { mountain, error, deleted } = this.state

    if (deleted) {
      return <Redirect to={
        { pathname: '/mountains/', state: { msg: 'Mountain Successfully Deleted!!' } }
      } />
    }

    if (!mountain) {
      return <p>Error: {error} </p>
    }

    return (
      <React.Fragment>
        <h4>{mountain.name}</h4>
        <p>Height: {mountain.height}</p>
        <p>Latitude: {mountain.lat}</p>
        <p>Longitude: {mountain.long}</p>
        <button onClick={this.destroy}>Delete Mountain</button>
        <Link to="/mountains/">Back</Link>
      </React.Fragment>
    )
  }
}
export default withRouter(Mountain)
