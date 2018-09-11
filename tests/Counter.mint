/* Create component for testing the counter which contains the state. */
component TestCounter {
  state counter : Number = 0

  fun render : Html {
    <Counter
      onIncrement={() : Promise(Never, Void) => { next { counter = counter + 1 } }}
      onDecrement={() : Promise(Never, Void) => { next { counter = counter - 1 } }}
      counter={counter}/>
  }
}

/* A suite is a group of tests. */

suite "Counter" {
  test "Displays counter" {
    /*
    We are using the Test.Html module for testing. The with keyword
    allows us to call its functions in the current scope.
    */
    with Test.Html {
      <TestCounter/>
      |> start()
      |> assertTextOf("span", "0")
    }
  }

  test "Clicking on increment increments the counter" {
    with Test.Html {
      <TestCounter/>
      |> start()
      |> assertTextOf("span", "0")
      |> triggerClick("button:last-child")
      |> assertTextOf("span", "1")
    }
  }

  test "Clicking on decrement decrements the counter" {
    with Test.Html {
      <TestCounter/>
      |> start()
      |> assertTextOf("span", "0")
      |> triggerClick("button")
      |> assertTextOf("span", "-1")
    }
  }
}
