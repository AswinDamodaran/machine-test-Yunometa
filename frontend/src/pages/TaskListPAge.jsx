import { useEffect, useState } from 'react'
import { getTasks, deleteTask } from '../services/api'
import TaskCard from '../components/TaskCard'
import { Link } from 'react-router-dom'


export default function TaskListPage() {
    const [tasks, setTasks] = useState([])


    const loadTasks = async () => {
        const data = await getTasks()
        setTasks(data)
    }


    useEffect(() => {
        async () => await loadTasks()
    }, [])


    const handleDelete = async (id) => {
        await deleteTask(id)
        loadTasks()
    }


    return (
        <div className="p-6 max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Tasks</h1>
                <Link to="/add" className="bg-blue-600 text-white px-4 py-2 rounded">Add Task</Link>
            </div>


            <div className="space-y-4">
                {tasks.length ? tasks.map(task => (
                    <TaskCard key={task._id} task={task} onDelete={handleDelete} />
                )) : <p>No tasks found</p>}
            </div>
        </div>
    )
}