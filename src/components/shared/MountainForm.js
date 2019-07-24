import React from 'react'
import { Link } from 'react-router-dom'

const MountainForm = ({ mountain, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>Name</label>
    <input
      placeholder="Name of Mountain"
      value={mountain.name}
      name="name"
      onChange={handleChange}
    />

    <label>Height</label>
    <input
      placeholder="Height in Feet"
      value={mountain.height}
      name="height"
      onChange={handleChange}
    />

    <label>Latitude</label>
    <input
      placeholder="x&#176;y&#8242;z&#8243;"
      value={mountain.lat}
      name="lat"
      onChange={handleChange}
    />

    <label>Longitude</label>
    <input
      placeholder="x&#176;y&#8242;z&#8243;"
      value={mountain.long}
      name="long"
      onChange={handleChange}
    />
    <button type="submit">Submit</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)

export default MountainForm
