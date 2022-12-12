import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters';
import React, { Component } from 'react';

class App extends Component {
  state = { 
    counters: [
        { id: 1, value: 0},
        { id: 2, value: 0},
        { id: 3, value: 0},
        { id: 4, value: 0},
        {id:5, value:5 },
        {id:6 , value:2}
    ]
 } 
handelIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
};

handelDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;
    this.setState({counters});
};

handelDelete = (countId) => {
   const counters = this.state.counters.filter(c => c.id !== countId);
   this.setState({counters}); 
}; 

handelReset = () => {
    const counters = this.state.counters.map(c => {         // we need to delete local state before the handel reset event. then we can update porps directly.
        c.value = 0;
        return c;
    });
    this.setState({counters});
};
render(){
  return (
    <React.Fragment>
      <NavBar totalCounters = {this.state.counters.filter(c => c.value > 0).length}/>
      <main className="container">
        <Counters 
        counters={this.state.counters}
        onRest={this.handelReset}
        onIncrement={this.handelIncrement}
        onDelete={this.handelDelete}
        onDecrement={this.handelDecrement}
        />
      </main>
    </React.Fragment>
  );
}
}
export default App;
