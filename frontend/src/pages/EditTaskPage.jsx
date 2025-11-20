import TaskForm from '../components/TaskForm'
import { updateTask, getTask } from '../services/api'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'


export default function EditTaskPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [task, setTask] = useState(null)


    useEffect(() => {
        const load = async () => {
            const data = await getTask(id)
            setTask(data)
        }
        load()
    }, [id])


    const handleSubmit = async (values) => {
        await updateTask(id, values)
        navigate('/')
    }


    if (!task) return <p className="p-6">Loading...</p>


    return (
        <div className="p-6 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Edit Task</h1>
            <TaskForm onSubmit={handleSubmit} initialValues={task} />
        </div>
    )
}