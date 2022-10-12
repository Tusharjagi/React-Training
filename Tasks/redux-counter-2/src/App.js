import "./App.css";
import Header from "./Components/Header";
import Increment from "./Components/Buttons/Increment";
import Decrement from "./Components/Buttons/Decrement";
import Reset from "./Components/Buttons/Reset";

function App() {
  return (
    <div className="App">
      <Header />
      <Increment />
      <Decrement />
      <Reset />
    </div>
  );
}

export default App;
