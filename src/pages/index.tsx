import { useState } from 'react'

// "react/react-in-jsx-scope": "off"

const Home = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  )
}

export default Home
