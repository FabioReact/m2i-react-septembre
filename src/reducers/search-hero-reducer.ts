export enum ActionTypes {
	SET_LOADING = 'SET_LOADING',
	SET_ERROR = 'SET_ERROR',
	SET_RESULTS = 'SET_RESULTS',
}

type State = {
  loading: boolean
  error: string|null
  heroes: any[]
}

// type Action = {
//   type: string
//   payload: any
// }

const reducer = (state: State, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_LOADING:
      return {
        loading: true,
        error: null,
        heroes: [],
      }
    case ActionTypes.SET_ERROR:
      return {
        loading: false,
        error: action.payload,
        heroes: [],
      }
    case ActionTypes.SET_RESULTS:
      return {
        loading: false,
        error: null,
        heroes: action.payload,
      }
    default:
      throw new Error('Nota a valid action type - SearchHero')
  }
}

export default reducer