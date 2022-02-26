import React from "react";
function Images(props){
    const formatCount=()=>{
        const {value} = props.counter;
        return value === 0? "ZERO":value;
    };

    return (
        <div className="btn-div">
            <label style={{fontSize:"20px",backgroundColor:"yellow",color:"black",fontWeight:"800",padding:"5px",borderRadius:"25px",width:"80px",border:"1px solid black"}}>
                    {formatCount()}
            </label>
            <button 
                className="btn btn-secondary" 
                    onClick={()=>props.onIncrement(props.counter)}>
                        +
            </button>
            <button className="btn btn-info" 
                    style={{color:"#fff"}} 
                    disabled={props.counter.value===0? "disable":""} 
                    onClick={()=>props.onDecrement(props.counter)}>
                        -
            </button>
            <button className="btn btn-danger"  
                    onClick={() => props.onDelete(props.counter.id)}>
                        <i className="fa fa-trash"></i></button> 
        </div>
        )
    }
export default Images;