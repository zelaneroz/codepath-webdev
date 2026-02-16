import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calendar from "./Calendar"

function App() {
  return (
    <>
      <h1>Itinerary for 7 Days in Chicago</h1>
      <p>One week in Chicago is Wonderful. If you want to get to know the city and see all the sights, then spending 7 days in Chicago is perfect!</p>
      <Calendar/>
    </>
  )
}

export default App
