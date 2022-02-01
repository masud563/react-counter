import React, {Component} from 'react';

class Counter extends Component {

  // componentWillUnmount(){
  //   console.log(`Counter - Unmounted`);
  // }

  // componentDidUpdate(a,b){

  //   console.log(`prev props`,a);
  //   console.log(`prev state`,b);
  // }
  render(){ 
    return (
      <React.Fragment>
        <div className='m-4 grid grid-cols-10'>

          <div className=' '>
          <span 
          className={this.formatClass()}
          >{this.formatCounter()}</span>
          </div>

          <div className=' '>
          <button 
          onClick={()=>this.props.onIncrement(this.props.counter)} 
          className='btn '
          >+</button>

          <button 
          onClick={()=>this.props.onDecrement(this.props.counter)} 
          className="btn btn-warning mx-2"
          disabled={this.props.counter.value===0?'disabled':''} 
          >-</button>

          <button 
          onClick={()=>this.props.onDelete(this.props.counter.id)} 
          className='btn btn-danger '
          >X</button>
          </div>
           

        </div>
      </React.Fragment>
    );
  }
   
  formatClass(){
    let classes = 'badge m-2 badge-';
    classes += this.props.counter.value===0?'warning':'primary';
    return classes;
  }

  formatCounter(){
    const x ='Zero';
    const {value: element} = this.props.counter;
    return (
      element === 0 ? x: element
      );
  }
}

export default Counter;