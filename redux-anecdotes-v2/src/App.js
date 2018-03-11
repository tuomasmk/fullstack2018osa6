import React from 'react'
import ConnectedNotification from './components/Notification'
import ConnectAnecdoteForm from './components/AnecdoteForm'
import ConnectedAnecdoteList from './components/AnecdoteList'
import { connect } from 'react-redux'
import { anecdoteInitialization } from './reducers/anecdoteReducer'
import anecdoteService from './services/anecdotes'

class App extends React.Component {
  componentDidMount = async () => {
    const anecdotes = await anecdoteService.getAll()
    this.props.anecdoteInitialization(anecdotes)
  }

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

export default connect (
  null,
  { anecdoteInitialization }
) (App)