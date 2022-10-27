import "./App.css";
import Header from "./Components/Header";
import Textarea from "./Components/Textarea";
import TodoLists from "./Components/TodoLists";

function App() {
  return (
    <div className="App">
      <Header />
      <Textarea />
      <TodoLists />
    </div>
  );
}

export default App;
