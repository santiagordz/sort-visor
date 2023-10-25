const FREQ_MIN = 200;
const FREQ_MAX = 600;
const VOLUME = 0.025;

const audioContext = new window.AudioContext();

export function playNote(frequency: number, duration: number) {
  const oscilator = new OscillatorNode(audioContext);
  const gainNode = new GainNode(audioContext);
  oscilator.type = 'square';
  oscilator.frequency.value = frequency;
  gainNode.gain.value = VOLUME;
  oscilator.connect(gainNode).connect(audioContext.destination);
  oscilator.start();

  setTimeout(() => {
    oscilator.stop();
  }, duration);
}

export function setFrequency(i: HTMLElement, j: HTMLElement) {
  return Math.floor(
    ((getValue(i) + getValue(j)) / 200) * (FREQ_MAX - FREQ_MIN) +
      FREQ_MIN
  );
}

export function getValue(bar: HTMLElement) {
  return Number(bar.style.height.replace('px', ''));
}
