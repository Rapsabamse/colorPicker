import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh as icon } from '@fortawesome/free-solid-svg-icons';

const RefreshButton: React.FC = () => {
  return (
    <button className='cardBtn' id='refreshBtn'>
        <FontAwesomeIcon icon={icon}/>
    </button>
  );
};

export default RefreshButton;