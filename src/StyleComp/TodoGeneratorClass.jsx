import styled from 'styled-components';

const TodoGeneratorClass = styled.section`
    width: clamp(30rem, 60rem, 60vw);
    margin: 3rem auto;
    display: flex;
    align-items: center;
    justify-content: center;

    & label {
        visibility:hidden;
    }
    & input {
        background: var(--input-bg-clr);
        font-size: clamp(1.6rem, 2.5rem, 2.8vw);
        flex: 1;
        font-weight: 200;
        letter-spacing: 0.1rem;
        text-align: center;
        border-radius: 0.3rem;
        padding: 0.2rem 0;
        height: clamp(3rem, 3.8rem, 4vw);
        transition: 0.25s;
        &:focus-within {
            background: var(--focused-input-bg-clr);
            box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.5);
        }
    }
    & button {
        background: var(--create-btn-bg-clr);
        height: clamp(3rem, 3.8rem, 4vw);
        margin-left: 0.5rem;
        transition: 0.25s;
        box-shadow: 0.2rem 0.2rem 1rem rgba(0, 0, 0, 0.1);
        & svg {
            font-size: clamp(2rem, 3rem, 4vw);
        }
        &:hover {
            transform: scale(1.1);
            box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.2);
            color: var(--create-btn-bg-clr);
            background: var(--create-btn-hover-bg-clr);
        }
    }
`;

export default TodoGeneratorClass;
