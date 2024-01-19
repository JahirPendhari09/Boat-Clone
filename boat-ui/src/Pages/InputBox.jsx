import { useState } from "react"

const InputBox =()=>{

    const [boxes , setBoxes]=useState([{id:1,title:"",name:""}]);

    const handleAddBox=()=>{
        let newBox ={
            id:Math.random(),
            title:"",
            name:""
        }
        let updatedBox = [...boxes];
        updatedBox.push(newBox);
        setBoxes(updatedBox)
    }

    const handleChange=(e,id)=>{
        let updatedBox = [...boxes];
        updatedBox = updatedBox.map((ele)=>{
            return ele.id==id? {...ele, [e.target.name]:e.target.value}:ele
        })
        setBoxes(updatedBox)
    }
    console.log(boxes);
    return <>
     <div>
        {boxes.length>0 && boxes.map((item)=>{
            return <div>
                <input type="text" name="title" placeholder="title" onChange={(e)=>handleChange(e,item.id)}/>
                <input type="text" name="name" placeholder="name" onChange={(e)=>handleChange(e,item.id)} />
                 <button onClick={handleAddBox}>+</button>
            </div>
        })}
     </div>
    </>
}

export {InputBox}