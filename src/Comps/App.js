import React, { lazy, Suspense } from 'react';
// import Todo from './Todo';
const Todo = lazy(() => import('./Todo'));
const App = () => {
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <Todo />
        </Suspense>
    );
};

export default App;
