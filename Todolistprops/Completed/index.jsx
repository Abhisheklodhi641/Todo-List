import React, { useState } from 'react';
import Complet from '../complete';
const Completed =  (props) =>{
    // console.log("props=>",props);
    const {data}=props;
    const [comp,setComp] = useState([])

    const Complete = (index) => {
        const comps = [...comp,data.splice(index,1)];
        setComp (comps);
        // console.log("comp=>",comp);

    }
    return(
        <div>
            <h4>Todo - List</h4>
           {data.map((list,index)=>{
            return(
                <div>
                    {list}{index}
                    <button type='submit' onClick={()=>Complete(index)} style={{cursor:"pointer"}}>Completd</button>
                </div>
            )
           })}
           <Complet data = {comp}/>
        </div>
    )
}
export default Completed;