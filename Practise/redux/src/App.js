import './App.css';
// import Home from './components/Home';
import Home from './container/HomeContainer';
import User from './User';
import HeaderContainer from './container/HeaderContainer';
function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <HeaderContainer/>
      <Home/>
    </div>
  );
}

export default App;
