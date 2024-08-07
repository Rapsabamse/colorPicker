import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash as icon } from '@fortawesome/free-solid-svg-icons';

const LoginButton: React.FC = () => {
  return (
    <button className='cardBtn' id='deleteBtn'>
        <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default LoginButton;