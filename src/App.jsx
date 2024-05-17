import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import Events from './views/Events'
import Stands from './views/Stands'
import { DataProvider } from './context/DataContext'

function App() {

  return (
    <div className='app'>
      <DataProvider>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/events' element={<Events/>} />
          <Route path='/stands' element={<Stands/>} />
        </Routes>
      </DataProvider>
    </div>
  )
}

export default App
