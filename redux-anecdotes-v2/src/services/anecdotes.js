import axios from 'axios'

const url = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(url)
  return response.data
}

const createNew = async (content) => {
  const response = await axios.post(url, { content: content, votes: 0 })
  return response.data
}

const vote = async (id) => {
  const anecdotes = await getAll()
  const newAnecdote = anecdotes.find(a => a.id === id)
  newAnecdote.votes = newAnecdote.votes + 1
  const response = await axios.put(url + '/' + id, newAnecdote)
  return response.data
}

export default { getAll, createNew, vote }