import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { addTodo, updateTodo } from '../features/todos/todoSlice';

function AddTodo() {
    const [input, setInput] = useState('');
    const [update, setUpdate] = useState({id:'', text:''});
    const dispatch = useDispatch();    
    const editTodo = useSelector(state => state.editTodo);
    const todos = useSelector(state => state.todos);
    var todo = todos.find( data => data.id === editTodo.id);
    function clickHandler(e) {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }
    function updateHandler(e) {
        e.preventDefault();
        dispatch(updateTodo(update));
        setInput('');
        setUpdate({id:'', text:''});
    }
    if(todo) {
        return (
            <div className='form'>
                <form onSubmit={updateHandler}>
                    <label>Edit todo from here</label>
                    <input type="text" value={update.text!=='' ? update.text : todo.text} onChange={e => setUpdate({id:todo.id, text:e.target.value})}/>
                    <button id="btn1" type="submit">Update</button>
                </form>
            </div>
        );        
    } else {
        return (
            <div className='form'>
                <form onSubmit={clickHandler}>

                    <label>Add todo from here</label>
                    <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
                    <button id="btn2" type="submit">Submit</button>
                </form>
            </div>
        );
    }
}
export default AddTodo;