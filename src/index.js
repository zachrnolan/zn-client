import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './reset.css'
import './index.css'
import Home from './screens/Home'
import Admin from './screens/Admin'
import registerServiceWorker from './registerServiceWorker'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  // uri: 'https://zn-server.herokuapp.com/graphql',
})

const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <div>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </div>
        <Route exact path='/' component={Home} />
        <Route path='/admin' component={Admin} />
      </div>
    </BrowserRouter>
  </ApolloProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
