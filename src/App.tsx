import { useState, useEffect } from 'react'
import './App.css'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import AddButton from './components/AddButton';
import LoginButton from './components/LoginButton';
import RefreshButton from './components/RefreshButton';
import CopyButton from './components/CopyButton.tsx';
import DeleteButton from './components/DeleteButton.tsx';

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
  const [rectangles, setRectangles] = useState<{id: number, color: string}[]>([
    { id: 0, color: getRandomColor() },
    { id: 1, color: getRandomColor() }]);
  const [idCounter, setIdCounter] = useState<number>(2) // Ids of rectangles

  // Copies the color of rectangle thats clicked on
  const copyColor = (id: number) => {
    const rectangle = rectangles.find(rect => rect.id === id);

    if(rectangle){
      const color = rectangle.color;
      navigator.clipboard.writeText(color);
      alert("Copied the color: " + color);
    }
    else{
      alert("Failed to copy color");
    }
  }

  const refreshColor = (id: number) => {
    const newColor = getRandomColor();
    
    // Update the rectangles array with a new color for the matching id
    setRectangles(prevRectangles =>
      prevRectangles.map(rect =>
        rect.id === id ? { ...rect, color: newColor } : rect
      )
    );
  }

  // Deletes a rectangle from the array by filtering image with corresponding id
  const deleteRectangle = (id: number) => {
    setRectangles(prevRectangles => 
      prevRectangles.filter(rect => rect.id !== id)
    );
  }

  // Adds a rectangle to rectangles array
  const addRectangle = () => {
    setRectangles(prevRectangles => {
      const newId = idCounter;
      const newColor = getRandomColor();
      // Update rectangles list
      return [...prevRectangles, { id: newId, color: newColor }];
    });

    // Increment ID counter
    setIdCounter(prevCounter => prevCounter + 1);
  };

  const rectanglesList = rectangles.map(({id, color}) => {
    return (
      <div
        key={id} 
        style={{ backgroundColor: color }}   
        className="colorCard">
        <div onClick={() => copyColor(id)}><CopyButton /></div>
        <div onClick={() => refreshColor(id)}><RefreshButton /></div>
        <div onClick={() => deleteRectangle(id)}><DeleteButton /></div>
      </div>
    );
  });

  return (
    <>
      <div className='headerDiv'>
        <h1>Color picker</h1>
        <p>Pick a color that you like!</p>
        <LoginButton />
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
