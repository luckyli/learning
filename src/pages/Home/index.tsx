import React, { useState } from 'react'
import './index.scss'

function Home () {
  const [count, setCount] = useState(0)

  return (
    <div className='home page'>
      <header className='home-header'>
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
      </header>

      <div className='box'>
        <span>react</span> use <span className='code'>vite</span>
      </div>
    </div>
  )
}

export default Home
