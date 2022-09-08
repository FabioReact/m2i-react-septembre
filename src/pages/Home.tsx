import { useNavigate } from 'react-router-dom'

const Home = () => {
	const navigate = useNavigate()
	const goToBattle = () => {
		navigate('/battle')
	}

  return (
    <section>
      <h1>Heroes Arena</h1>
      <p>The arena where Yoda can fight Hulk!</p>
      <button onClick={goToBattle}>Battle</button>
    </section>
  )
}

export default Home
