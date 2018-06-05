import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from "apollo-boost"
import { ApolloProvider } from 'react-apollo'
import './reset.css'
import './index.css'
import Home from './screens/Home'
import registerServiceWorker from './registerServiceWorker'

const client = new ApolloClient({
  uri: 'http://localhost:4000'
})

const App = () => (
  <ApolloProvider client={client}>
    <Home />
  </ApolloProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
