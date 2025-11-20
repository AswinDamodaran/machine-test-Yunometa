import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <nav className="bg-white shadow mb-6">
            <div className="max-w-5xl mx-auto p-4 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold">Task Manager</Link>
                <Link to="/add" className="text-blue-600">Add Task</Link>
            </div>
        </nav>
    )
}