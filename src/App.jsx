import React from 'react'
import { Navbar } from './components/Navbar'
import { Routes, Route, Navigate  } from 'react-router-dom'
import { HomePage } from './pages/HomePage.jsx'
import { AboutPage } from './pages/AboutPage.jsx'
import { GamesPage } from './pages/GamesPage.jsx'
import { LoginPage } from './pages/LoginPage.jsx'
import { RegisterPage } from './pages/RegisterPage.jsx'
import { Footer } from './components/Footer.jsx'
import { GameDetails } from './pages/GameDetails.jsx'
import { DevPage } from './pages/DevPage.jsx'






export const App = () => {
  return (
    <>
              <Navbar></Navbar>

      <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/about' element={<AboutPage></AboutPage>}></Route>
          <Route path='/games' element={<GamesPage></GamesPage>}></Route>
          <Route path='/devs' element={<DevPage></DevPage>}></Route>
          <Route exact path="/game-details/:id" element={<GameDetails></GameDetails>} />
          <Route path='/login' element={<LoginPage></LoginPage>}></Route>
          <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
          <Route path='/*' element={<Navigate to={'/'}/>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  )
}
