import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth"
import useTasks from "../hooks/useTasks";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const DashboardHome = () => {

    const { user } = useAuth();
    const [ tasks, tasksLoading, refetch ] = useTasks();

    const handleDeleteTask = id => {
        fetch(`https://task-management-platform-server-chi.vercel.app/tasks/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Task deleted!',
                    position: 'top-right',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    timer: 1500
                })
                refetch();
            }
        })
    }
    const handleTaskComplete = id => {
        fetch(`https://task-management-platform-server-chi.vercel.app/tasks/${id}`, {
            method: "PATCH"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Task marked as complete!',
                    position: 'top-right',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    timer: 1500
                })
                refetch();
            }
        })
    }

    return (
        <div className="w-full bg-primary">
            <div className="flex justify-between pt-8 px-8">
                <h2 className="text-3xl">My Tasks</h2>
                <div className="flex gap-5">
                    <img className="mask mask-circle w-5 h-5" src={user.photoURL} alt="user photo" />
                    <h2 className="text-xl"> { user.displayName} </h2>
                </div>
            </div>
            <motion.div className="mt-8 pt-8 px-8 border rounded-tl-xl bg-white h-full"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
            >
                <div className="overflow-x-auto">
                    <h2 className="text-2xl">To Do List</h2>
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Deadline</th>
                                <th>Priority</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            tasks.map((task, taskIdx) => (
                                <tr key={task._id} className="hover">
                                    <th>{taskIdx + 1}</th>
                                    <td>{task.title}</td>
                                    <td>{task.description}</td>
                                    <td>{task.deadline}</td>
                                    <td>{task.priority}</td>
                                    <td>{task.status}</td>
                                    <td className="space-x-2">
                                        <button className="btn btn-secondary" disabled={task.status == 'Completed'}><Link to={`/dashboard/editTask/${task._id}`}>Update</Link></button>
                                        <button onClick={() => handleTaskComplete(task._id)} className="btn btn-success" disabled={task.status == 'Completed'}>Mark Completed</button>
                                        <button onClick={() => handleDeleteTask(task._id)} className="btn btn-error" disabled={task.status == 'Completed'}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </motion.div>
        </div>
    )
}

export default DashboardHome