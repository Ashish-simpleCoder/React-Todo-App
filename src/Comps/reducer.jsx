export default function reducer(state, action) {
    if (action.type === 'handleChange') {
        return {
            ...state,
            todo: { ...state.todo, title: action.value },
        };
    }
    if (action.type === 'generateTodo') {
        let id = new Date().getTime().toString();
        let state_todo = { ...state.todo, id };
        if (!state.todo.title) {
            return { ...state };
        } else if (state.todo.title && state.todo.isEdit) {
            let new_todo_arr = state.todo_arr.map((element) => {
                if (element.id === state.todo.id) {
                    return {
                        ...element,
                        title: state.todo.title,
                    };
                } else {
                    return { ...element };
                }
            });
            return {
                ...state,
                todo: { ...state.todo, isEdit: false, title: '' },
                todo_arr: new_todo_arr,
            };
        }
        return {
            ...state,
            todo_arr: [state_todo, ...state.todo_arr],
        };
    }
    if (action.type === 'empty') {
        let name = '';
        return {
            ...state,
            todo: { ...state.todo, title: name },
        };
    }
    if (action.type === 'deleteTodo') {
        let new_todo = state.todo_arr.filter((todo) => {
            return todo.id !== action.id;
        });
        return {
            ...state,
            todo_arr: new_todo,
        };
    }
    if (action.type === 'toggleComplete') {
        let new_todo_arr = state.todo_arr.map((todo) => {
            if (todo.id === action.id) {
                return {
                    ...todo,
                    complete: !todo.complete,
                };
            } else {
                return { ...todo };
            }
        });
        return {
            ...state,
            todo_arr: new_todo_arr,
        };
    }
    if (action.type === 'editTodo') {
        let new_title = action.value;
        if (state.todo.title) {
            return {
                ...state,
                todo: { ...state.todo, title: '' ,isEdit:false},
            };
        }
        return {
            ...state,
            todo: {
                ...state.todo,
                title: new_title,
                isEdit: true,
                id: action.id,
            },
        };
    }
}