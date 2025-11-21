import { useEffect, useState } from 'react'
import { getTasks, deleteTask } from '../services/api'
import TaskCard from '../components/TaskCard'
import { Link } from 'react-router-dom'


export default function TaskListPage() {
    const [tasks, setTasks] = useState([])


    const loadTasks = async () => {
        try {
            const data = await getTasks()
            console.log("here is the data", data)
            setTasks(data)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        loadTasks()
    }, [])


    const handleDelete = async (id) => {
        try {
            await deleteTask(id)
            loadTasks()
        } catch (error) {
            console.log(error)
        }
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