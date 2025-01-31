import logo from './platzi.webp';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearh';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreatedTodoButton } from './CreatedTodoButton';

function App() {
  return (
    <div className="App">
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </TodoList>

    
    </div>
  );
}
export default App;
