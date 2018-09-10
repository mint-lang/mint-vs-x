component Counter {
  /* This is a function to handle the increment button. */
  property onIncrement : Function(a) = () : Void => { void }

  /* This is a function to handle the decrement button. */
  property onDecrement : Function(a) = () : Void => { void }

  /* This is a counter number to display. */
  property counter : Number = 0

  /* This is the styling for the base div. */
  style base {
    background: {background};
    border-radius: 5px;
    transition: 320ms;
    display: flex;
    padding: 20px;
    margin: 20px;
  }

  /* This is the styling for the counter span. */
  style counter {
    font-family: sans;
    font-size: 20px;
    padding: 0 20px;
  }

  /* This is a computed property for the background color. */
  get background : String {
    if (counter >= 10) {
      "lightgreen"
    } else if (counter < 0) {
      "orangered"
    } else {
      "#F2F2F2"
    }
  }

  /* This renders the component. */
  fun render : Html {
    /* An element can have a style using the double colon "::" notation. */
    <div::base>
      <button onClick={(event : Html.Event) : Void => { onDecrement() }}>
        <{ "Decrement" }>
      </button>

      <span::counter>
        <{ Number.toString(counter) }>
      </span>

      <button onClick={(event : Html.Event) : Void => { onIncrement() }}>
        <{ "Increment" }>
      </button>
    </div>
  }
}
