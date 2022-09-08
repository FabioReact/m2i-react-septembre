import { useReducer } from 'react'
import { ActionTypes, authReducer } from '../reducers/auth-reducer'

const useConnection = () => {
  const [state, dispatch] = useReducer(authReducer, {
    connected: false,
    role: 'VISITOR',
    email: '',
  })

  const login = (email: string, role: string) => {
    dispatch({
      type: ActionTypes.LOGIN,
      payload: {
        role: role,
        email: email,
      },
    })
  }

  const logout = () => {
    dispatch({
      type: ActionTypes.LOGOUT,
    })
  }

  return {
    ...state,
    login,
    logout,
  }
}

export { useConnection }
