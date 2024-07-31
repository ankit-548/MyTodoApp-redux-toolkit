import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: 'Hello world'}],
    editTodo: {}
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
            if(typeof action.payload === 'string') {
                state.editTodo.id =  action.payload;
            } else {
                state.editTodo.id = {};
                const index = state.todos.findIndex(todo => (todo.id === action.payload.id))
                if(index!==-1) {
                    state.todos[index].text = action.payload.text;
                }
            }
        }
    }
});

export const {addTodo, removeTodo, updateTodo} = toDoSlice.actions;

export default toDoSlice.reducer;