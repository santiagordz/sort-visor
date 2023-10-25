import { useState, ChangeEvent, useContext } from 'react';
import { createRandomArray } from '../utils/functions';
import { AppContext } from '../context/AppContext';

const ArraySlider = () => {
  const appContext = useContext(AppContext);
  const [arraySize, setArraySize] = useState<number>(100);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newSize = Number(e.target.value);
    setArraySize(newSize);
    appContext?.setArraySize(newSize);
    appContext?.setArray(createRandomArray(newSize)!);
    if (appContext?.state === 'sorted') {
      appContext?.setState('unsorted');
      document.getElementById('timer')!.innerHTML =
        'Time Elapsed : n / a';
    }
  };

  if (appContext?.state !== 'sorting') {
    return (
      <div className="flex flex-col items-center m-5">
        <label htmlFor="slider" className="text-base">
          Array Size: {arraySize}
        </label>
        <input
          id="slider"
          type="range"
          min={10}
          max={200}
          step={5}
          value={arraySize}
          onChange={handleChange}
        />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center m-5">
        <label htmlFor="slider" className="text-base">
          Array Size: {arraySize}
        </label>
        <input
          disabled
          id="slider"
          type="range"
          min={10}
          max={200}
          step={5}
          value={arraySize}
          onChange={handleChange}
        />
      </div>
    );
  }
};

export default ArraySlider;
