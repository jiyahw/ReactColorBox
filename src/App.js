import React from "react";
import Box from "./Components/Box";

function App() {
  // getRandomColor Function generate the new color 
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Create the Array of 9 Objects of different colors 
  const initialRandomColor = Array(9).fill(null).map(() => getRandomColor());

  return (
    <div className="App">
      <div className="box-container">
        {
          initialRandomColor.map((color, index) => (
            <Box
              key={index}
              initialRandomColor={color}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
