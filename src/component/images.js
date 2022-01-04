import React,{useState} from "react";
export default function Images(props){
    let[AddData,setData] = useState(0);
    // // let [Delete,allDelete] = useState(0);
    const StyleSheet = {fontWeight:"700",padding:"10px",backgroundColor:"#fcf828",border:"1px solid black",borderRadius:"25px"}

    const Delete=(e)=>{
        if(e!==""){
            e.splice();
        }
    }   
    
    return (
        <div className="Images-section">
            <div className="section2">
                <span style={StyleSheet} >{AddData}</span>
                <button className="btn btn-secondary" onClick={()=>setData(AddData+1)}>+</button>
                <button className="btn btn-info" style={{color:"#fff"}} disabled={AddData===0? "disable":""} onClick={()=>setData(AddData-1)}>-</button>
                <button className="btn btn-danger" onClick={Delete}><i className="fa fa-trash"></i></button>
            </div>
        </div>
    )
}