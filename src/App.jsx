import TodoList from './components/TodoList/TodoList'
import AddTodo from './components/AddTodo/AddTodo.jsx'
import TodoContext from './context/TodoContext.js';
import { useReducer } from 'react';
import todoReducer from './reducers/todoReducer';
import TodoDispatchContext from './context/TodoDispatchContext.js';

function App() {
  const [list, dispatch] = useReducer(todoReducer, []);

  return(
   <TodoContext.Provider value={{list}}>
    <TodoDispatchContext.Provider value={{dispatch}}>
     <AddTodo />
     <TodoList />
     </TodoDispatchContext.Provider>
   </TodoContext.Provider>
  )
}

export default App;
