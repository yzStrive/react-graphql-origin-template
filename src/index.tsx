import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from '@/App'
import * as serviceWorker from './serviceWorker'
import { ApolloProvider } from '@apollo/client'
import { client } from './Apollo'

function ApolloApp() {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <ApolloApp />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
