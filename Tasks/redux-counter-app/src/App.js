import './App.css';
import Count from './components/Count';
import DecrementButton from './components/Buttons/DecrementButton';
import Header from './components/Header';
import IncrementButton from './components/Buttons/IncrementButton';
import ResetButton from './components/Buttons/ResetButton';
// import store from './components/Store';

function App() {
  return (
    <>
      <Header/>
      <Count/>
      <IncrementButton/>
      <DecrementButton/>
      <ResetButton/>
    </>
  );
}

export default App;
