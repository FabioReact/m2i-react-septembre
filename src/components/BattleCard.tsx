import { useState } from 'react'
import { Hero } from '../types/hero'
import HeroCard from './HeroCard'
import SearchHero from './SearchHero'


const HeroListItem = ({ hero, callback }: { hero: Hero; callback: any }) => {
  return (
    <div className='cursor-pointer hover:bg-gray-100' onClick={() => callback(hero)}>
      <p className='font-bold text-xl'>
        {hero.name}
        <span className='text-gray-600 text-base'>#{hero.id}</span>
      </p>
      <p className='text-lg mb-2'>{hero.biography['full-name']}</p>
    </div>
  )
}

type BattleCardProps = {
	selectedHero: Hero|null
	setSelectedHero: React.Dispatch<React.SetStateAction<Hero | null>>
}

const BattleCard = ({ selectedHero, setSelectedHero }: BattleCardProps) => {
	const [firstHeroes, setfirstHeroes] = useState<Hero[]>([])
  const onSearchFirst = (heroes: Hero[]) => {
    if (heroes.length > 1) setfirstHeroes(heroes)
    else if (heroes.length === 1) setSelectedHero(heroes[0])
  }

	return (
		<div>
			<SearchHero title='Player' label='Hero/Vilain' callback={onSearchFirst} />
			{!selectedHero && firstHeroes.map((hero) => <HeroListItem callback={setSelectedHero} key={hero.id} hero={hero} />)}
			{selectedHero && <HeroCard hero={selectedHero} />}
		</div>
	)
}

export default BattleCard