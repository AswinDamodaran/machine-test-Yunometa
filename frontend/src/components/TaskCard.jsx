import { Link } from 'react-router-dom'


export default function TaskCard({ task, onDelete }) {
    return (
        <div className="p-4 bg-white rounded shadow flex justify-between items-start">
            <div>
                <h2 className="text-lg font-semibold">{task.title}</h2>
                <p className="text-gray-600">{task.description}</p>
                <span className="text-sm mt-2 inline-block px-2 py-1 bg-gray-200 rounded">
                    {task.status}
                </span>
            </div>


            <div className="flex gap-3">
                <Link to={`/edit/${task._id}`} className="text-blue-600">Edit</Link>
                <button onClick={() => onDelete(task._id)} className="text-red-600">Delete</button>
            </div>
        </div>
    )
}