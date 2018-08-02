// @flow

import React, { Component } from "react";
import styled from "styled-components";

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

/* These are the property type definitons. */
type Props = {
  onIncrement: () => void,
  onDecrement: () => void,
  counter: number
};

export default class Counter extends Component<Props> {
  /* These are the default property values. */
  static defaultProps = {
    onIncrement: () => null,
    onDecrement: () => null,
    counter: 0
  }

  /* This is a function to return the background color. */
  background () {
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

  /* Renders the component. */
  render () {
    const { counter, onDecrement, onIncrement} = this.props

    return <BaseDiv background={this.background()}>
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
