/* eslint-disable react/jsx-key */
import { useState } from "react";
import { StyledToDoList } from "./style";
import { Todo } from "../ToDo";
import { ToDoForm } from "../ToDoForm/index";
import { Search } from "../Search";
import { Filter } from "../Filter";

export const ToDolist = () => {
  const [toDos, setToDos] = useState([
    {
      id: 1,
      text: "criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  const removeToDo = (id) => {
    const newToDos = [...toDos];
    const filteredToDos = newToDos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setToDos(filteredToDos);
  };

  const [search, setSearch] = useState("");

  const completedToDo = (id) => {
    const newToDos = [...toDos];
    newToDos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setToDos(newToDos);
  };

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  return (
    <StyledToDoList className="app">
      <h1>Lista de Trefas</h1>

      <Search search={search} setSearch={setSearch} />

      <Filter filter={filter} setFilter={setFilter} />

      <div className="toDoList">
        {toDos
          .filter((todo) =>
            filter === "All"
              ? true
              : filter === "Completed"
              ? todo.isCompleted
              : !todo.isCompleted
          )
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .map((todos) => (
            <Todo
              key={todos.id}
              removeToDo={removeToDo}
              completedToDo={completedToDo}
              todo={todos}
            />
          ))}
      </div>
      <ToDoForm toDos={toDos} setToDos={setToDos} />
    </StyledToDoList>
  );
};
