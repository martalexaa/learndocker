import { useEffect, useState } from 'react'

function App() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch('http://notes-api:8000/notes')
      .then(res => res.json())
      .then(setNotes)
  }, [])

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(n => <li key={n.id}>{n.text}</li>)}
      </ul>
    </div>
  )
}

export default App