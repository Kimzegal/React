import { Component } from 'react';

class Counter extends Component{
  constructor(props){
    super(props);
    this.state = {
      number: 0,
      fixed: 0
    };
  }

  render(){
    const {number, fixed} = this.state;
    return(
      <div>
        <h1>{number}</h1>
        <h1>{fixed}</h1>
        <button
        onClick={()=>{
          this.setState({number: number+1});
          this.setState({number: number+1});
        }}>
          +1
        </button>
      </div>
    );
  }
}

export default Counter;