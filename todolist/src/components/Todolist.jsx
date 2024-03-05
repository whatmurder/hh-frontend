import React, {useState} from "react";
import TodoTable from "./TodoTable.jsx";

function Todolist() {
    const [todo, setTodo] = useState({description: "", date: ""});
    const [todos, setTodos] = useState([]);

    const handleInputChange = (event) => {
        setTodo({...todo, [event.target.name]: event.target.value});
    };

    const addTodo = () => {
        setTodos([...todos, todo]);
        console.log(todos);
    };

    const deleteByIndex = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    return <>
            <input
                type="text"
                name="description"
                placeholder="Activity"
                value={todo.description}
                onChange={handleInputChange}
            />

            <input
                type="date"
                name="date"
                value={todo.date}
                onChange={handleInputChange}
            />
            <button onClick={addTodo}>Add</button>
            <TodoTable todos={todos} deleteByIndex={deleteByIndex}/>
        </>;
}

export default Todolist;