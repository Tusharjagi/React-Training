import './App.css';
import Header from './Components/Header';
import SubmitButton from './Components/SubmitButton';
import Textarea from './Components/Textarea';
import TodoId from './Components/TodoIds';
import TodoLists from './Components/TodoLists';

function App() {
  return (
    <div className="App">
      <Header/>
        <Textarea/>
        <SubmitButton/>
        <TodoId/>
        <TodoLists/>
    </div>
  );
}

export default App;
