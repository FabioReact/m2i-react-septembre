import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
// import Home from './pages/Home'
// import NavBar from './components/NavBar'
// import Battle from './pages/Battle'
// import Counter from './pages/Counter'
// import Heroes from './pages/Heroes'
// import HeroComponent from './pages/Hero'
// import Search from './pages/Search'
// import Login from './pages/Login'
// import Cities from './pages/Cities'
// import LoginHookForm from './pages/LoginHookForm'
import { AuthContext } from './context/auth-context'
import { useConnection } from './hooks/useConnection'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { store } from './redux/store/store'

const Home = lazy(() => import('./pages/Home'))
const Heroes = lazy(() => import('./pages/Heroes'))
const NavBar = lazy(() => import('./components/NavBar'))
const Battle = lazy(() => import('./pages/Battle'))
const Counter = lazy(() => import('./pages/Counter'))
const CounterRedux = lazy(() => import('./pages/CounterRedux'))
const Search = lazy(() => import('./pages/Search'))
const HeroComponent = lazy(() => import('./pages/Hero'))
const Login = lazy(() => import('./pages/Login'))
const Cities = lazy(() => import('./pages/Cities'))

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
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Suspense fallback={<div>Lazy Loading...</div>}>
              <Routes>
                <Route path='' element={<NavBar />}>
                  <Route index element={<Home />} />
                  <Route path='battle' element={<Battle />} />
                  <Route path='search' element={<Search />} />
                  <Route path='heroes' element={<Heroes />} />
                  <Route path='heroes/:id' element={<HeroComponent />} />
                  <Route path='counter' element={<Counter />} />
                  <Route path='counter-redux' element={<CounterRedux />} />
                  <Route path='cities-redux' element={<Cities />} />
                  <Route path='login' element={<Login />} />
                </Route>
              </Routes>
            </Suspense>
          </BrowserRouter>
        </QueryClientProvider>
      </Provider>
    </AuthContext.Provider>
  )
}

export default App
