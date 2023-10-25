import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function InfoContainer() {
  const appContext = useContext(AppContext);
  const algorithm = appContext?.algorithm;
  return (
    <div className="w-full h-20 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold first-letter:capitalize">
        {algorithm ? algorithm : 'Select an algorithm'}
      </h1>
      <div className="text-xl" id="timer">
        Time Elapsed : n / a
      </div>
    </div>
  );
}
