store Store {
  /* The data lives in properties. */
  property counter : Number = 0

  /* Create a new property for the page. */
  property page : String = ""

  /* A store can have any number of functions. */
  fun increment : Void {
    /* The next statements steps the state forward based on the previous state. */
    next { state | counter = counter + 1 }
  }

  fun decrement : Void {
    next { state | counter = counter - 1 }
  }

  fun setCounter (counter : Number) : Void {
    next { state | counter = counter }
  }

  fun setPage (page : String) : Void {
    next { state | page = page }
  }
}
