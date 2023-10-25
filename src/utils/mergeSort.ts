import {
  getBars,
  sleep,
  setBarsColor,
  setTimer,
  sortFinished,
} from './functions';

export async function mergeSort(
  array: number[],
  left: number,
  right: number
) {
  if (left < right) {
    const mid = Math.floor((left + right) / 2);
    await mergeSort(array, left, mid);
    await mergeSort(array, mid + 1, right);
    await merge(array, left, mid, right);
  }
}

async function merge(
  array: number[],
  left: number,
  mid: number,
  right: number
) {
  const bars = getBars();
  const n1 = mid - left + 1;
  const n2 = right - mid;

  const leftArray = new Array<number>(n1);
  const rightArray = new Array<number>(n2);

  for (let i = 0; i < n1; i++) {
    leftArray[i] = array[left + i];
  }
  for (let j = 0; j < n2; j++) {
    rightArray[j] = array[mid + 1 + j];
  }

  let i = 0,
    j = 0,
    k = left;
  while (i < n1 && j < n2) {
    if (leftArray[i] <= rightArray[j]) {
      array[k] = leftArray[i];
      i++;
    } else {
      array[k] = rightArray[j];
      j++;
    }

    await visualizeMergeStep(bars, k, array[k]);
    k++;
  }

  while (i < n1) {
    array[k] = leftArray[i];
    await visualizeMergeStep(bars, k, array[k]);
    i++;
    k++;
  }

  while (j < n2) {
    array[k] = rightArray[j];
    await visualizeMergeStep(bars, k, array[k]);
    j++;
    k++;
  }
}

async function visualizeMergeStep(
  bars: HTMLCollectionOf<HTMLElement>,
  index: number,
  value: number
) {
  for (let k = 0; k < bars.length; k++) {
    if (k !== index) {
      bars[k].style.backgroundColor = '';
    }
  }

  bars[index].style.height = value * 2 + 'px';
  bars[index].style.backgroundColor = 'lightgreen';

  await sleep(10);
}

export async function performMergeSort(array: number[]) {
  const startTime = performance.now();
  await mergeSort(array, 0, array.length - 1);
  const endTime = performance.now();
  const time = endTime - startTime;
  setTimer(time);
  await sortFinished();
  setBarsColor('sorted');
}
