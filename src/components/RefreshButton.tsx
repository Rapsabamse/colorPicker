import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh as icon } from '@fortawesome/free-solid-svg-icons';

const RefreshButton: React.FC = () => {
  return (
    <button className='refreshBtn'>
        <FontAwesomeIcon icon={icon} className='refreshIcon'/>
    </button>
  );
};

export default RefreshButton;