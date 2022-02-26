import React, { Component} from 'react'
// import Images from './images';
export default function Counter(props){
        return( 
        <div className="">
            <div className='design'>
                <span><i className='fa fa-shopping-cart fa-2x'></i></span>
                <label 
                    style={{fontSize:"24px",fontWeight:"1000",width:"90px",
                        backgroundColor:"#34bdbd",color:"#fff",padding:"10px",
                            marginLeft:"20px",borderRadius:"25px",marginRight:"10px"}}>
                                {props.totalCounters}
                </label>
                <label style={{fontSize:"20px",fontWeight:"400"}}>Items</label>
            </div>
        </div>
        )
    }


