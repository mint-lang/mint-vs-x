import { createStore } from "redux";

/* These are the actions we can take. */
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

/* The type of the state. */
type State = {|
  counter: number
|};

/* The type of the action. */
type Action = {|
  type: string
|};

/* This is the initial state. */
const initialState: State = {
  counter: 0
};

/* This is the reducer which steps the state forward. */
const reducer = function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };

    case DECREMENT:
      return { ...state, counter: state.counter - 1 };

    default:
      return state;
  }
};

/* This is an action creater for the increment action. */
export const increment = (): Action => {
  return {
    type: INCREMENT
  };
};

/* This is an action creater for the decrement action. */
export const decrement = (): Action => {
  return {
    type: DECREMENT
  };
};

/* This is a function which creates a store. */
export const store = createStore(reducer, initialState);
