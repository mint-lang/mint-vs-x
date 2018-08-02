/* Import things. */
import Adapter from "enzyme-adapter-react-16";
import React, { Component } from "react";
import Enzyme, { mount } from "enzyme";

/* Configure enzyme. */
Enzyme.configure({ adapter: new Adapter() });

/* Import our Counter component. */
import Counter from "./counter.jsx";

/* A test component which handles the state. */
class TestComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }

  decrement() {
    this.setState({ counter: this.state.counter - 1 });
  }

  render() {
    return (
      <Counter
        onIncrement={() => this.increment()}
        onDecrement={() => this.decrement()}
        counter={this.state.counter}
      />
    );
  }
}

it("displays the counter", () => {
  const counter = mount(<TestComponent />);

  expect(counter.find("span").text()).toEqual("0");
});

it("decrements the counter", () => {
  const counter = mount(<TestComponent />);

  expect(counter.find("span").text()).toEqual("0");

  counter
    .find("button")
    .first()
    .simulate("click");
  counter.update();

  expect(counter.find("span").text()).toEqual("-1");
});

it("increments the counter", () => {
  const counter = mount(<TestComponent />);

  expect(counter.find("span").text()).toEqual("0");

  counter
    .find("button")
    .last()
    .simulate("click");
  counter.update();

  expect(counter.find("span").text()).toEqual("1");
});
