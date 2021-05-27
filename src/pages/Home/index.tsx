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
        <span className='color-red'>react</span> use <span className='color-green'>vite</span>
      </div>
      <div className='box'>
        <button onClick={() => setModal(true)}>打开底部弹窗</button>
      </div>
      <Modal
        isVisible={isModal}
        title='Modal Title'
        content={<p>Add your content here</p>}
        footer={null}
        // footer={<button onClick={() => setModal(false)}>Cancel</button>}
        onClose={() => setModal(false)}
      />
    </div>
  )
}

export default Home
