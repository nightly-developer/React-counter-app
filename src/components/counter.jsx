import React, { Component } from 'react';

class Counter extends Component {
  // special property contains data that this component needs
  // this state property shoud not exist in final version
  // instead use props.counter.[property_name]
  state = {
    value: this.props.counter.value,
    imgUrl: 'https://picsum.photos/200',
    tags: ['tag1','tag2','tag3'],
  };
//binding Event Handlers 
  // constructor (){
  //   super();
  //   this.handleIncreament = this.handleIncreament.bind(this)
  // }

  styles = {
    fontSize: 30,
    fontWeight: 'bold'
  }

  //between {} we can write javscript expression(produce some value)
  renderTags() {
    if (this.state.tags.length === 0) return <p>there are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      //<img src={this.state.imgUrl} alt="" />
      //in JSX we can't use `class` property on object coz it is reserved keyword in js instread use className
      <React.Fragment>
        <div className="row">
          <span style={this.styles} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            style={{ fontSize: 30 }}
            className="btn btn-secondary btn-sm m-2"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            style={{ fontSize: 30 }}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value ===0 ? 'disabled':''}
          >
            -
          </button>
          {/*if lenght===0 is true then 'non empty string' is trusy and will get render*/}
          {/* {this.state.tags.length === 0 && "please create a new tag!"} */}
          {/* {this.renderTags()}; */}
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            x
          </button>
        </div>
      </React.Fragment>
    )
  }

  getButtonState() {
    let classes = "m-2 btn btn-sm btn-"
    classes += this.props.counter.value > 0 ? "primary" : "disabled"
    return classes;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.props.counter.value === 0) ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;//selecting `count` property from props
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;