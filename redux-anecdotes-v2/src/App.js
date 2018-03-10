import React from 'react'
import ConnectedNotification from './components/Notification'
import ConnectAnecdoteForm from './components/AnecdoteForm'
import ConnectedAnecdoteList from './components/AnecdoteList'

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Programming anecdotes</h1>
        <ConnectedNotification />
        <ConnectedAnecdoteList />
        <ConnectAnecdoteForm />
      </div>
    )
  }
}

export default App