import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faCopy, faTrash, faRefresh } from '@fortawesome/free-solid-svg-icons';

export const ChangeColorButton: React.FC = () => {
    return (
      <button className='cardBtn' id='changeColorBtn'>
        <FontAwesomeIcon icon={faPalette} />
      </button>
    );
};

export const DeleteButton: React.FC = () => {
    return (
      <button className='cardBtn' id='deleteBtn'>
          <FontAwesomeIcon icon={faTrash} />
      </button>
    );
  };

export const CopyButton: React.FC = () => {
    return (
        <button className='cardBtn' id='copyBtn'>
            <FontAwesomeIcon icon={faCopy} className='copyIcon'/>
        </button>
    );
};

export const RefreshButton: React.FC = () => {
    return (
      <button className='cardBtn' id='refreshBtn'>
          <FontAwesomeIcon icon={faRefresh}/>
      </button>
    );
};
