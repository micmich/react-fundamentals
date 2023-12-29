// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  
  const [isFailure, setFailure] = React.useState("");
  const refInput = React.useRef();

  const checkValid = () => {
    setFailure(refInput.current.value !== refInput.current.value.toLowerCase())
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // const userInput = refInput.current.value;
    const userInput = event.target.value;
    onSubmitUsername(userInput);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" ref={refInput} onChange={checkValid}/>
      </div>
      {isFailure ? <div style={{color: 'red'}}>Uppercase Characters not allowed</div> : <></>}
      <button type="submit" disabled={isFailure}>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
