import { useState } from 'react'
import BattleCard from '../components/BattleCard'
import { Hero } from '../types/hero'

const Battle = () => {
  const [firstSelected, setFirstSelected] = useState<Hero | null>(null)
  const [secondSelected, setSecondSelected] = useState<Hero | null>(null)

  return (
    <section className='flex'>
			<BattleCard selectedHero={firstSelected} setSelectedHero={setFirstSelected} />
			<BattleCard selectedHero={secondSelected} setSelectedHero={setSecondSelected} />
			{firstSelected && secondSelected && <button>Battle</button>}
    </section>
  )
}

export default Battle
