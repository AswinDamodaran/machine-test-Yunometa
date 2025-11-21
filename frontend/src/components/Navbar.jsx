import { Link } from 'react-router-dom'
import { User } from "lucide-react"
import Container from './common/Container'


export default function Navbar() {
    return (
        <nav className="bg-white shadow mb-6 p-2">
            <Container className='flex justify-between'>
                <Link to="/" className="text-xl font-bold">Task Manager</Link>
                <Link to="#" className=" hover:scale-120 border-2 rounded-2xl"><User /></Link>
            </Container>
        </nav>
    )
}