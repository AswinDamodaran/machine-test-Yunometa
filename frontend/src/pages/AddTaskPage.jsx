import TaskForm from '../components/TaskForm'
import { createTask } from '../services/api'
import { useNavigate } from 'react-router-dom'


export default function AddTaskPage() {
    const navigate = useNavigate()


    const handleSubmit = async (values) => {
        await createTask(values)
        navigate('/')
    }


    return (
        <div className="p-6 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Add Task</h1>
            <TaskForm onSubmit={handleSubmit} />
        </div>
    )
}