import { useDispatch, useSelector } from 'react-redux'
import Button from '../components/Button'
import { decrement, increment } from '../redux/slices/counterSlice'
import { RootState } from '../redux/store/store'

const Counter = () => {
  const counter = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <section>
      <h1>Counter with Redux</h1>
      <p>Counter Value: {counter}</p>
      <Button onClick={() => dispatch(increment())}>Increment</Button>
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
    </section>
  )
}

export default Counter
