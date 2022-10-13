import "./App.css";
import Calculate from "./Components/Calculate";
import Display from "./Components/Display";
import Header from "./Components/Header";
import Eight from "./Components/Numbers/Eight";
import Five from "./Components/Numbers/Five";
import Four from "./Components/Numbers/Four";
import Nine from "./Components/Numbers/Nine";
import One from "./Components/Numbers/One";
import Seven from "./Components/Numbers/Seven";
import Six from "./Components/Numbers/Six";
import Three from "./Components/Numbers/Three";
import Two from "./Components/Numbers/Two";
import Zero from "./Components/Numbers/Zero";
import Minus from "./Components/Operators/Minus";
import Plus from "./Components/Operators/Plus";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Display />
        <One />
        <Two />
        <Three />
        <Four />
        <Five />
        <Six />
        <Seven />
        <Eight />
        <Nine />
        <Minus />
        <Zero />
        <Plus />
      </div>
      <Calculate />
    </>
  );
}

export default App;
