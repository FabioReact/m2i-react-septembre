import { useState } from 'react'
import { Link } from 'react-router-dom'
import HeroCard from '../components/HeroCard'
import SearchHero from '../components/SearchHero'
import { Hero } from '../types/hero'

const Search = () => {
  const [heroes, setHeroes] = useState<Hero[]>([])
  return (
    <div>
      <SearchHero callback={setHeroes} label='Search Hero' />
      {heroes.map((hero) => (
        <Link key={hero.id} to={`/heroes/${hero.id}`}>
          <HeroCard hero={hero} />
        </Link>
      ))}
    </div>
  )
}

export default Search
