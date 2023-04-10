import { useState } from "react";
import Display from "./components/Display";
import TodoForm from "./components/TodoForm";
// import TodoForm from "./components/TodoForm";

function App() {
  // Create an empty array to handle are submitions
    const [todoList, setTodoList] = useState([])

  // Then we create a function that makes a copy of our list
  // With are new input then we set it
    const receiveTodo = (newTodos) => {
      setTodoList([...todoList, newTodos])
    }

  // To handle Delete Feature will remove them at the index
  // After we delete it will call the list up top and update it
    const deleteTodos = (deleteIdx) => {
      const filterTodos = todoList.filter((eachTodo, idx) => idx !== deleteIdx)
      setTodoList(filterTodos)
    }

    const updateTodoList = (idx, notCompleted) => {
    // Get the array index
    // Update that element isDone
    // Update the List 
      const tempList = [...todoList]
      tempList[idx].isDone = notCompleted
      setTodoList(tempList)
    }

  return (
    <div>
      <TodoForm receiveTodo={receiveTodo} />
      <Display 
        todoList={todoList} 
        updateTodoList={updateTodoList} 
        deleteTodos={deleteTodos}/>
    </div>
  );
}

export default App;
