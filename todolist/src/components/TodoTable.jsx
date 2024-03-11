import React from "react";

export default function TodoTable({todos, deleteByIndex}) {
    const itemRows = todos.map((todo, index) => (<tr key={index}>
        <td>{todo.date}</td>
        <td>{todo.description}</td>
        <td>{todo.priority}</td>
        <td>
            <button onClick={() => deleteByIndex(index)}>Delete</button>
        </td>
    </tr>));

    return <table>
        <thead>
        <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>{itemRows}</tbody>
    </table>;
}