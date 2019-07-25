import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Link } from 'react-router-dom'
import Layout from '../shared/Layout'

class Mountains extends Component {
  constructor (props) {
    super(props)

    this.state = {
      mountains: [],
      loaded: false,
      error: null
    }
  }

  async componentDidMount () {
    // api request!!!
  //  axios(`${apiUrl}/movies`)
  //    .then(res => this.setState({ movies: res.data.movies, loaded: true }))
  //    .catch(err => this.setState({ error: err.stack }))
    try {
      const response = await axios(`${apiUrl}/mountains`)
      this.setState({ mountains: response.data.mountains, loaded: true })
    } catch (err) {
      console.error(err)
      this.setState({ error: err.message })
    }
  }

  render () {
    const { mountains, error, loaded } = this.state
    const mountainsList = mountains.map(mountain => (
      <li key={mountain._id}>
        <Link to={`/mountains/${mountain._id}`}>{mountain.name}</Link>
      </li>
    ))
    if (!loaded) {
      return <p>Loading...</p>
    }
    if (mountains.length === 0) {
      return <p>No Mountains!!</p>
    }

    if (error) {
      return <p>Error: {error}</p>
    }
    return (
      <Layout>
        <h4>4000 Footers</h4>
        <ul>
          {mountainsList}
        </ul>
      </Layout>
    )
  }
}

export default Mountains
