import React, { useEffect, useState } from 'react'
import { useSearchHeroes } from '../hooks/useSearchHeroes'

type Props = {
  label: string
  title?: string
  buttonLabel?: string
  callback: any
}

const SearchHero = ({ callback, label, title = 'Search', buttonLabel = 'Search' }: Props) => {
  const [search, setSearch] = useState<string>('')

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

	const { onSearch, loading, heroes, error } = useSearchHeroes()

  useEffect(() => {
    callback(heroes)
  }, [heroes])
  

  const onSubmitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    onSearch(search)
    // callback(heroes)
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <h1>{title}</h1>
      <label htmlFor='search'>{label}</label>
      <input type='text' id='search' name='search' value={search} onChange={onChangeHandler} />
      <button disabled={loading}>
        {loading ? 'Loading...' : buttonLabel}
      </button>
			{error && <p style={{color: 'red'}}>{error}</p> }
    </form>
  )
}

export default SearchHero
