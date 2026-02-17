import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const cards = [
  { front: "thank you", back: "gracias" },
  { front: "hello", back: "hola" },
  { front: "goodbye", back: "adiós" },
  { front: "please", back: "por favor" },
  { front: "sorry", back: "perdón" },
  { front: "yes", back: "sí" },
  { front: "no", back: "no" },
  { front: "friend", back: "amigo" },
  { front: "family", back: "familia" },
  { front: "water", back: "agua" },
  { front: "food", back: "comida" },
  { front: "house", back: "casa" },
  { front: "school", back: "escuela" },
  { front: "work", back: "trabajo" },
  { front: "money", back: "dinero" },
  { front: "time", back: "tiempo" },
  { front: "happy", back: "feliz" },
  { front: "sad", back: "triste" },
  { front: "tired", back: "cansado" },
  { front: "here", back: "aquí" },
  { front: "there", back: "allá" },
  { front: "to go", back: "ir" },
  { front: "to have", back: "tener" }
];

  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  

  function FlipCard(){
    setIsFlipped((prev) => !prev);
  }

  function NextCard(){
    setCurrentIndex((prev) => (prev+1)%cards.length);
    setIsFlipped(false);
  }
  const card = cards[currentIndex];

  // useEffect: Right Arrow sets to next Card
  useEffect(() => {
  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "ArrowRight") {
      NextCard();
    }
  } 

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, []);

// useEffect: spacebar flips Card
  useEffect(()=>{
  function handleSpace(event: KeyboardEvent){
    if (event.key === " "){
      event.preventDefault();
      FlipCard();
    }
  }
  window.addEventListener("keydown", handleSpace);
  return () => window.removeEventListener("keydown", handleSpace);
  });


  return (
    <>
      <h1>Palabras 🇪🇸</h1>
      <h2>Spanish Flashcards App</h2>
      <p>Click the card or press the spacebar to flip it, and use the button or right arrow key to go to the next word.</p>
      <div style={{borderRadius:30, padding:120, paddingLeft:40,paddingRight:40,border: "1px solid black", backgroundColor: isFlipped ? "pink" : "lightgrey", fontSize:40}} onClick={FlipCard}>
        {isFlipped ? card.back:card.front}
      </div>

      <button onClick={NextCard} style={{paddingLeft:20,paddingRight:20,marginTop:50}}>
        →
      </button>
    </>
  )
}

export default App
