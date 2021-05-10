import React, { useEffect, useReducer } from 'react';
import reducer from './reducer';
import TodoOutput from './TodoOutput';
import TodoGenerator from './TodoGenerator';
import Header from './Header';

function SAVE_TO_LOCAL_STORAGE() {
    let todos;
    if (localStorage.getItem('todo')) {
        return (todos = JSON.parse(localStorage.getItem('todo')));
    } else {
        return (todos = []);
    }
}

const default_state = {
    todo: {
        id: '',
        title: '',
        complete: false,
        isEdit: false,
    },
    todo_arr: SAVE_TO_LOCAL_STORAGE(),
};
const Todo = () => {
    const [state, dispatch] = useReducer(reducer, default_state);

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(state.todo_arr));
    }, [state.todo_arr]);

    return (
        <>
            <Header />
            <main>
                <TodoGenerator todo={state.todo} dispatch={dispatch} todo_arr={state.todo_arr}/>
                <TodoOutput todo_arr={state.todo_arr} dispatch={dispatch} />
            </main>
        </>
    );
};
export default Todo;
