export enum ActionTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
}

type State = {
  connected: boolean
  role: string
  email: string
}

const authReducer = (state: State, action: any) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return {
        connected: true,
        role: action.payload.role,
        email: action.payload.email,
      }
    case ActionTypes.LOGOUT:
      return {
        connected: false,
        role: 'VISITOR',
        email: '',
      }
    default:
      throw new Error('Not a valid Auth action type')
  }
}

export { authReducer }
