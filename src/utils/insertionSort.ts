import {
  getBars,
  sleep,
  setBarsColor,
  setTimer,
  sortFinished,
} from './functions';

export async function insertionSort(array: number[]) {
  const bars = getBars();
  for (let i = 1; i < array.length; i++) {
    const key = array[i];
    let j = i - 1;

    bars[i].style.backgroundColor = 'lightblue';

    while (j >= 0 && array[j] > key) {
      // Move elements to the right to make space for the key
      array[j + 1] = array[j];

      // Update the visualization
      bars[j + 1].style.height = array[j + 1] * 2 + 'px';
      bars[j + 1].style.backgroundColor = 'lightgreen';

      j--;

      await sleep(10);
    }

    // Place the key in its correct position
    array[j + 1] = key;
    bars[j + 1].style.height = key * 2 + 'px';
    bars[j + 1].style.backgroundColor = 'lightgreen';

    // Restore the original color of the bars
    for (let k = 0; k < bars.length; k++) {
      if (k !== i && k !== j + 1) {
        bars[k].style.backgroundColor = '';
      }
    }
  }
}

export async function performInsertionSort(array: number[]) {
  const startTime = performance.now();
  await insertionSort(array);
  const endTime = performance.now();
  const time = endTime - startTime;
  setTimer(time);
  await sortFinished();
  setBarsColor('sorted');
}
