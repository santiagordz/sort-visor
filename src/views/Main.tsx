import Footer from '../components/Footer';
import BarsContainer from '../containers/BarsContainer';
import ButtonsContainer from '../containers/ButtonsContainer';
import InfoContainer from '../containers/InfoContainer';
import { AppContextProvider } from '../context/AppContext';

const Main = () => {
  return (
    <div className="h-screen bg-slate-200 px-20 py-20">
      <AppContextProvider>
        <ButtonsContainer />
        <InfoContainer />
        <BarsContainer />
      </AppContextProvider>
      <Footer />
    </div>
  );
};

export default Main;
