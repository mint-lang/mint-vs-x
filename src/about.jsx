// @flow

/* Import the component class. */
import React, { Component } from "react";

type Props = {};

type State = {
  content: string,
  status: string
};

/* The component for the about page. */
export default class About extends Component<Props, State> {
  /* In th constructor set the initial state. */
  constructor(props: Props) {
    super(props);

    this.state = {
      /* This field is for tracking the status of the request. */
      status: "INITIAL",
      /* The content which will be displayed once loaded. */
      content: ""
    };
  }

  /* When the component is mounted. */
  componentDidMount() {
    /* Set the status as loading. */
    this.setState({ status: "LOADING" }, () => {
      /* Fetch the data. */
      fetch("/about.txt")
        .then(response => {
          /* Get the text. */
          response.text().then(body => {
            /* Set the status to loaded and content. */
            this.setState({
              status: "LOADED",
              content: body
            });
          });
        })
        .catch(() => {
          /* On an error set the status. */
          this.setState({
            status: "ERRORED",
            content: ""
          });
        });
    });
  }

  render() {
    /* Based on the status render things. */
    switch (this.state.status) {
      case "LOADING":
        return <div>Loading...</div>;
      case "ERRORED":
        return <div>Could not load the content...</div>;
      case "LOADED":
        return <div>{this.state.content}</div>;
      default:
        return false;
    }
  }
}
