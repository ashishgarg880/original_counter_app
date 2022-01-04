import './App.css';
import React,{Component} from 'react';
import Images from "./component/images"
import List from './component/Header';
import Counter from './component/counter'
//import { borderColor } from '@mui/system';
//import { blueGrey } from '@mui/material/colors';
export default class App extends Component{
  state= {counters:[{id:1,value:0},{id:2,value:0},{id:3,value:0},{id:4,value:0}]}
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters[index] };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters[index] };
    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleRestart = () => {
    window.location.reload();
  };
  render(){
    
    let stylesheet = {textAlign:"center",padding:"30px"}
    let style1 ={border:"5px solid #34bdbd",backgroundColor:"#7bebe1",borderRadius:"25px",padding:"50px"}
    return (
      <div style={stylesheet}>
        <header>
          <List />
        </header> 
        <div style={style1}>
          <Counter />
          <Images counters={this.state.counters}
              onReset={this.handleReset}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
              onRestart={this.handleRestart}/>
          <Images />  
        </div>
      </div>
    )
  }
}