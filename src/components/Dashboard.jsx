import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Outlet, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';

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
        <main className='flex'>
            <Sidebar className='bg-primary'>
                <Menu className='mx-2'>
                    <MenuItem className='bg-secondary my-5 mx-2'> Documentation </MenuItem>
                    <MenuItem className='bg-secondary my-5 mx-2'> Calendar </MenuItem>
                    <MenuItem onClick={handleLogout} className='bg-secondary my-5 mx-2'> Logout </MenuItem>
                </Menu>
            </Sidebar>
            <Outlet />
        </main>
    )
}

export default Dashboard