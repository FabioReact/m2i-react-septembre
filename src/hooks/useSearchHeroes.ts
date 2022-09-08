import { useReducer } from 'react'
import fetcher from '../api/fetcher'
import reducer, { ActionTypes } from '../reducers/search-hero-reducer'

const useSearchHeroes = () => {
  const [state, dispatch] = useReducer(reducer, {
    heroes: [],
    loading: false,
    error: null,
  })

  const onSearch = async (search: string) => {
    dispatch({ type: ActionTypes.SET_LOADING })
    try {
      const results = await fetcher.get(`/heroes?name_like=${search}`)
      if (results.data.length === 0) throw new Error('No results')

      dispatch({ type: ActionTypes.SET_RESULTS, payload: results.data })
    } catch (e: any) {
      dispatch({ type: ActionTypes.SET_ERROR, payload: e.message })
    }
  }

  const getHero = async (id: string) => {
    dispatch({ type: ActionTypes.SET_LOADING })
    try {
      const results = await fetcher.get(`/heroes/${id}`)
      if (results.data.length === 0) throw new Error('No results')
      dispatch({ type: ActionTypes.SET_RESULTS, payload: [results.data] })
    } catch (e: any) {
      dispatch({ type: ActionTypes.SET_ERROR, payload: e.message })
    }
  }

  return {
    ...state,
    onSearch,
    getHero,
  }
}

export { useSearchHeroes }
