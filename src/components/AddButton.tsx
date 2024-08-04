import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddButton: React.FC = () => {
  return (
    <button className='addItemBtn'>
      <FontAwesomeIcon icon={faPlus} />
    </button>
  );
};

export default AddButton;