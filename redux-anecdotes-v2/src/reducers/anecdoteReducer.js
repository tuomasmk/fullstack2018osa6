import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  console.log('anecdoteReducer, type: ' + action.type)
  if (action.type==='VOTE') {
    const old = state.filter(a => a.id !==action.data.id)
    //const voted = state.find(a => a.id === action.id)

    return [...old, action.data ]
  }
  if (action.type === 'CREATE') {

    return [...state, action.data]
  }
  if (action.type === 'INIT_ANECDOTES') {
    return action.data
  }

  return state
}

export const anecdoteInitialization = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export const createAnecdote = (content) => {
  console.log('createAnecdote: ' + content)
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'CREATE',
      data: newAnecdote
    })
  }
}

export const voteAnecdote = (data) => {
  console.log('voting anecdote: ' + data)
  return async (dispatch) => {
    const changedAnecdote = await anecdoteService.vote(data)
    dispatch({
      type: 'VOTE',
      data: changedAnecdote
    })
  }
}

export default anecdoteReducer