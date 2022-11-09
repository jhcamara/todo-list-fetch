import React, {useState, useEffect} from "react";

const TodoList = () => {

    const [value, setValue] = useState([]);
    const [inputValue,setInputValue] = useState("")

   

    



    console.log(value);
    console.log(inputValue);
    
        return (
        <>
       
        <input type="text" value={inputValue} onChange={(e) => {setInputValue(e.target.value)}}/>
            <button className="btn btn-primary" onClick={() => setValue(prevState => [...prevState,inputValue])}>add todo</button>
            {value.map((i,index) => {
                return (
                <>
                <p>{i}</p>
                <p>{index}</p>
                </>
                )
            })}
        </>
    )
}

export default TodoList