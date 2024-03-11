import React, {useRef, useState} from "react";
import {AgGridReact} from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css"; // Material Design theme


export default function TodoGrid({todos, addTodo, deleteTodoById}) {
    const [colDefs] = useState([{field: "date", filter: true, floatingFilter: true}, {
        field: "description", filter: true, floatingFilter: true
    }, {field: "priority", filter: true, floatingFilter: true},]);

    const gridRef = useRef();

    const onDelete = () => {
        const selectedNodes = gridRef.current.getSelectedNodes();
        if (selectedNodes.length > 0) {
            const selectedTodo = selectedNodes[0].data;
            const selectedId = selectedTodo.id;
            deleteTodoById(selectedId);
            // ConsoleLog to see what was deleted:
            console.log(`Deleted ToDo:\nDate: ${selectedTodo.date}\nDescription: ${selectedTodo.description}\nPriority: ${selectedTodo.priority}\nID: ${selectedTodo.id}`);
        }
    };

    return <div className="ag-theme-material" style={{width: 700, height: 500}}>
        <button onClick={addTodo}>Add</button>
        <button onClick={onDelete}>Delete</button>
        <AgGridReact
            ref={gridRef}
            onGridReady={params => gridRef.current = params.api}
            rowData={todos}
            columnDefs={colDefs}
            rowSelection="single"
        />
    </div>;
}