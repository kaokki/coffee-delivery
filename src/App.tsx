import { Outlet } from 'react-router'
import { GlobalStyle } from './assets/styles/global'
import Header from './components/Header/Header'
import { CartProvider } from './context/CartContext'

function App() {

  return (
    <>
      <CartProvider>
        <GlobalStyle/>
        <Header />
        <Outlet />
      </CartProvider>
    </>
  )
}

export default App
