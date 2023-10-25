import ArraySlider from '../components/ArraySlider';
import RandomizeButton from '../components/RandomizeButton';
import SelectAlgorithm from '../components/SelectAlgorithm';
import SortButton from '../components/SortButton';

const ButtonsContainer = () => {
  return (
    <>
      <div className="text-5xl text-center">Sort Visor</div>
      <div className="flex flex-col items-center py-10 justify-around">
        <ArraySlider />
        <div className="flex justify-center">
          <SelectAlgorithm />
        </div>
        <div className="mt-5 flex gap-10">
          <RandomizeButton />
          <SortButton />
        </div>
      </div>
    </>
  );
};

export default ButtonsContainer;
