// @flow

import { createStore } from "redux";

/* These are the actions we can take. */
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const SET = "SET";

/* The type of the state. */
type State = {|
  counter: number
|};

/* The type of the action. */
export type Action = {|
  payload: number | null,
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

    case SET:
      return { ...state, counter: action.payload || 0 };

    default:
      return state;
  }
};

/* This is an action creator for the increment action. */
export const increment = (): Action => {
  return {
    type: INCREMENT,
    payload: null
  };
};

/* This is an action creator for the decrement action. */
export const decrement = (): Action => {
  return {
    type: DECREMENT,
    payload: null
  };
};

/* This is an action creator for the set action. */
export const set = (payload: number): Action => {
  return {
    payload: payload,
    type: SET
  };
};

/* This is a function which creates a store. */
export const store = createStore(reducer, initialState);
