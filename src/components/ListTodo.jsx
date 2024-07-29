import { useDispatch, useSelector } from "react-redux";
import {removeTodo, updateTodo} from '../features/todos/todoSlice'

export default function ListTodo() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    // function handleEdit()
    return (
        <div className="list">
        <h3>List of todos</h3>
        <ul className="ul">
            {todos.map(todo => (
                <li key={todo.id}>
                    {todo.text} 
                    <button id="delete" onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                    <button id="edit" onClick={() => dispatch(updateTodo(todo.id, todo.text))}>Edit</button>
                </li>
            ))}
        </ul>
        </div>
    );
}