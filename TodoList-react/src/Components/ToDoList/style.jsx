import styled from "styled-components";

export const StyledToDoList = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background-color: #172554;
  padding: 1.25rem 1.875rem;

  .toDoList {
    margin-bottom: 20px;
    max-height: 400px;
    overflow-y: scroll;
    padding-bottom: 20px;
    border-bottom: 1px solid white;
  }

  .todo{
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,.1);
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    text-align: center;
    margin-bottom: 10px;
    font-size: 1.2rem;
    font-weight: 600;
    color: #fff;
  }

  h2 {
    margin-bottom: 10px;
    margin-top: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
    color: #fff;
  }

  p {
    margin: 10px 0;
  }

  input {
    box-sizing: border-box;
  }

  button {
    background-color: #f5f5f5;
    font-size: 500;
    color: #fff;
    padding: 0.3125rem 0.625rem;
    margin-right: 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    opacity: 0.8;
    transition: 0.4s;
  }

  button:hover {
    opacity: 1;
    transition: 0.4s;
  }

  .buttonSubmit{
    color: black;
  }

  .complete {
    background-color: #5cb85c;
  }

  .remove {
    background-color: #d9534f;
  }
`;
