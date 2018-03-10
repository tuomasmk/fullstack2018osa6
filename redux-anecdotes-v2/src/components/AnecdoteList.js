import React from 'react'
import { connect } from 'react-redux'
import ConnectFilter from '../components/Filter'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { addMessage, deleteMessage } from '../reducers/notificationReducer'

class AnecdoteList extends React.Component {
  voteClicked = (id) => () => {
    console.log('voteClicked, id: ' + id + ', type: ' + typeof(id))
    this.props.voteAnecdote(id)
    const anecdote = this.props.visibleAnecdotes.find(x =>  x.id === id)
    this.props.addMessage('you voted \'' + anecdote.content + '\'')
    setTimeout(() => {
      this.props.deleteMessage()
    }, 5000)
  }

  render() {
    return (
      <div>
        <h2>Anecdotes</h2>
        <ConnectFilter />
        {this.props.visibleAnecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
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

const anecdotesToShow = (anecdotes, filter) => {
  console.log('anecdotesToShow')
  console.log(anecdotes)
  console.log(filter)
  if (filter === 'ALL') {
    return anecdotes
  }

  return anecdotes.filter(a => a.content.includes(filter))
}

const mapStateToProps = (state) => {
  return {
    visibleAnecdotes: anecdotesToShow(state.anecdotes, state.filter)
  }
}

const mapDispatchToProps = {
  voteAnecdote,
  addMessage,
  deleteMessage
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
) (AnecdoteList)

export default ConnectedAnecdoteList
