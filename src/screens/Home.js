import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const Keywords = ({ keywords }) => {
  return [].concat(keywords) // create new array, so we can sort
    .sort((a, b) => a.sort - b.sort)
    .map(({ name }) => (
      <h3 key={name}>{name}</h3>
    ))
}

const Projects = () => (
  <Query query={gql`
    {
      projects {
        name
        teaser
        description
        imageUrl
        keywords {
          name
          sort
        }
      }
    }
  `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error: {error}</p>

      return data.projects.map(({
        name,
        teaser,
        description,
        imageUrl,
        keywords,
      }) => (
        <div key={name}>
          <h2>{name}</h2>
          <p>{teaser}</p>
          <p>{description}</p>
          <img src={imageUrl} alt={name} />
          <Keywords keywords={keywords} />
        </div>
      ))
    }}
  </Query>
)

const Home = () => (
  <div>
    <h1>Home</h1>
    <Projects />
  </div>
)

export default Home
