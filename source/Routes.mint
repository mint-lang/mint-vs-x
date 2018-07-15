/* In a routes block you can define the routes of the application. */
routes {
  /* This matches the /about path. */
  /about {
    /* We can directly call store functions. */
    Store.setPage("about")
  }

  /* This matches the / path. */
  / {
    /* Do allows us to do more things in sequence. */
    do {
    	Store.setCounter(0)
    	Store.setPage("counter")
    }
  }

  /* This matches the /10 path. */
  /:value (value : String) {
    do {
      /* Here we convert a string to a number safely. */
      counter =
        value
      	|> Number.fromString()
      	|> Maybe.withDefault(0)

    	Store.setCounter(counter)
    	Store.setPage("counter")
    }
  }
}
