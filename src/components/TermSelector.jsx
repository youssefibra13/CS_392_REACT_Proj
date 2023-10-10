import React from 'react';

const TermSelector = ({ selectedTerm, onSelectTerm }) => {
  return (
    <div>
      <button
        className={`btn ${selectedTerm === 'Fall' ? 'btn-primary' : 'btn-secondary'}`}
        onClick={() => onSelectTerm('Fall')}
      >
        Fall
      </button>
      <button
        className={`btn ${selectedTerm === 'Winter' ? 'btn-primary' : 'btn-secondary'}`}
        onClick={() => onSelectTerm('Winter')}
      >
        Winter
      </button>
      <button
        className={`btn ${selectedTerm === 'Spring' ? 'btn-primary' : 'btn-secondary'}`}
        onClick={() => onSelectTerm('Spring')}
      >
        Spring
      </button>
    </div>
  );
};

export default TermSelector;
