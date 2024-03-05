import {useState} from "react";
import MatkaTable from "./MatkaTable.jsx"
import MatkaGrid from "./MatkaGrid.jsx";

export default function Matka() {
    const [matka, setMatka] = useState({kohde: '', kesto: ''});
    const [matkat, setMatkat] = useState([]);

    const handleInputChange = (event) => {
        setMatka({...matka, [event.target.name]: event.target.value});
    }

    const addMatka = () => {
        setMatkat([...matkat, matka]);
        console.log(matkat);
    }

    const deleteByIndex = (index) => {
        setMatkat(matkat.filter((matka, i) => i != index));
    }

    const itemRows = matkat.map((matka, index) => <tr key={index}>
        <td>{matka.kohde}</td>
        <td>{matka.kesto}</td>
        <td>
            <button onClick={() => deleteByIndex(index)}>Delete</button>
        </td>
    </tr>)

    return <>
        <input
            type="text"
            name="kohde"
            placeholder="Anna kohde"
            value={matka.kohde}
            onChange={handleInputChange}
        />

        <input
            type="number"
            name="kesto"
            placeholder="Anna kesto"
            value={matka.kesto}
            onChange={handleInputChange}
        />
        <button onClick={addMatka}>Add</button>
        <MatkaGrid matkat={matkat} deleteByIndex={deleteByIndex}/>

    </>
}