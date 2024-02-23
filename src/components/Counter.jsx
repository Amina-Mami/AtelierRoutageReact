import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    console.log("i am the constructure");
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.count > 3 ? false : true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log(prevState);
  }

  componentDidUpdate() {
    console.log("I am the update");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("I am rendering props");
    return null;
  }

  state = {
    count: 0,
    product: { id: 1, title: "product1" },
    name: this.props.PropName,
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
    // this.setState({ product: { ...(this.state.product.id + 1) } });
    this.setState({
      product: { ...this.state.product, id: this.state.product.id + 1 },
    });
    console.log(this.state);
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  componentDidMount() {
    console.log("i am didMount");
  }

  render() {
    return (
      <>
        {console.log("I am rendering")}

        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement} disabled={this.state.count == 0}>
          Decrement
        </button>
        <h1>{this.state.name}</h1>
        {[...Array(this.state.count)].map((item, index) => {
          return <Cell key={index} count={index} />;
        })}
      </>
    );
  }
}

export default Counter;

class Cell extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    console.log("I m unmounting ....");
  }

  render() {
    return <h1>{this.props.count}</h1>;
  }
}
