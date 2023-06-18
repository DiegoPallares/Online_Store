import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context/index.jsx'

import Home from '../Home/index' 
import MyAccount from '../MyAccount/index'
import MyOrder from '../MyOrder/index'
import MyOrders from '../MyOrders/index'
import SingIn from '../SingIn/index'
import NotFound from '../NotFound/index'
import Navbar from '../../Componentes/Navbar'
import CheckOutSideMenu from '../../Componentes/CheckOutSideMenu/index.jsx' 
import './App.css'

const AppRouters = () => {
  let routes = useRoutes([
    { path: '/',element: <Home /> },
    { path: '/clothes',element: <Home /> },
    { path: '/electronics',element: <Home /> },
    { path: '/furnitures',element: <Home /> },
    { path: '/toys',element: <Home /> },
    { path: '/othes',element: <Home /> },
    { path: '/My-Account',element: <MyAccount /> },
    { path: '/My-Order',element: <MyOrder /> },
    { path: '/My-Orders',element: <MyOrders /> },
    { path: '/My-Orders/last',element: <MyOrder /> },
    { path: '/My-Orders/:id',element: <MyOrder /> },
    { path: '/Si-ngIn',element: <SingIn /> },
    { path: '/*',element: <NotFound /> },
  ])
  return routes
}

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRouters />
        <Navbar />
        <CheckOutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App