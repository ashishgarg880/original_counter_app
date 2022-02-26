import React,{useState} from "react";
import Images from "./images";
export default function CountImages(props){
    return (
        
        <div className="Images-section">
            <div className='row' style={{position:"relative",top:"0",left:"0",width:"100%",display:"inline-block"}}>
                <div className='row1'>
                    <button 
                        className='btn btn-success' 
                        onClick={props.onRestart} 
                        disabled={props.counter.length===0? "disabled":""}>
                            <i className='fa fa-refresh' ></i>
                    </button>
                    <button className='btn btn-info' 
                            style={{color:"#fff"}} 
                            onClick={props.onRestart} 
                            disabled={props.counter.length!==0 ? "disabled":""}>
                            <i className='fa fa-recycle'></i>
                    </button>
                </div>
            </div>
            <div className="section2" style={{display:"inline-block",width:"100%",position:"relative",top:"0",left:"0",textAlign:"center"}}>
            {props.counter.map((counters) => (
            <Images
                key={counters.id}
                counter={counters}
                onIncrement={props.onIncrement}
                onDecrement={props.onDecrement}
                onDelete={props.onDelete}
                />
            ))}
            </div>
        </div>
    )
}