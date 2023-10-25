import {
  getBars,
  sleep,
  setBarsColor,
  setTimer,
  sortFinished,
} from './functions';

export async function bubbleSort(array: number[]) {
  const bars = getBars();
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        for (let k = 0; k < bars.length; k++) {
          if (k !== j && k !== j + 1) {
            bars[k].style.backgroundColor = '';
          }
        }
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        bars[j].style.height = array[j] * 2 + 'px';
        bars[j].style.backgroundColor = 'lightgreen';
        bars[j + 1].style.height = array[j + 1] * 2 + 'px';
        bars[j + 1].style.backgroundColor = 'lightgreen';
        await sleep(10);
      }
    }
  }
}

export async function performBubbleSort(array: number[]) {
  const startTime = performance.now();
  await bubbleSort(array);
  const endTime = performance.now();
  const time = endTime - startTime;
  setTimer(time);
  await sortFinished();
  setBarsColor('sorted');
}
