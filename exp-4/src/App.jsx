import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LocalStateCounter from './components/CounterLocalState'
import CounterContextParent from './components/CounterGlobalContextParent'
import CounterContextProvider from './components/context/CounterGlobalContextAPI'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>Experiment-4 To demonstrate State Management</h3>
      <LocalStateCounter cno={1} />
      <LocalStateCounter cno={2} />
      <CounterContextProvider>
        <CounterContextParent cno={1} />
        <CounterContextParent cno={2} />
      </CounterContextProvider>
    </>
  )
}

export default App
