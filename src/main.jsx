import React, { Component } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

const StyledDiv = styled.div`
  background: red;
`

class Main extends Component {
  render () {
    return <StyledDiv>Hello World!</StyledDiv>
  }
}

ReactDOM.render(<Main/>, document.getElementById('root'));
