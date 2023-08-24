import React from "react";
import "./Main.css"
let color;

const MainContent = () => {
  return (
    <>
      <div className="main-container" style={{backgroundColor: {color}  }}>
        <div className="content">
          <h2>Background Color: {color}</h2>
          <button onClick={ToggleColor}>Change Color</button>
        </div>
      </div>
    </>
  )
}

let colorList = [
  'Yellow', 'Blue', 'White', 'Red', 'Green', 'Black', 'Brown', 'Chocolate', 'Coral', 'Cyan', 'DarkBlue', 'Aqua', 'Orange', 'Pink', 'Gold', 'Indigo', 'Gray', 'Purple', 'Silver', 'Teal', 'Violet', 'Whitesmoke',
]

const ToggleColor = () => {
  console.log("Color button clicked")
  let random = Math.floor(Math.random() * (colorList.length - 1));
  console.log(colorList[random])
  color = colorList[random]
}

export default MainContent