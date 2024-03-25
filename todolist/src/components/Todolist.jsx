import React, {useState, useRef} from "react";
import TodoGrid from "./TodoGrid.jsx";
import {Button, MenuItem, Select, Stack, TextField} from "@mui/material";
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/fi.js"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function Todolist() {
    const [todo, setTodo] = useState({date: null, description: "", priority: "Low"});
    const [todos, setTodos] = useState([]);
    const gridRef = useRef();

    const handleInputChange = (event) => {
        setTodo({...todo, [event.target.name]: event.target.value});
    };

    const handleDateChange = (date) => {
        setTodo({...todo, date: date});
    };

    const addTodo = () => {
        if (todo.date && todo.description) {
            const newTodo = {
                ...todo, id: Date.now(),
            };
            console.log(`Added ToDo:\nDate: ${newTodo.date}\nDescription: ${newTodo.description}\nPriority: ${newTodo.priority}\nID: ${newTodo.id}`);
            setTodos(todos => [...todos, newTodo]);
            setTodo({date: null, description: "", priority: "Low"});
        } else {
            alert("Please enter both date and description!");
        }
    };

    const deleteTodoById = (todoId) => {
        setTodos(todos.filter(todo => todo.id !== todoId));
    };

    const onDelete = () => {
        const selectedNodes = gridRef.current.getSelectedNodes();
        if (selectedNodes.length > 0) {
            const selectedTodo = selectedNodes[0].data;
            const selectedId = selectedTodo.id;
            deleteTodoById(selectedId);
            console.log(`Deleted ToDo:\nDate: ${selectedTodo.date}\nDescription: ${selectedTodo.description}\nPriority: ${selectedTodo.priority}\nID: ${selectedTodo.id}`);
        }
    };

    return (
        <>
            <Stack mt={2} direction="row" spacing={3} justifyContent="space-evenly" alignItems="center">

                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fi">
                    <DatePicker
                        name="date"
                        label="Date"
                        value={todo.date}
                        onChange={handleDateChange}
                    />
                </LocalizationProvider>

                <TextField
                    name="description"
                    label="Activity"
                    value={todo.description}
                    onChange={handleInputChange}
                />

                <Select
                    id="priority"
                    name="priority"
                    value={todo.priority}
                    onChange={handleInputChange}
                >
                    <MenuItem value="Low">Low</MenuItem>
                    <MenuItem value="Medium">Medium</MenuItem>
                    <MenuItem value="High">High</MenuItem>
                </Select>
                <Button onClick={addTodo}>Add</Button>
                <Button onClick={onDelete}>Delete</Button>

            </Stack>

            <TodoGrid todos={todos} gridRef={gridRef}/>
        </>
    );
}
