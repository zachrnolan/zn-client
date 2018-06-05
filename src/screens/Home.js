import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const Projects = () => (
  <Query query={gql`
    {
      projects {
        name
        teaser
      }
    }
  `}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error: {error}</p>

      return data.projects.map(({ name, teaser }) => (
        <div key={name}>
          <h2>{name}</h2>
          <p>{teaser}</p>
        </div>
      ))
    }}
  </Query>
)

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Projects />
      </div>
    )
  }
}

export default Home