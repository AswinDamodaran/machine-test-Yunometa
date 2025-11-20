import { useState } from 'react'


export default function TaskForm({ onSubmit, initialValues }) {
    const [values, setValues] = useState(
        initialValues || { title: '', description: '', status: 'pending' }
    )


    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        if (!values.title.trim()) {
            alert('Title is required')
            return
        }
        onSubmit(values)
    }


    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
            <div>
                <label className="block mb-1 font-medium">Title</label>
                <input
                    type="text"
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                />
            </div>


            <div>
                <label className="block mb-1 font-medium">Description</label>
                <textarea
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                />
            </div>


            <div>
                <label className="block mb-1 font-medium">Status</label>
                <select
                    name="status"
                    value={values.status}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                >
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                </select>
            </div>


            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded w-full"
            >
                Save
            </button>
        </form>
    )
}