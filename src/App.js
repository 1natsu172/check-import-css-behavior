import React from 'react'
import { Something1 } from './components/Something1'
import { Something2 } from './components/Something2'
import logo from './logo.svg'
import './App.css'
import 'antd/dist/antd.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Something1 title="I'm React">
          <img src={logo} className="App-logo" alt="logo" />
        </Something1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Something2 title="I'm official">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </Something2>
      </header>
    </div>
  )
}

export default App
