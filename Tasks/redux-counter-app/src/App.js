import './App.css';
import Count from './components/Count';
import DecrementButton from './components/DecrementButton';
import Header from './components/Header';
import IncrementButton from './components/IncrementButton';

function App() {
  return (
    <>
      <Header/>
      <Count/>
      <IncrementButton/>
      <DecrementButton/>
    </>
  );
}

export default App;
