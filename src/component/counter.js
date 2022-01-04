import React, { Component } from 'react'
// import Images from './images';
export class Counter extends Component {
    
    render(props) {
       const count = 0;
        const onReset=()=>{
            
        }

        
        const onRestart=(e)=>{
            e.preventDefault();
            window.location.reload(false);
        }
        return (
            <div>
                <div className="">
                    <div className='design'>
                        <span><i className='fa fa-shopping-cart fa-2x'></i></span>
                        <label onChange={this.value===0 ? "8":"9"} style={{fontSize:"24px",fontWeight:"1000",width:"90px",backgroundColor:"#34bdbd",color:"#fff",padding:"10px",marginLeft:"20px",borderRadius:"25px",marginRight:"10px"}}>{count}</label>
                        <label style={{fontSize:"20px",fontWeight:"400"}}>Items</label>
                    </div>
                </div>
                <div className='row'>
                    <div className='row1'>
                        <button className='btn btn-success' onClick={onReset}><i className='fa fa-refresh'></i></button>
                        <button className='btn btn-info' style={{color:"#fff"}} onClick={onRestart} ><i className='fa fa-recycle'></i></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Counter;
