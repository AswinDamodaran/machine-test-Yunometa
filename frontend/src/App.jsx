import { Routes, Route } from 'react-router-dom'
import TaskListPage from './pages/TaskListPAge'
import AddTaskPage from './pages/AddTaskPage'
import EditTaskPage from './pages/EditTaskPage'
import Navbar from './components/Navbar'


export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<TaskListPage />} />
        <Route path="/add" element={<AddTaskPage />} />
        <Route path="/edit/:id" element={<EditTaskPage />} />
      </Routes>
    </div>
  )
}