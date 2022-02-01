import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {

  render() { 
    const {counters, onIncrement,onDelete, onReset, onDecrement} = this.props;
    return (
      <React.Fragment>
        <button 
        onClick={onReset} 
        className="btn btn-primary m-6"
        >Reset</button>
        {counters.map(counter=>{
        return <Counter 
        key={counter.id} 
        onDelete={onDelete} 
        onIncrement={onIncrement} 
        onDecrement={onDecrement}
        counter={counter}/>
        })}
        
      </React.Fragment>
      
    );
  }

  
}
 
export default Counters;