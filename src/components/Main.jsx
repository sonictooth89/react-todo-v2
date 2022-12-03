import { useState } from "react";

   
function Main () {
    const [id, setId] = useState(0);
    const [item, setItem] = useState([]);

    let items = [
        {
            id: 1,
            text: 'Tidy my room'
        },
        {
            id: 2,
            text: 'Cooking with Sebastian'
        }
    ];

    function handleChange(e){
        setItem(e.target.value);
    }

    function handleClick(){
        setId(prev => ({
            id: prev.id + 1,
        }));
        setItem(item)
    };

    return (
        <>
        <input type="text" value={item} onChange={handleChange} />
        <button onClick={handleClick}>Add</button>
        <ol>
            {items.map(item => {
                return <li key={item.id}>{item.text}</li>
            })}
        </ol>
        </>
    )
}

export default Main;