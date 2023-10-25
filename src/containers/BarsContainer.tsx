import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { setBarsColor } from '../utils/functions';

const BarsContainer = () => {
  setBarsColor('unsorted');
  const appContext = useContext(AppContext);
  const array = appContext?.array;
  return (
    <>
      <div className="flex flex-row items-end h-[300px] justify-between">
        {array!.map((length, index) => (
          <div
            key={index}
            className="bg-blue-500 bar"
            style={{
              height: `${2 * length}px`,
              width: '20px',
            }}
          />
        ))}
      </div>
    </>
  );
};

export default BarsContainer;
