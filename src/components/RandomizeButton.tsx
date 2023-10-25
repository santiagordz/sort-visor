import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { createRandomArray } from '../utils/functions';

const RandomizeButton = () => {
  const appContext = useContext(AppContext);

  const handleClick = () => {
    const array = createRandomArray(appContext?.arraySize!)!;
    appContext?.setArray(array);
    appContext?.setState('unsorted');
    document.getElementById('timer')!.innerHTML =
      'Time Elapsed : n / a';
  };
  if (appContext?.state !== 'sorting') {
    return (
      <button
        className="p-2 m-2 rounded-lg text-slate-100 bg-slate-500 hover:bg-slate-700"
        onClick={handleClick}
      >
        Randomize
      </button>
    );
  } else {
    return (
      <button
        disabled
        className="p-2 m-2 rounded-lg text-slate-100 bg-slate-400 cursor-not-allowed"
        onClick={handleClick}
      >
        Randomize
      </button>
    );
  }
};

export default RandomizeButton;
