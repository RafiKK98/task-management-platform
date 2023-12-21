import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

const Dashboard = () => {

    const { logOut, setUser } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut()
        .then(() => {
            setUser(null);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User logged out successfully.',
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/login');
        })
        .catch(error => console.log(`Error: ${error}`))
    }

    return (
        <main className='flex h-screen'>
            <motion.Sidebar className='bg-primary pr-2'>
                <Menu className='mx-2'>
                    <MenuItem className='bg-secondary my-5 mx-2'> <Link to="/dashboard">My Tasks</Link> </MenuItem>
                    <MenuItem className='bg-secondary my-5 mx-2'> <Link to="/dashboard/addTask">Add a Task</Link> </MenuItem>
                    <MenuItem className='bg-secondary my-5 mx-2'> <Link to="/">Home</Link> </MenuItem>
                    <MenuItem onClick={handleLogout} className='bg-secondary my-5 mx-2'> Logout </MenuItem>
                </Menu>
            </motion.Sidebar>
            <Outlet />
        </main>
    )
}

export default Dashboard