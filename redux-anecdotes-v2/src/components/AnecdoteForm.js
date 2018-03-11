import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import anecdoteService from '../services/anecdotes'

class AnecdoteForm extends React.Component {
  handleSubmit = async (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    e.target.anecdote.value = ''
    console.log('content: ' + content)
    const newAnecdote = await anecdoteService.createNew(content)
    this.props.createAnecdote(newAnecdote)
  }
  render() {
    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote'/></div>
          <button>create</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = {
  createAnecdote
}

const ConnectedAnecdoteForm = connect(
  null,
  mapDispatchToProps
) (AnecdoteForm)

export default ConnectedAnecdoteForm
