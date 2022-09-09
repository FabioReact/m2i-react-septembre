import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type City = {
	name: string
	id: number
}

export type CitiesState = {
  cities: City[]
}

const initialState: CitiesState = {
  cities: [{
		name: 'Tokyo',
		id: 42,
	}]
}

export const citiesSlice = createSlice({
	name: 'cities',
	initialState,
	reducers: {
		addCity: (state, action: PayloadAction<City>) => {
			state.cities = state.cities.concat(action.payload)
		},
		deleteCity: (state, action: PayloadAction<number>) => {
			state.cities = state.cities.filter(c => c.id !== action.payload)
		},
	}
})

export const { addCity, deleteCity } = citiesSlice.actions
export default citiesSlice.reducer
