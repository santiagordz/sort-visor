import {
  getBars,
  sleep,
  setBarsColor,
  setTimer,
  sortFinished,
} from './functions';

export async function quickSort(
  array: number[],
  low: number,
  high: number
) {
  if (low < high) {
    const pivotIndex = await partition(array, low, high);

    await quickSort(array, low, pivotIndex - 1);
    await quickSort(array, pivotIndex + 1, high);
  }
}

async function partition(
  array: number[],
  low: number,
  high: number
): Promise<number> {
  const pivot = array[high];
  const bars = getBars();
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (array[j] < pivot) {
      i++;

      // Swap array elements
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;

      // Visualize the swap
      await visualizeSwap(bars, i, j, array[i], array[j]);
    }
  }

  // Swap the pivot element with the element at (i + 1)
  const temp = array[i + 1];
  array[i + 1] = array[high];
  array[high] = temp;

  // Visualize the pivot placement
  await visualizeSwap(bars, i + 1, high, array[i + 1], array[high]);

  return i + 1;
}

async function visualizeSwap(
  bars: HTMLCollectionOf<HTMLElement>,
  index1: number,
  index2: number,
  value1: number,
  value2: number
) {
  for (let k = 0; k < bars.length; k++) {
    if (k !== index1 && k !== index2) {
      bars[k].style.backgroundColor = '';
    }
  }

  bars[index1].style.height = value1 * 2 + 'px';
  bars[index1].style.backgroundColor = 'lightgreen';
  bars[index2].style.height = value2 * 2 + 'px';
  bars[index2].style.backgroundColor = 'lightgreen';

  await sleep(10);
}

export async function performQuickSort(array: number[]) {
  const startTime = performance.now();
  await quickSort(array, 0, array.length - 1);
  const endTime = performance.now();
  const time = endTime - startTime;
  setTimer(time);
  await sortFinished();
  setBarsColor('sorted');
}
