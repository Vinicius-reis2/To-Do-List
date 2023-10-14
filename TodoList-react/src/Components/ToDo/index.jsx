export const Todo = ({todo, removeToDo, completedToDo}) =>{

    return(
        <div key={todo.id} className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
            <div className="content">
              <p>{todo.text}</p>
              <p className="category">({todo.category})</p>
            </div>
            <div>
              <button className="complete" onClick={() => completedToDo(todo.id)}>Completar</button>
              <button className="remove" onClick={() => removeToDo(todo.id)}>X</button>
            </div>
          </div>
    )
}