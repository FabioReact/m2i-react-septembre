import { useContext } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { AuthContext } from '../context/auth-context'

const NavBar = () => {
  const { connected, logout } = useContext(AuthContext)
  const getClassNames = ({ isActive }: { isActive: boolean }) => {
    return isActive ? 'text-red-600' : ''
  }
  return (
    <>
      <header>
        <nav>
          <ul className='flex justify-center gap-3 text-lg font-bold'>
            <li>
              <NavLink className={getClassNames} to={'/'}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={getClassNames} to={'battle'}>
                Battle
              </NavLink>
            </li>
            <li>
              <NavLink className={getClassNames} to={'heroes'}>
                Heroes
              </NavLink>
            </li>
            <li>
              <NavLink className={getClassNames} to={'search'}>
                Search
              </NavLink>
            </li>
            {/* {!connected ? 
              <li>
                <NavLink className={getClassNames} to={'login'}>
                  Login
                </NavLink>
              </li> :
              <li>
                <button onClick={logout}>
                  Logout
                </button>
              </li>
            } */}
            <AuthContext.Consumer>
              {(authContext) =>
                !authContext.connected ? (
                  <li>
                    <NavLink className={getClassNames} to={'login'}>
                      Login
                    </NavLink>
                  </li>
                ) : (
                  <li>
                    <button onClick={authContext.logout}>Logout</button>
                  </li>
                )
              }
            </AuthContext.Consumer>
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer>Copyright 2022</footer>
    </>
  )
}

export default NavBar
