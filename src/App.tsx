import { useState, useEffect } from 'react'
import './App.css'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import AddButton from './components/AddButton';

// Add fas icons to the library
library.add(fas);

// Generates a random color that will be used for the rectangles
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

function App() {
  // Variables used to create a number of rectangles, then store them in rectanglesList.
  const [rectangles, setRectangles] = useState<number[]>([]);
  const [colors, setColors] = useState<string[]>([]); // State to store colors for each rectangle

  useEffect(() => {
    // Add initial rectangle
    addRectangle();
  }, []);

  // Copies the color of rectangle thats clicked on
  const copyColor = (index: number) => {
    navigator.clipboard.writeText(colors[index]);
    alert("Copied the color: " + colors[index]);
  }

  // Add rectangle function
  const addRectangle = () => {
    setRectangles(prevRectangles => {
      //Get index for new rectangle
      const newIndex = prevRectangles.length;
      //Get new color for the new rectangle
      const newColor = getRandomColor();
      
      //Creates a new array with the previous colors using a "spread operator". The new color is then added to the end
      setColors(prevColors => [...prevColors, newColor]);

      //Return the list of the rectangles, including the new rectangle at the end.
      return [...prevRectangles, newIndex];
    });
  };

  const rectanglesList = rectangles.map((index) => {
    return (
      <div 
        key={index} 
        style={{ backgroundColor: colors[index] }} 
        onClick={() => copyColor(index)}  
        className="colorCard">
      </div>
    );
  });

  return (
    <>
      <div>
        <h1>Color picker</h1>
        <p>Pick a color that you like!</p>
      </div>
      
      <div>
        <div className="grid-container">
          
          {/* Show the rectangles stored in rectanglesList*/}
          {rectanglesList}

          {/* Show the add rectangle button */}
          <div className='addRectangle' onClick={addRectangle}><AddButton /></div>
        </div>
      </div>
    </>
  )
}

export default App
