/* The "Main" component is the one which gets rendered on the page. */
component Main {
  /*
  We are connecting to the store and explicitly exposing
  it's properties and functions to be available for the
  component.
  */
  connect Store exposing { counter, increment, decrement, page }

  /* This is the styling of the base element. */
  style base {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-family: sans;
    display: flex;
    height: 100vh;
  }

  /* Returns the content. */
  get content : Html {
    /* Decide what to render based on the page. */
    case (page) {
      "counter" =>
        <Counter
          onIncrement={increment}
          onDecrement={decrement}
          counter={counter}/>

      "about" => <About/>

      =>
        <div>
          <{ "" }>
        </div>
    }
  }

  /* Renders the component. */
  fun render : Html {
    <div::base>
      <ul>
        <li>
          <a href="/">
            <{ "/0" }>
          </a>
        </li>

        <li>
          <a href="/10">
            <{ "/10" }>
          </a>
        </li>

        <li>
          <a href="/about">
            <{ "/about" }>
          </a>
        </li>
      </ul>

      <{ content }>
    </div>
  }
}
