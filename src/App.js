import './App.css';
import React,{Component} from 'react';
import Counter from './component/counter'
import Header from  './component/Header'
import CountImages from './component/countImage'

//import { borderColor } from '@mui/system';
//import { blueGrey } from '@mui/material/colors';
export default class App extends Component{
  state= {
    counters:[
      {id:1,value:0},{id:2,value:0},{id:3,value:0},{id:4,value:0}]}
  
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
    return (
      <div style={stylesheet}>
      
        <header>
          <Header/>
        </header>
        <div className="body">
        <Counter 
              totalCounters={this.state.counters.filter((c)=>c.value > 0).length}
        />
        </div>
        <div className='CounterImages'>
          <CountImages onReset={this.handleReset}
                  onRestart={this.handleRestart}
                  onIncrement={this.handleIncrement}
                  counter={this.state.counters}
                  onDelete={this.handleDelete}
                  onDecrement={this.handleDecrement}/>
        </div>
      </div>
    )
  }
}