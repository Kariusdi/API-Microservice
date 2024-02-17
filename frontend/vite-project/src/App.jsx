import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Getbutton from './components/get_button'
import CreateButton from './components/create_button'
import DeleteButton from './components/delete_button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Queue System</h1>
        <Getbutton></Getbutton>
        <p>-----------</p>
        <CreateButton></CreateButton>
        <p>-----------</p>
        <DeleteButton></DeleteButton>
      </div>
    </>
  )
}

export default App
