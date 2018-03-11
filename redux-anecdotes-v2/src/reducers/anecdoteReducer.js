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

export const anecdoteInitialization = (data) => {
  return {
    type: 'INIT_ANECDOTES',
    data
  }
}

export const createAnecdote = (data) => {
  console.log('createAnecdote: ' + data)
  return {
    type: 'CREATE',
    data
  }
}

export const voteAnecdote = (data) => {
  console.log('voting anecdote: ' + data)
  return {
    type: 'VOTE',
    data
  }
}

export default anecdoteReducer