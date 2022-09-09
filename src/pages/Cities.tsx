import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addCity, deleteCity } from '../redux/slices/citiesSlice'
import { RootState } from '../redux/store/store'

type Inputs = {
  city: string
}

const Cities = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const cities = useSelector((state: RootState) => state.cities.cities)
  const dispatch = useDispatch()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(
      addCity({
        name: data.city,
        id: Date.now() + Math.random(),
      }),
    )
    return
  }

  const onDelete = (id: number) => {
    dispatch(deleteCity(id))
  }

  return (
    <section>
      <h1>Cities to visit</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='city'>City to visit</label>
        <input type='text' id='city' {...register('city')} />
        <button>Add City</button>
      </form>
      <ul>
        {cities.map((c) => (
          <li key={c.id}>
            {c.name} <button onClick={() => onDelete(c.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Cities
