import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Battle from './pages/Battle'
import Counter from './pages/Counter'
import Heroes from './pages/Heroes'
import HeroComponent from './pages/Hero'
import Search from './pages/Search'
import Login from './pages/Login'
import { AuthContext } from './context/auth-context'
import { useConnection } from './hooks/useConnection'
import LoginHookForm from './pages/LoginHookForm'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {
  const { connected, email, login, logout, role } = useConnection()

  return (
    <AuthContext.Provider
      value={{
        connected,
        email,
        login,
        logout,
        role,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path='' element={<NavBar />}>
              <Route index element={<Home />} />
              <Route path='battle' element={<Battle />} />
              <Route path='search' element={<Search />} />
              <Route path='heroes' element={<Heroes />} />
              <Route path='heroes/:id' element={<HeroComponent />} />
              <Route path='counter' element={<Counter />} />
              <Route path='login' element={<LoginHookForm />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </AuthContext.Provider>
  )
}

export default App
