import { useState } from 'react'
import './App.css'

import { Sketch, ColorResult } from '@uiw/react-color';
import { getRandomColor } from './components/utils/colorUtils.tsx';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import AddButton from './components/colorCard/buttons/AddButton';
import LoginButton from './components/colorCard/buttons/LoginButton';
import RefreshButton from './components/colorCard/buttons/RefreshButton';
import CopyButton from './components/colorCard/buttons/CopyButton.tsx';
import DeleteButton from './components/colorCard/buttons/DeleteButton.tsx';
import ChangeColorButton from './components/colorCard/buttons/ChangeColorButton.tsx';

// Add fas icons to the library
library.add(fas);

function App() {
  // Variables used to create a number of rectangles, then store them in rectanglesList.
  const [rectangles, setRectangles] = useState<{id: number, color: string}[]>([
    { id: 0, color: getRandomColor() },
    { id: 1, color: getRandomColor() }]);
  const [idCounter, setIdCounter] = useState<number>(2) // Ids of rectangles (set standard to nbr of initial cards)
  const [activePicker, setActivePicker] = useState<number | null>(null);; // Color pickers

  //Change the color of a card to be the same as its colorpicker
  const handleColorChange = (id: number, color: ColorResult) => {
    setRectangles((prevRectangles) =>
      prevRectangles.map((rect) =>
        rect.id === id ? { ...rect, color: color.hex } : rect
      )
    );
  };

  // Set a specific color picker to active, if active picker is selected, hide picker
  const showColorPicker = (id: number) => {
    if(activePicker === id || id != -1){
      setActivePicker(id === activePicker ? null : id);
    } else{
      setActivePicker(null);
    }
  };

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

  // Get a new random color for a card
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
    console.log(idCounter)
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

        <div onClick={() => copyColor(id)}>< CopyButton /></div>
        <div onClick={() => refreshColor(id)}>< RefreshButton /></div>
        <div onClick={() => deleteRectangle(id)}>< DeleteButton /></div>
        <div onClick={() => showColorPicker(id)}>< ChangeColorButton /></div>

        {/* If activepicker  is === id of specific card, render the colorpicker */}
        {activePicker === id && (
          <div>
            <Sketch
              className='colorPicker'
              color={color}
              onChange={(color) => handleColorChange(id, color)}
            />
          </div>
        )}

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
