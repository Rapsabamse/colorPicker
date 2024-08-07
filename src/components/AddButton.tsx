import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus as icon } from '@fortawesome/free-solid-svg-icons';

const AddButton: React.FC = () => {
  return (
    <button className='addItemBtn'>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default AddButton;