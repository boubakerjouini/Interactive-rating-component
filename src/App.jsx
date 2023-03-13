import { useState } from 'react'
import Panel from './components/Panel'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary-dark  ">
      <Panel />
    </div>
  )
}

export default App
