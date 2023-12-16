import './App.css'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Main from './components/layout/Main'



function App() {

  return (
    <Router>
      <div className='app-container' id='pagina'>
        <header><Header /></header>
        <main><Main /></main>
        <footer><Footer /></footer>
      </div>
    </Router>
  )
}

export default App;