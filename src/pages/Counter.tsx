import { memo, useCallback, useEffect, useMemo, useReducer } from 'react'
import Button, { MemoButton } from '../components/Button'

const counterReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        counter: state.counter + 1,
      }
    case 'DECREMENT':
      return {
        counter: state.counter - 1,
      }
    default:
      throw new Error('Not a valid counter action')
  }
}

const useCounter = (initialValue = 0) => {
  const [state, dispatch] = useReducer(counterReducer, {
    counter: initialValue,
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

const expensiveCompute = (n: number) => {
  let result
  setTimeout(() => {
    result = n * 10
		console.log(result)
		// return result
  }, 2000)
  // return result
}

const DisplayCounter = ({ counter }: any) => {
  console.log('Display counter - Called')
  // useEffect(() => {
  // 	console.log('Display counter - first render')
  // }, [])
  return <p>Counter Value: {counter}</p>
}

const MemoDisplayCounter = memo(DisplayCounter)

const DummyTitle = ({ title }: any) => {
  return <h1>{title}</h1>
}

const MemoDummyTitle = memo(DummyTitle)

const Counter = () => {
  const { increment, decrement, counter } = useCounter(0)
	const n = 10
	// useMemo sert à mémoizer le résultat d'une fonction sans avoir à la reéxecuter si jamais aucun des parametre n'a changé
	const memoizedValue = useMemo(() => expensiveCompute(n), [n])
	// useCallback permet de garder la meme reference d'une fonction afin de la passer en callback et de permettre à React.memo de fonctionner correctement
  const memoizedIncrement = useCallback(increment, [])
  const memoizedDecrement = useCallback(decrement, [])
  return (
    <section>
      <MemoDummyTitle title='Counter' />
      <MemoDisplayCounter counter={counter} />
      <MemoButton onClick={memoizedIncrement}>Increment</MemoButton>
      <MemoButton onClick={memoizedDecrement}>Decrement</MemoButton>
    </section>
  )
}

export default Counter
