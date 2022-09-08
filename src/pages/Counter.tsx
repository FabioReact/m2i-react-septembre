import { useReducer } from 'react'
import Button from '../components/Button'

const counterReducer = (state: any, action: any) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				counter: state.counter + 1
			}
		case 'DECREMENT':
			return {
				counter: state.counter - 1
			}
		default:
			throw new Error('Not a valid counter action');
	}
}

const useCounter = (initialValue = 0) => {
	const [state, dispatch] = useReducer(counterReducer, {
		counter: initialValue
	})

	const increment = () => {
		dispatch({ type: 'INCREMENT' })
	}

	const decrement = () => {
		dispatch({ type: 'DECREMENT' })
	}

	return {
		...state,
		increment,
		decrement,
	}
}

const Counter = () => {
	const { increment, decrement, counter } = useCounter(0)
	return (
		<section>
			<h1>Counter</h1>
			<p>Counter Value: {counter}</p>
			<Button onClick={increment}>Increment</Button>
			<Button onClick={decrement}>Decrement</Button>
		</section>
	)
}

export default Counter