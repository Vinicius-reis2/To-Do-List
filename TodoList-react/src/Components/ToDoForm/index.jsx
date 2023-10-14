import { useState } from "react";
import { StyledForm } from "./style";
import { v4 as uuidv4 } from 'uuid';

export const ToDoForm = ({toDos, setToDos}) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) {
      return alert("porfavor preencha os campos");
    }
    addToDo(value, category)
    setValue("");
    setCategory("");
  };

  const addToDo = (text, category) => {
   const newToDos = [
      ...toDos,{
         id: uuidv4(),
         text,
         category,
         isCompleted: false
      }
   ]
   setToDos(newToDos)
  };

  return (
    <div>
      <h2 className="h2Title">Criar Tarefa:</h2>
      <StyledForm onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          placeholder="Digite o titulo da tarefa"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoría</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button className="buttonSubmit" type="submit">Criar tarefa</button>
      </StyledForm>
    </div>
  );
};
