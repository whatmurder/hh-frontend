import React from "react";

export default function MatkaTable({matkat, deleteByIndex}) {
    const itemRows = matkat.map((matka, index) => <tr key={index}>
        <td>{matka.kohde}</td>
        <td>{matka.kesto}</td>
        <td>
            <button onClick={() => deleteByIndex(index)}>Delete</button>
        </td>
    </tr>)

    return <table>
        <thead>
        <tr>
            <th>Kohde</th>
            <th>Kesto</th>
        </tr>
        </thead>
        <tbody>
        {itemRows}
        </tbody>
    </table>
}