import React, { useState } from 'react'
import ProductsPage from './components/ProductsPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <ProductsPage/>
    </div>
  )
}

export default App
