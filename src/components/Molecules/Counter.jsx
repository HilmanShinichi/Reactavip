import React, { useState } from "react";

class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("contructor")
  }

  componentDidMount() {
    this.setState({ count:10});
    console.log("compenentDidMount")
  }

  componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate");
        if(this.state.count === 10) {
            this.setState({count: 5});
        }
  }
  render() {
    console.log("render")
    return (
      <div className="flex items-center">
        <h1 className="mr-5">{this.state.count}</h1>
        <button
          className="bg-black p-5 text-white"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          +
        </button>
      </div>
    );
  }
}



const Counter = () => {

    const [ count, setCount ] = useState(1);

  return (
    <div className="flex items-center">
        <h1 className="mr-5">{count}</h1>
        <button
          className="bg-black p-5 text-white"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
  )
}

export default CounterClass