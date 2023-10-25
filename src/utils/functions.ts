export function randomNum(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function createRandomArray(
  arraySize: number | undefined
): number[] | undefined {
  const arr: number[] = [];
  for (let i = 0; i < arraySize!; i++) {
    arr.push(randomNum(1, 100));
  }
  return arr;
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function setBarsColor(flag: string) {
  const bars = getBars();
  switch (flag) {
    case 'sorted':
      for (let i = 0; i < bars.length; i++) {
        bars[i].style.backgroundColor = 'lightgreen';
      }
      break;
    case 'unsorted':
      for (let i = 0; i < bars.length; i++) {
        bars[i].style.backgroundColor = 'rgb(59 130 246)';
      }
      break;
  }
}

export async function sortFinished() {
  const bars = getBars();
  for (let i = 0; i < bars.length; i++) {
    bars[i].style.backgroundColor = 'rgb(59 130 246)';
  }
  for (let i = 0; i < bars.length; i++) {
    bars[i].style.backgroundColor = 'lightgreen';
    await sleep(20);
  }
}

export function getBars() {
  const bars = document.getElementsByClassName(
    'bar'
  ) as HTMLCollectionOf<HTMLElement>;
  return bars;
}

export function setTimer(time: number) {
  const timer = document.getElementById('timer') as HTMLSpanElement;
  timer.innerHTML = `Time: ${time.toFixed(2)} ms`;
}
