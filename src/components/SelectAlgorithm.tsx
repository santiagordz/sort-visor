import { useState, useContext } from 'react';
import { createRandomArray } from '../utils/functions';
import { AppContext } from '../context/AppContext';

const SelectAlgorithm = () => {
  const appContext = useContext(AppContext);
  const [algorithm, setAlgorithm] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newAlgorithm = e.target.value;
    setAlgorithm(newAlgorithm);
    appContext?.setAlgorithm(newAlgorithm);

    if (appContext?.state == 'sorted') {
      appContext?.setArray(createRandomArray(appContext?.arraySize)!);
      appContext?.setState('unsorted');
      document.getElementById('timer')!.innerHTML =
        'Time Elapsed : n / a';
    }
  };

  return (
    <div className="w-fit">
      <select
        disabled={appContext?.state == 'sorting'}
        value={algorithm}
        onChange={handleChange}
        className="block py-3 px-4 border border-gray-300 bg-white rounded-lg leading-tight focus:outline-none focus:border-blue-500 focus:ring"
      >
        <option selected disabled value={''}>
          Algorithm
        </option>
        <option value={'bubble'}>Bubble Sort</option>
        <option value={'quick'}>Quick Sort</option>
        <option value={'merge'}>Merge Sort</option>
        <option value={'insertion'}>Insertion Sort</option>
      </select>
    </div>
  );
};

export default SelectAlgorithm;
