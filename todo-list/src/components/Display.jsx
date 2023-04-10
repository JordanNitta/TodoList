import React from 'react'
import './style.css'
const Display = ({ todoList, deleteTodos, updateTodoList }) => {

    return (
        <div>
            {/* Maping my form and display it */}
            {todoList.map((eachTodo, idx) => (
                <table key={idx} className='display'>
                    <tr style={{ textDecoration: eachTodo.isDone ? 'line-through' : 'none' }}>
                        <td>
                            <input
                                type="checkbox"
                                checked={eachTodo.isDone}
                                onChange={(e) => updateTodoList(idx, e.target.checked)}
                            />
                        </td>
                        <td>{eachTodo.toDo}</td>
                        <td>
                            <button onClick={() => deleteTodos(idx)}>Delete</button>
                        </td>
                    </tr>
                </table>
            ))}
        </div>
    )
}

export default Display
