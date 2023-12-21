import { useState } from "react";
import useAuth from "../hooks/useAuth";
import DatePicker from "react-datepicker";
import { Navigate, useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const EditTask = () => {
    
    const { user } = useAuth();
    const { taskId } = useParams();
    const loadedTask = useLoaderData();
    const { title, description, deadline, priority } = loadedTask;

    const [startDate, setStartDate] = useState(new Date());
    const handleEditTask = event => {
        event.preventDefault();
        const form = event.target;
        const updatedTitle = form.title.value;
        const updatedDescription = form.description.value;
        const updatedDeadline = form.deadline.value;
        const updatedPriority = form.priority.value;
        const updatedTask = { 
            title: updatedTitle,
            description: updatedDescription,
            deadline: updatedDeadline,
            priority: updatedPriority
        };
        fetch(`http://localhost:5000/tasks/${taskId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Task Updated Successfully!',
                    position: 'top-right',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    timer: 1500
                })
                Navigate('/dashboard');
            }
        })
    }

    return (
        <div className="w-full bg-primary">
            <div className="flex justify-between pt-8 px-8">
                <h2 className="text-3xl">Edit Task</h2>
                <div className="flex">
                    <img className="mask mask-circle w-5 h-5" src={user.photoURL} alt="user photo" />
                    <h2 className="text-xl"> { user.displayName} </h2>
                </div>
            </div>
            <motion.div className="mt-8 pt-8 px-8 border rounded-tl-xl bg-white h-full"
                initial={{opacity: 0, backgroundColor: 'white'}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
            >
                <form onSubmit={handleEditTask} className="w-1/2 mx-auto grid grid-cols-1 lg:grid-cols-2">
                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text text-xl font-semibold">Task Title</span>
                            </div>
                            <input type="text" placeholder="Title" name="title" defaultValue={title} className="input input-bordered w-full max-w-xs" required />
                        </label>
                    </div>
                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text text-xl font-semibold">Deadline</span>
                            </div>
                            <DatePicker className="input input-bordered w-full max-w-xs" name="deadline" selected={startDate} onChange={(date) => setStartDate(date)} shouldCloseOnSelect={true} required />
                        </label>
                    </div>
                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text text-xl font-semibold">Description</span>
                            </div>
                            <textarea className="textarea textarea-bordered h-24" name="description" defaultValue={description} placeholder="Description" required></textarea>
                        </label>
                    </div>
                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text text-xl font-semibold">Priority</span>
                            </div>
                            <select name="priority" className="select select-bordered w-full max-w-xs" required>
                                <option disabled selected>Priority</option>
                                <option selected={priority == 'Low'}>Low</option>
                                <option selected={priority == 'Moderate'}>Moderate</option>
                                <option selected={priority == 'High'}>High</option>
                            </select>
                        </label>
                    </div>
                    <div className="my-2">
                        <input type="submit" value="Edit Task" className="btn btn-primary text-white" />
                    </div>
                </form>
            </motion.div>
        </div>
    )
}

export default EditTask