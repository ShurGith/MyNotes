import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import NotesPage from './pages/NotesPage'
import CreateNote from './components/CreateNote'

function App() {

  return (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/notes" element={<NotesPage />} />
    <Route path="/create" element={<CreateNote />} />
  </Routes>
  )
}

export default App
