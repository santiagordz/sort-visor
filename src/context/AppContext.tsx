import { createContext, FC, ReactNode, useState } from 'react';
import { createRandomArray } from '../utils/functions';

interface ContextProps {
  arraySize: number;
  setArraySize: (size: number) => void;
  algorithm: string | null;
  setAlgorithm: (algorithm: string) => void;
  array: number[];
  setArray: (array: number[]) => void;
  state: string;
  setState: (state: string) => void;
}

export const AppContext = createContext<ContextProps | null>(null);

export const AppContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [arraySize, setArraySize] = useState<number>(100);
  const [algorithm, setAlgorithm] = useState<string | null>(null);
  const initialArray = createRandomArray(100)!;
  const [array, setArray] = useState<number[]>(initialArray);
  const [state, setState] = useState<string>('unsorted');
  return (
    <AppContext.Provider
      value={{
        arraySize,
        setArraySize,
        algorithm,
        setAlgorithm,
        array,
        setArray,
        state,
        setState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
