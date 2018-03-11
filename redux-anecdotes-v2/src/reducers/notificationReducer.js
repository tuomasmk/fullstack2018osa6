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

export const showMessageFor = (message, time) => {
  console.log('message: ' + message)
  console.log('time: ' + time)
  return async (dispatch) => {
    await dispatch({
      type: 'ADD',
      message
    })
    setTimeout(() => {
      dispatch({ type: 'DELETE' })
    }, time * 1000)
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