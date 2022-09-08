import { createContext } from 'react'

const AuthContext = createContext({
	connected: false,
	role: 'VISITOR',
	email: '',
	login: (email: string, role: string) => {return},
	logout: () => {return},
})

export { AuthContext }