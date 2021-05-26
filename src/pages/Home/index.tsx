import React, { useState } from 'react'
import './index.scss'
import Modal from '../../common/components/Modal'

function Home () {
  const [count, setCount] = useState(0)
  const [isModal, setModal] = useState(false)

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

      <button onClick={() => setModal(true)}>Click Here</button>
      <Modal
        isVisible={isModal}
        title='Modal Title'
        content={<p>Add your content here</p>}
        footer={<button onClick={() => setModal(false)}>Cancel</button>}
        onClose={() => setModal(false)}
      />
    </div>
  )
}

export default Home
