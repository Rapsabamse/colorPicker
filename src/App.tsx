import { useState } from 'react'
import './App.css'

import { Sketch } from '@uiw/react-color';

import { useCardList } from './components/colorCard/colorCard.tsx';

import {  
  DeleteButton, 
  RefreshButton, 
  CopyButton, 
  ChangeColorButton 
} from './components/colorCard/buttons/cardButtons.tsx';

import AddButton from './components/AddButton.tsx';
import LoginButton from './components/LoginButton.tsx';


function App() {
  const [activePicker, setActivePicker] = useState<number | null>(null);; // Color pickers
  
  // Import the cardList with all its functions
  const { cards, addCard, copyColor, refreshColor, deleteRectangle, colorChange } = useCardList();

  // Set a specific color picker to active, if active picker is selected, hide picker
  const showColorPicker = (id: number) => {
    if(activePicker === id || id != -1){
      setActivePicker(id === activePicker ? null : id);
    } else{
      setActivePicker(null);
    }
  };

  return (
    <>
      <div className='headerDiv'>
        <h1>Color picker</h1>
        <p>Pick a color that you like!</p>
        <LoginButton />
      </div>

      <div>
        <div className="grid-container">
          
        {cards.map(({ id, color }) => (
          <div
            key={id}
            style={{ backgroundColor: color }}
            className="colorCard">

            <div onClick={() => copyColor(id)}><CopyButton /></div>
            <div onClick={() => refreshColor(id)}><RefreshButton /></div>
            <div onClick={() => deleteRectangle(id)}><DeleteButton /></div>
            <div onClick={() => showColorPicker(id)}><ChangeColorButton /></div>

            {activePicker === id && (
              <Sketch
                className='colorPicker'
                color={color}
                onChange={(color) => colorChange(id, color)}
              />
            )}
          </div>
        ))}

          {/* Show the add rectangle button */}
          <div className='addRectangle' onClick={addCard}><AddButton /></div>
        </div>
      </div>
    </>
  )
}

export default App
