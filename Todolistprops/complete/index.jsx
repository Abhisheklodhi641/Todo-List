import React from "react";

const Complet = (props) => {
    
    const {data} = props;
    
    return(
        <div>
            <h4>complite list</h4>
                 {data.map((list,index)=>{
                        return(
                               <div>
                                  {list}
                               </div>
                             )
                  }
             )
         }
        </div>
    )
}
export default Complet;
