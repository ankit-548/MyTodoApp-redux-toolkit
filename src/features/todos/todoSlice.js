import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: 'Hello world'}]
};

export const toDoSlice = createSlice({
    name: 'Todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => (
                todo.id !== action.payload
            ))
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map(todo => {
               if(todo.id === action.payload.id)  {
                todo.text = action.payload.text;
               }
               return todo;
            })
        }
    }
});

export const {addTodo, removeTodo, updateTodo} = toDoSlice.actions;

export default toDoSlice.reducer;