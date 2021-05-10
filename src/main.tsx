import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Link } from 'react-router-dom'
import './index.scss'
import Home from './pages/Home'
import List from './pages/List'

const Navigation = () => {
  return (
    <div className='navigation'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/list'>List</Link>
        </li>
      </ul>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Navigation />
      <Route path='/' exact component={Home} />
      <Route path='/list' component={List} />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
