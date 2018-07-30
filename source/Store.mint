store Store {
  /* The property for the counter. */
  state counter : Number = 0

  /* The property for the page. */
  state page : String = ""

  /* A function to increment the counter. */
  fun increment : Void {
    /*
    The next statements steps the state forward
    based on the previous state.
    */
    next { counter = counter + 1 }
  }

  /* A function to decrement the counter. */
  fun decrement : Void {
    next { counter = counter - 1 }
  }

  /* A function to set the counter. */
  fun setCounter (counter : Number) : Void {
    next { counter = counter }
  }

  /* A function to set the page. */
  fun setPage (page : String) : Void {
    next { page = page }
  }
}
