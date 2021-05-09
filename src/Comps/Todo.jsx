import React, { useEffect, useReducer, useRef } from 'react';
import Button from '@material-ui/core/Button';
import Add from '@material-ui/icons/Add';
import Delete from '@material-ui/icons/Delete';
// import Tooltip from '@material-ui/core/Tooltip';
// import CheckBox from '@material-ui/core/Checkbox';
// import CheckBox from '@material-ui/icons/Check';

import reducer from './reducer';
import TodoGeneratorClass from '../StyleComp/TodoGeneratorClass';
import TodoOutputClass from '../StyleComp/TodoOutputClass';
import { Edit } from '@material-ui/icons';

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

    const todo_text = useRef(null);

    return (
        <>
            <header>
                <h1>Simple Todo App</h1>
            </header>
            <main>
                <TodoGeneratorClass>
                    <label
                        htmlFor="input"
                        style={{
                            visibility: 'hidden',
                            width: '0',
                            height: '0',
                        }}
                    >
                        input
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="input"
                        value={state.todo.title}
                        autoComplete="off"
                        placeholder="make a new todo... ✏️"
                        maxLength='30'
                        onChange={(e) =>
                            dispatch({
                                type: 'handleChange',
                                value: e.target.value,
                            })
                        }
                    />
                    {state.todo.isEdit ? (
                        <Button
                            title="save changes"
                            onClick={() => dispatch({ type: 'generateTodo' })}
                        >
                            <Edit />
                        </Button>
                    ) : (
                        <Button
                            title="create todo"
                            onClick={() => {
                                dispatch({ type: 'generateTodo' });
                                dispatch({ type: 'empty' });
                            }}
                        >
                            <Add />
                        </Button>
                    )}
                </TodoGeneratorClass>
                <TodoOutputClass ref={todo_text}>
                    {state.todo_arr.map((list) => {
                        return (
                            <div
                                key={list.id}
                                style={{
                                    textDecoration: list.complete
                                        ? 'line-through'
                                        : null,
                                }}
                            >
                                <h2
                                    onClick={(e) => {
                                        console.log(e);
                                        dispatch({
                                            type: 'toggleComplete',
                                            id: list.id,
                                        });
                                    }}
                                >
                                    {list.title}
                                </h2>
                                <Button
                                className='edit-btn'
                                    title="edit todo"
                                    onClick={() =>
                                        dispatch({
                                            type: 'editTodo',
                                            id: list.id,
                                            value: list.title,
                                        })
                                    }
                                >
                                    <Edit />
                                </Button>
                                <Button
                                    title="delete todo"
                                    onClick={() =>
                                        dispatch({
                                            type: 'deleteTodo',
                                            id: list.id,
                                        })
                                    }
                                >
                                    <Delete />
                                </Button>
                            </div>
                        );
                    })}
                </TodoOutputClass>
            </main>
        </>
    );
};

export default Todo;
