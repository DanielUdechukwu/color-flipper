import React from "react";
import { useState } from "react";
import "./Main.css"
import "../index.css"
let simple, hex;

const MainContent = () => {
  let colorList = [
    'Yellow', 'Blue', 'Red', 'Green', 'Brown', 'Chocolate', 'Coral', 'Cyan', 'DarkBlue', 'Aqua', 'Orange', 'Pink', 'Gold', 'Indigo', 'Gray', 'Purple', 'Silver', 'Teal', 'Violet', 'Whitesmoke',
  ]
  
  // Declaring States
  const [backgroundColor, setBackgroundColor] = useState ('white')
  const [modeSelect, setModeSelect] = useState ('simple')

  const ToggleSimple = () => {
    console.log("Color button clicked")
    let random = Math.floor(Math.random() * (colorList.length - 1));
    console.log(colorList[random])
    simple = colorList[random]
    setBackgroundColor(simple)
  }

  const ToggleHex = () => {
    hex = '#' + Math.floor(Math.random()*16777215).toString(16);
    setBackgroundColor(hex);
    console.log(hex)
  }

  const switchMode = (mode) => {
    setModeSelect(mode)
  }

  if (modeSelect === 'Hex'){
    console.log ('Hey, Hex')
    return (
      <>
        <nav>
          <h1 className="nav-title">Color Flipper</h1>
          <div className="mode-select">
            <a href="#" onClick={() => switchMode('Simple')}>Simple</a>
            <a href="#" onClick={() => switchMode('Hex')}>Hex</a>
          </div>
        </nav>
  
        <div className="main-container" style={{ backgroundColor }}>
          <div className="content">
            <h2>Background Color: {hex}</h2>
            <button onClick={ToggleHex}>Change Color</button>
          </div>
        </div>
      </>
    )
  }else{
    console.log('Simple')
    return (
      <>
        <nav>
          <h1 className="nav-title">Color Flipper</h1>
          <div className="mode-select">
            <a href="#" onClick={() => switchMode('Simple')}>Simple</a>
            <a href="#" onClick={() => switchMode('Hex')}>Hex</a>
          </div>
        </nav>
  
        <div className="main-container" style={{ backgroundColor }}>
          <div className="content">
            <h2>Background Color: {simple}</h2>
            <button onClick={ToggleSimple}>Change Color</button>
          </div>
        </div>
      </>
    )
  }
 
}

export default MainContent