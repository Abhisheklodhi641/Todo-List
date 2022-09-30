import React, { useState } from 'react';
import Completed from '../Completed';

const Todo = (props)=>{
    
    let [input,setInput] = useState("");
    const [add,setAdd] = useState([])
    
    const Add=() => {
         const adds = [...add,input]
         setAdd(adds);
         setInput(input="")
    }
    return(
        <div style={{    marginLeft: "40%",
            fontSize: "xxx-large"}}>
            <input type="text" placeholder="text...." onChange={(e)=>setInput(e.target.value)} value={input}/>
            <button type='submit' onClick={()=>Add()} style={{cursor:"pointer"}}>ADD</button>
             <div>
               <Completed  data={add} />
             </div>
        </div>
    )
}
export default Todo;
