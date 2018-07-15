/* Default react imports. */
import React, { Component } from "react";

/* We need to import the action creators and the store from the other file. */
import { store, increment, decrement, set } from "./store.jsx";

/* The connect comes from the react-redux package. */
import { connect } from "react-redux";

/* Import the counter component. */
import Counter from './counter.jsx';

/* This is our main component which is connected to the store. */
class Main extends Component {
  componentDidMount () {
    this.props.set(this.props.initialCount)
  }

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
    },
    set: (payload : number) => {
      dispatch(set(payload));
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


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const RoutedApp = (props) =>  {
  const parsed = Number.parseInt(props.match.params.count)
  const initialCount = parsed || 0

  return <App store={store} initialCount={ initialCount} key={initialCount.toString()}/>
}

const Page = () =>
  <Router>
    <div>
      <ul>
        <li><Link to="/">0</Link></li>
        <li><Link to="/1">1</Link></li>
        <li><Link to="/topics">About</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" render={RoutedApp}/>
      <Route path="/:count" component={RoutedApp}/>
    </div>
  </Router>

import ReactDOM from "react-dom";

ReactDOM.render(<Page/>,document.getElementById('root'));
