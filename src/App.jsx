import { useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  return (
    <>
    <section id="main" class="h-screen w-full grid grid-rows-1">
    <div id="desktop" class="w-full grid grid-cols-3">
      <div id="apps">

      </div>
      <div id="news">

      </div>
      <div id="profile">

      </div>
    </div>
    <div id="taskbar" class="taskbar">
      <h1>// Portfolio</h1>
      <h1 id="taskbarApps" class="flex justify-center space-x-5">
        <p>app1</p>
        <p>app2</p>
      </h1>
      <h1 id="time" class="text-right">Time</h1>
    </div>
    </section>
    </>
  )
}

export default App
