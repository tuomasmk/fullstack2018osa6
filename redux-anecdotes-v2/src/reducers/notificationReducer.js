const notificationAtStart = 'Hello world!'

const notificationReducer = ( state = notificationAtStart, action ) => {
  switch (action.type) {
  case 'ADD':
    state = action.message
    return state
  case 'DELETE':
    state = ''
    return state
  default:
    return state
  }
}

export const addMessage = (message) => {
  return {
    type: 'ADD',
    message
  }
}

export const deleteMessage = () => {
  return {
    type: 'DELETE'
  }
}

export default notificationReducer