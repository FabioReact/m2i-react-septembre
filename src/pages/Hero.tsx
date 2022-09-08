import HeroCard from '../components/HeroCard'
import { useParams } from 'react-router-dom'
import { useSearchHeroes } from '../hooks/useSearchHeroes'
import { useEffect } from 'react'

const HeroComponent = () => {
	const { id } = useParams()
	const { getHero, heroes, loading, error } = useSearchHeroes()
	console.log(heroes)

	useEffect(() => {
		getHero(id as string)
	}, [id])
	
	if (error) return <p>{error}</p>
	if (loading) return <p>Loading...</p>
	if (!heroes[0]) return <p>No hero to display</p>

	return (
		<HeroCard hero={heroes[0]} />
	)
}

export default HeroComponent