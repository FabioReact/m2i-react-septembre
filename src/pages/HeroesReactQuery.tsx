import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useSearchParams, Link } from 'react-router-dom'
import fetcher from '../api/fetcher'
import HeroCard from '../components/HeroCard'
import { Hero } from '../types/hero'

const Heroes = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedLetter, setSelectedLetter] = useState(searchParams.get('q') || 'A')
  const { isLoading, error, data } = useQuery(['getHeroesByLetter', selectedLetter], () => fetcher.get(`/heroes?name_like=^${selectedLetter}`))

  console.log({ error })

  useEffect(() => {
    setSearchParams(`q=${selectedLetter}`)
  }, [selectedLetter])

  const lettersArray = []
  for (let index = 65; index <= 90; index++) {
    lettersArray.push(String.fromCharCode(index))
  }

  const onClickLetter = (l: string) => {
    setSelectedLetter(l)
  }

  return (
    <section>
      <ul className='flex gap-1 justify-center'>
        {lettersArray.map((l) => (
          <li
            className={selectedLetter === l ? 'text-red-600 cursor-pointer' : 'cursor-pointer'}
            onClick={() => onClickLetter(l)}
            key={l}
          >
            {l}
          </li>
        ))}
      </ul>
      {isLoading && <p>Loading...</p>}
      {error && <p className='text-red-600'>{(error as Error).message}</p>}
      {!isLoading && !error && data.data?.map((hero: Hero) => (
				<Link to={hero.id} key={hero.id}>
        	<HeroCard hero={hero} />
				</Link>
      ))}
    </section>
  )
}

export default Heroes
