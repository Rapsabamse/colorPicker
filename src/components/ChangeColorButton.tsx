import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette as icon } from '@fortawesome/free-solid-svg-icons';

const ChangeColorButton: React.FC = () => {
  return (
    <button className='cardBtn' id='changeColorBtn'>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default ChangeColorButton;