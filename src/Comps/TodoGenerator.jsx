import React from 'react';
import Button from '@material-ui/core/Button';
import Add from '@material-ui/icons/Add';
import { Edit } from '@material-ui/icons';
import TodoGeneratorClass from '../StyleComp/TodoGeneratorClass';

const TodoGenerator = (props) => {
    const { todo, dispatch, todo_arr } = props;
    return (
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
                value={todo.title}
                autoComplete="off"
                placeholder="make a new todo... ✏️"
                maxLength="30"
                onChange={(e) =>
                    dispatch({
                        type: 'handleChange',
                        value: e.target.value,
                    })
                }
            />
            {todo.isEdit ? (
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
            {/* <h2> todos left : {todo_arr.filter((todo) => !todo.complete).length}</h2> */}
        </TodoGeneratorClass>
    );
};

export default TodoGenerator;
