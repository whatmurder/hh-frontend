import React, {useState} from "react";
import TodoGrid from "./TodoGrid.jsx";
// import TodoTable from "./TodoTable.jsx";


export default function Todolist() {
    const [todo, setTodo] = useState({date: "", description: "", priority: "Low"});
    const [todos, setTodos] = useState([]);

    const handleInputChange = (event) => {
        setTodo({...todo, [event.target.name]: event.target.value});
    };

    const addTodo = () => {
        if (todo.date && todo.description) {
            const newTodo = {
                ...todo, id: Date.now(),
            };
            // ConsoleLog to see what was added:
            console.log(`Added ToDo:\nDate: ${newTodo.date}\nDescription: ${newTodo.description}\nPriority: ${newTodo.priority}\nID: ${newTodo.id}`);
            setTodos(todos => [...todos, newTodo]);
            // Option to reset the input fields:
            setTodo({date: "", description: "", priority: "Low"});
        } else {
            alert("Please enter both date and description!");
        }
    };

    const deleteTodoById = (todoId) => {
        setTodos(todos.filter(todo => todo.id !== todoId));
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

        <TodoGrid todos={todos} addTodo={addTodo} deleteTodoById={deleteTodoById}/>
    </>;
}