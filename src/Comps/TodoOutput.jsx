import React from 'react';
import Button from '@material-ui/core/Button';
import Delete from '@material-ui/icons/Delete';
import { Edit } from '@material-ui/icons';
import TodoOutputClass from '../StyleComp/TodoOutputClass';

const TodoOutput = (props) => {
    const { todo_arr, dispatch } = props;
    return (
        <TodoOutputClass>
            {todo_arr.map((list) => {
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
                            style={{
                                background: list.complete
                                    ? 'rgb(158, 10, 47)'
                                    : null,
                            }}
                            onClick={(e) => {
                                // console.log(e);
                                dispatch({
                                    type: 'toggleComplete',
                                    id: list.id,
                                });
                            }}
                        >
                            {list.title}
                        </h2>
                        <Button
                            style={{
                                background: list.complete
                                    ? 'rgb(158,10,47)'
                                    : null,
                            }}
                            className="edit-btn"
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
                            style={{
                                background: list.complete
                                    ? 'rgb(158,10,47)'
                                    : null,
                            }}
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
    );
};

export default TodoOutput;
