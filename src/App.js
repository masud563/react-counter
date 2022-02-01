import React, { Component } from 'react';
import './App.css';
import Counters from './component/counter/Counters';
import Navbar from './component/navbar/Navbar';
class App extends Component {
  state = { 
    counters: [
      {id:1, value:4},
      {id:2, value:0},
      {id:3, value:0},
      {id:4, value:0},
    ]
   }
  //  constructor(){
  //    super();
  //    console.log(`App - Constructor`);
  //   //  this.state = this.props.anything; perfect place for state initialization
  //  } 

  //  componentDidMount(){
  //    console.log(`App - Mounted`);
  //   //  this.setState({movies}); perfect place for async data initialization
  //  }
   handleIncrement = (counter) =>{
     const index = this.state.counters.indexOf(counter);
     const counters = [...this.state.counters];
     counters[index] = {...counter};
     counters[index].value++;
     this.setState({counters});
   }
   handleDecrement = (counter) =>{
     const index = this.state.counters.indexOf(counter);
     const counters = [...this.state.counters];
     counters[index]={...counter};
     counters[index].value--;
     this.setState({counters});
   }
   handleDelete = (counterId)=>{
    const counters = this.state.counters.filter(c=>c.id !== counterId);
    this.setState({counters});
  }
   handleReset = ()=>{
    const counters = this.state.counters.map(c=>{
      c.value = 0;
      return c;
    });
    this.setState({counters});
  }
  render() {
      return (
        <React.Fragment>
          <Navbar 
            totalCounters={this.state.counters.filter((c)=>c.value > 0).length}
          />
          <Counters 
          counters={this.state.counters}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete = {this.handleDelete}
          onReset = {this.handleReset}
           />
        </React.Fragment> 
      );
  }
}

export default App;
