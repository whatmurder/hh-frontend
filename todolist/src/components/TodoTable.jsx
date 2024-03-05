import React from "react";

function TodoTable({todos, deleteByIndex}) {
    const itemRows = todos.map((todo, index) => (<tr key={index}>
            <td>{todo.date}</td>
            <td>{todo.description}</td>
            <td>
                <button onClick={() => deleteByIndex(index)}>Delete</button>
            </td>
        </tr>));

    return <table>
            <thead>
            <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>{itemRows}</tbody>
        </table>;
}

export default TodoTable;
