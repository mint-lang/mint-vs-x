// @flow

import type { Dispatch as ReduxDispatch } from 'redux';
import type { Action } from "./store.jsx";

/* Default react imports. */
import React, { Component } from "react";

/* We need to import the action creators and the store from the other file. */
import { store, increment, decrement, set } from "./store.jsx";

/* The connect comes from the react-redux package. */
import { connect } from "react-redux";

/* Import the counter component. */
import Counter from './counter.jsx';
import About from './about.jsx';

import styled from "styled-components";

const StyledDiv = styled.div`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: sans;
  display: flex;
  height: 100vh;
`

type Props = {
  onIncrement: () => void,
  onDecrement: () => void,
  set: (number) => void,
  initialCount: number,
  counter: number
};

/* This is our main component which is connected to the store. */
class Main extends Component<Props> {
  componentDidMount () {
    this.props.set(this.props.initialCount)
  }

  render() {
    const { counter, onIncrement, onDecrement } = this.props;

    return (
      <Counter
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        counter={counter}
      />
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
const mapDispatchToProps = (dispatch : ReduxDispatch<Action>) => {
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
  Switch,
  Route,
  Link
} from 'react-router-dom'

const RoutedApp = (props) =>  {
  const parsed = Number.parseInt(props.match.params.count || "")
  const initialCount = parsed || 0

  return <App store={store} initialCount={ initialCount} key={initialCount.toString()}/>
}

const Page = () =>
  <Router>
    <StyledDiv>
      <ul>
        <li><Link to="/">0</Link></li>
        <li><Link to="/10">10</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <hr/>

      <Switch>
        <Route exact path="/" render={RoutedApp}/>
        <Route exact path="/about" component={About}/>
        <Route path="/:count" component={RoutedApp}/>
      </Switch>
    </StyledDiv>
  </Router>

import ReactDOM from "react-dom";

const root = document.getElementById('root')

if (root) { ReactDOM.render(<Page/>, root) }
