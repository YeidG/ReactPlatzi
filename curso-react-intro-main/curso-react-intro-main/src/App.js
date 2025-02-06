import './App.css';
import React from 'react';
import AppUI from './Appui';
import { TodoProvider } from './components/todoContext';





function App() {
 
  

  return (
    <TodoProvider>
    <AppUI />
  </TodoProvider>
   
  
  );
}
export default App;
