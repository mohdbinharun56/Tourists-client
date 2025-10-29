
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './components/navbar/navbar'

function App() {
  const location = useLocation();
  return (
    <>
      {
        location.pathname !== '/login' && location.pathname !== '/register' && <Navbar/>
      }
      {/* <Navbar/> */}
      <Outlet></Outlet>
    </>
  )
}

export default App
