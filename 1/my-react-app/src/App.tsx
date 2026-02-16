import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Post from './Post'
import './App.css'

const posts =[
  {name:"Marques Brownlee",message:"I want to learn how to build cleaner user interfaces."},
  {name:"Z",message:"Hello world"},
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to Web102</h1>
            <h2> Write a post about what you're excited to learn about!</h2>
      {posts.map((p,i)=>(
        <Post key={i} name={p.name} message={p.message}/>
      ))}
    </>

  )
}

export default App
