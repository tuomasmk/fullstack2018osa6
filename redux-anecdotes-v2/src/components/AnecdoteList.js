import React from 'react'
import Format from '../components/Filter'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { addMessage, deleteMessage } from '../reducers/notificationReducer'

class AnecdoteList extends React.Component {
  voteClicked = (id) => () => {
    console.log('voteClicked, id: ' + id + ', type: ' + typeof(id))
    this.props.store.dispatch(voteAnecdote(id))
    const anecdote = this.props.store.getState().anecdotes.find(x =>  x.id === id)
    this.props.store.dispatch(addMessage('you voted \'' + anecdote.content + '\''))
    setTimeout(() => {
      this.props.store.dispatch(deleteMessage())
    }, 5000)
  }

  render() {
    //const anecdotes = this.props.store.getState().anecdotes
    const anecdotesToShow = () => {
      console.log('anecdotesToShow')
      console.log(this.context.store)
      const { anecdotes, filter } = this.props.store.getState()
      if (filter === 'ALL') {
        return anecdotes
      }

      return anecdotes.filter(a => a.content.includes(filter))
    }
    return (
      <div>
        <h2>Anecdotes</h2>
        <Format store={this.props.store} />
        {anecdotesToShow().sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={this.voteClicked(anecdote.id)
              }>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default AnecdoteList
