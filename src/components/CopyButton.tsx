import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy as icon } from '@fortawesome/free-solid-svg-icons';

const CopyButton: React.FC = () => {
  return (
    <button className='copyBtn'>
        <FontAwesomeIcon icon={icon} className='copyIcon'/>
    </button>
  );
};

export default CopyButton;