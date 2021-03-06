import styled from 'styled-components';

const TodoOutputClass = styled.section`
    width: clamp(40rem, 40vw, 60rem);
    margin: 0 auto;
    & div {
        /* border: 1px solid red; */
        display: flex;
        transition: 0.25s;
        color: var(--main-h1-clr);
        margin: 1.5rem;
        &:hover {
            transform: scale(1.1);
        }
        &:hover h2,
        &:hover button {
            box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.2);
        }
        &:hover h2{
            background: rgb(0, 255, 242);
        }
        & h2 {
            box-shadow: 0.2rem 0.2rem 1rem rgba(0, 0, 0, 0.2);
            flex: 1;
            background: var(--todo-list-bg-clr);
            border-radius: 0.3rem;
            /* height: clamp(3rem, 3.8rem, 4vw); */
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--main-h1-clr);
            font-weight: normal;
            font-size: clamp(1.8rem, 2rem, 3vw);
            position:relative;
            overflow:hidden;
            transition:0.25s;
            &:before{
                content:'';
                position:absolute;
                height:100%;
                width:0.3rem;
                background:rgb(255, 255, 255);
                left:0;
            }
        }
        & .edit-btn{
            background:var(--create-btn-bg-clr);
            &:hover{
                color:var(--create-btn-bg-clr);
            }
        }
        & button {
            margin-left: 1rem;
            box-shadow: 0.2rem 0.2rem 1rem rgba(0, 0, 0, 0.1);
            background: var(--delete-btn-clr);
            & svg {
                font-size: clamp(1.5rem, 2rem, 4vw);
            }
            &:hover {
                color: var(--delete-btn-hover-clr);
                background: var(--create-btn-hover-bg-clr);
            }
        }
    }
`;

export default TodoOutputClass;
