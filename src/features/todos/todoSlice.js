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
            console.log(state.todos, 1);
            if(typeof action.payload === 'string') {
                console.log(state.todos, 2);
                state.editTodo.id =  action.payload;
            } else {
                console.log(state.todos, 3);
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