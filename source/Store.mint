store Store {
  /* The property for the counter. */
  state counter : Number = 0

  /* The property for the page. */
  state page : String = ""

  /* A function to increment the counter. */
  fun increment : Promise(Never, Void) {
    /*
    The next statements steps the state forward
    based on the previous state.
    */
    next { counter = counter + 1 }
  }

  /* A function to decrement the counter. */
  fun decrement : Promise(Never, Void) {
    next { counter = counter - 1 }
  }

  /* A function to set the counter. */
  fun setCounter (counter : Number) : Promise(Never, Void) {
    next { counter = counter }
  }

  /* A function to set the page. */
  fun setPage (page : String) : Promise(Never, Void) {
    next { page = page }
  }
}
