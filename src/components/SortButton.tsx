import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { performBubbleSort } from '../utils/bubbleSort';
import { performQuickSort } from '../utils/quickSort';
import { performMergeSort } from '../utils/mergeSort';
import { performInsertionSort } from '../utils/insertionSort';

const SortButton = () => {
  const appContext = useContext(AppContext);
  const algorithm = appContext?.algorithm;
  const array = appContext?.array;

  async function handleClick() {
    switch (algorithm) {
      case 'bubble':
        try {
          appContext?.setState('sorting');
          await performBubbleSort(array!);
          appContext?.setState('sorted');
          break;
        } catch {
          console.log('error');
          break;
        }
      case 'quick':
        try {
          appContext?.setState('sorting');
          await performQuickSort(array!);
          appContext?.setState('sorted');
          break;
        } catch {
          console.log('error');
          break;
        }
      case 'merge':
        try {
          appContext?.setState('sorting');
          await performMergeSort(array!);
          appContext?.setState('sorted');
          break;
        } catch {
          console.log('error');
          break;
        }
      case 'insertion':
        try {
          appContext?.setState('sorting');
          await performInsertionSort(array!);
          appContext?.setState('sorted');
          break;
        } catch {
          console.log('error');
          break;
        }
      default:
        break;
    }
  }

  if (
    algorithm == null ||
    appContext?.state === 'sorted' ||
    appContext?.state === 'sorting'
  ) {
    return (
      <button className="p-2 m-2 rounded-lg text-slate-100 bg-slate-400 cursor-not-allowed">
        Sort Button
      </button>
    );
  } else {
    return (
      <button
        className="p-2 m-2 rounded-lg text-slate-100 bg-slate-500 hover:bg-slate-700"
        onClick={handleClick}
      >
        Sort Button
      </button>
    );
  }
};

export default SortButton;
