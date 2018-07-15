component Main {
  /*
  We are connecting to the store and explicitly exposing
  it's properties and functions to be available for the
  component.
  */
  connect Store exposing { counter, increment, decrement, page }

  style base {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-family: sans;
    display: flex;
    height: 100vh;
  }

  get content : Html {
    case (page) {
      "counter" =>
        <Counter
          onIncrement={increment}
          onDecrement={decrement}
          counter={counter}/>

      "about" =>
        <div><{ "about" }></div>

      =>
        <div><{ "" }></div>
    }
  }

  fun render : Html {
    <div::base>
      <div>
        <a href="/"><{ "/0" }></a>
        <a href="/10"><{ "/10" }></a>
        <a href="/about"><{ "/about" }></a>
      </div>
      <{ content }>
    </div>
  }
}
