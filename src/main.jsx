import React, { Component } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

/* This is the styling for the base div. */
const BaseDiv = styled.div`
  background: ${props => props.background};
  border-radius: 5px;
  transition: 320ms;
  display: flex;
  padding: 20px;
  margin: 20px;
`

/* This is the styling for the counter span. */
const CounterSpan = styled.span`
  font-family: sans;
  font-size: 20px;
  padding: 0 20px;
`

class Counter extends Component {
  /* These are the property type definitons. */
  props: {
    onIncrement: () => void,
    onDecrement: () => void,
    counter: number
  }

  /* These are the default property values. */
  static defaultProps = {
    onIncrement: () => null,
    onDecrement: () => null,
    counter: 0
  }

  /* This is a computed property for the background color. */
  get background () {
    const { counter } = this.props

    if (counter >= 10) {
      return "lightgreen"
    } else {
      if (counter < 0) {
        return "orangered"
      } else {
        return "#F2F2F2"
      }
    }
  }

  render () {
    const { counter, onDecrement, onIncrement} = this.props

    return <BaseDiv background={this.background}>
      <button onClick={() => onDecrement()}>
        Decrement
      </button>

      <CounterSpan>
        { counter }
      </CounterSpan>

      <button onClick={() => onIncrement()}>
        Increment
      </button>
    </BaseDiv>
  }
}

class Main extends Component {
  render () {
    return <div>
    <Counter counter={0}/>
    <Counter counter={-1}/>
    <Counter counter={11}/>
    </div>
  }
}

ReactDOM.render(<Main/>, document.getElementById('root'));
