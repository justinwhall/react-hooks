// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Greeting({ initialName = '' }) {
  const [name, setName] = React.useState(initialName)
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={(evt) => setName(evt.target.value)} id="name" />
      </form>
      {name ? <strong>Hi {name}</strong> : 'Enter your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName="Justin" />
}

export default App
