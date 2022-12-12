import React, { Component } from 'react';

class Counter extends Component {
    
  //  state = {                       //The state is a built-in React object that is used to contain data or information about the component
  //      value: this.props.counter.value    // props means property class
                                   // tags: ["tag1","tag2","tag3"]
  //  };
    
  //  {/* contructor(){
  //      super();
  //      this.handelIncrement = this.handelIncrement.bind(this);
  //  } */}
    
  //  handelIncrement = () => {                              
  //      this.setState({value: this.state.value + 1})
  //  };
  //  handelDecrement = () => {
  //      this.setState({value: this.state.value - 1})
  //  }

    render() {  
            
        return ( 
            <div>
          
            <span className= {this.getBadgeClasses()} > {this.formatCount()} </span>
            <button onClick={() => this.props.onIncrement(this.props.counter)}                   // we don't use handelIncrement() because we write in here reference only.
            className="btn m-3 btn-secondary btn-sm">Increment</button> 
            <button onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn m-3 btn-secondary btn-sm" >Decrement</button>
            <button 
            onClick={() => this.props.onDelete(this.props.counter.id)} 
            className="btn btn-danger ">
                Delete   </button>
          {/*  <ul>
                {this.state.tags.map(tag => <li key={tag}>{tag}</li>)} {/* map take all tags into array and pass it to tag. 
                                                                        this => keyword used to insert tag variable between <h1></h1> tags.  
            </ul>
    */}
            </div>
        );
    }
    
    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += (this.props.counter.value === 0) ? "danger" : "success";  // we can modify varibales by using += keyword. 
        return classes;
    }

    formatCount() {
        const { value: count } = this.props.counter;
        return count === 0 ? 'Zero' : count;
    }
    
}


export default Counter;