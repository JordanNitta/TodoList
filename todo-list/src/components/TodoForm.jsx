import { useState } from 'react'


const TodoForm = ( {receiveTodo} ) => {
    const [toDo, setTodo] = useState("")


    const handleTodoForm = (e) => {
        e.preventDefault()
        const toDos = { toDo, isDone: false };
        receiveTodo(toDos);
        setTodo("")
    }

    const handleTodos = (e) => {
        setTodo(e.target.value)
    }


    return (
        <div>
            <h2>To Do List:</h2>
            <form onSubmit={handleTodoForm} className='form'>
                
                <input type="text" 
                    name='todoForm' 
                    value={toDo}
                    onChange={handleTodos} />
                
                <button type='submit'>Add</button>

            </form>
        </div>
    )
}

export default TodoForm
