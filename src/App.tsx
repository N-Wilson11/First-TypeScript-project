import { useState, useEffect } from 'react'
import { colorChanger, greenChanger } from './colorChanger.tsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  useEffect(() => {
    const buttonElement = document.getElementById('redButton');
    if (buttonElement) {
      colorChanger(buttonElement); // Pass the actual button element to colorChanger
    }
  }, []); // Empty dependency array ensures this runs only once after the component mounts

  useEffect(() => {
    const greenBtnElement = document.getElementById('greenButton');
    if (greenBtnElement) {
      greenChanger(greenBtnElement); // Pass the actual button element to colorChanger
    }
  }, []);
  return (
    <>
      
        <button id="redButton">
          Red button
        </button>

        <button id="greenButton">
          Green button
        </button>
       
    </>
  )
}

export default App
