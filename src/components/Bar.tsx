import React from 'react';

interface BarProps {
  length: number;
}

const Bar: React.FC<BarProps> = ({ length }) => {
  return (
    <div
      style={{
        height: `${100 * length}px`,
        width: '10px',
        backgroundColor: 'blue',
      }}
    />
  );
};

export default Bar;
