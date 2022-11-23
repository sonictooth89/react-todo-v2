import { useState } from "react";

   
function Main () {
    const [id, setId] = useState(0);
    const [item, setItem] = useState([]);

    function handleChange(e){
        setItem(e.target.value);
    }

    function handleClick(){
        setId(id);
    };

    return (
        <>
        <input type="text" value={item} onChange={handleChange} />
        <button onClick={handleClick}>Add</button>
        <ul>{id}. {item}</ul>
        </>
    )
}

export default Main;