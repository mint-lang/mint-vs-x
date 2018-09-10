/* Define an enum for the status. */
enum Status {
  Initial
  Loading
  Loaded
  Errored
}

/* The component for the about page. */
component About {
  /* A state to track the status. */
  state status : Status = Status::Initial

  /* A state for the content. */
  state content : String = ""

  /* When the component is mounted. */
  fun componentDidMount : Promise(Never, Void) {
    /* In a do block statements are executed asynchronously in sequence. */
    sequence {
      /* Set the status to loading. */
      next { status = Status::Loading }

      /*
      Get the response and unpack it from a
      Result(Http.ErrorResponse, Http.Response).
      */
      response =
        "/about.txt"
        |> Http.get()
        |> Http.send()

      /* Set the status to loaded and the content. */
      next
        {
          status = Status::Loaded,
          content = response.body
        }
    } catch Http.ErrorResponse => error {
      /* On an error set the status to errored. */
      next
        {
          status = Status::Errored,
          content = ""
        }
    }
  }

  /* Renders the component. */
  fun render : Html {
    /* Renders things based on status. */
    case (status) {
      Status::Initial => Html.empty()

      Status::Loading =>
        <div>
          <{ "Loading..." }>
        </div>

      Status::Errored =>
        <div>
          <{ "Could not load the content..." }>
        </div>

      Status::Loaded =>
        <div>
          <{ content }>
        </div>
    }
  }
}
