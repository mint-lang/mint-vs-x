/* Default react imports. */
import React, { Component } from "react";

/* We need to import the action creators and the store from the other file. */
import { store, increment, decrement } from "./store.jsx";

/* The connect comes from the react-redux package. */
import { connect } from "react-redux";

/* Import the counter component. */
import Counter from './counter.jsx';

/* This is our main component which is connected to the store. */
class Main extends Component {
  render() {
    const { counter, onIncrement, onDecrement } = this.props;

    return (
      <div>
        <Counter
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          counter={counter}
        />
      </div>
    );
  }
}

/* We need to map the state from the store to our components properties. */
const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

/* We need to map the actions from the store to our components properties. */
const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => {
      dispatch(increment());
    },
    onDecrement: () => {
      dispatch(decrement());
    }
  };
};

/*
Finally we are creating a new component by connecting the store the original one, using the two functions above.
*/
export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

import ReactDOM from "react-dom";

ReactDOM.render(<App store={store}/>,document.getElementById('root'));
