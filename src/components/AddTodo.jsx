import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { addTodo } from '../features/todos/todoSlice';

function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();    
    const editTodo = useSelector(state => state.editTodo);
    const todos = useSelector(state => state.todos);
    console.log(todos[editTodo]);
    function clickHandler(e) {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }
    return (
        <div className='form'>
            <form onSubmit={clickHandler}>
                <label>Add todo from here</label>
                <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default AddTodo;