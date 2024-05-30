import React from 'react'
import Header from './component/Header'
import ProductSection from './component/ProductSection'
import CartContextProvider from './context/CartContext'

const App = () => {
  return (
    <>
      <CartContextProvider>
        <Header />
        <ProductSection />
      </CartContextProvider>
    </>
  )
}

export default App
