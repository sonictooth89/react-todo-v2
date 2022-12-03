import { useEffect } from "react";
import { useState } from "react";

   
function Main () {
   
    const [item, setItem] = useState('');
   

    const handleChange = (e) => {
        setItem(e.target.value);
    }

    const handleClick = () => {
        const node = document.createTextNode(item);
        const li = document.createElement('li');
        li.appendChild(node);
        const ol = document.getElementById('itemsList');
        ol.appendChild(li);
    }

    return (
        <>
        <input type="text" value={item} onChange={handleChange} />
        <button onClick={handleClick}>Add</button>
        <ol id="itemsList">
            
        </ol>
        </>
    )
}

export default Main;