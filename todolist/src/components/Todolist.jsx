import React, {useState} from "react";
import TodoTable from "./TodoTable.jsx";

export default function Todolist() {
    const [todo, setTodo] = useState({description: "", date: "", priority: ""});
    const [todos, setTodos] = useState([]);

    const handleInputChange = (event) => {
        setTodo({...todo, [event.target.name]: event.target.value});
    };

    const addTodo = () => {
        // Check if the user has inputted both date and a description
        if (todo.date && todo.description) {
            const newTodo = {...todo, priority: todo.priority || "Low"};
            setTodos([...todos, newTodo]);
            // Option to reset the fields.
            //  setTodo({ description: "", date: "", priority: "" });
        } else {
            alert("Please enter both date and description!");
        }
    };


    const deleteByIndex = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    return <>

        <input
            type="date"
            name="date"
            value={todo.date}
            onChange={handleInputChange}
        />

        <input
            type="text"
            name="description"
            placeholder="Activity"
            value={todo.description}
            onChange={handleInputChange}
        />

        <select
            id="priority"
            name="priority"
            value={todo.priority}
            onChange={handleInputChange}
        >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
        </select>

        <button onClick={addTodo}>Add</button>
        <TodoTable todos={todos} deleteByIndex={deleteByIndex}/>
    </>;
}