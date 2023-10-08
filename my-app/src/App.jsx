import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const sumOf = (a,b) =>{
    const sum = (a+b)
    return <h2>{sum}</h2>
  }

  return (
    <>
      {sumOf(2,2)}
    </>
  )
}

export default App
