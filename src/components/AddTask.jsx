import { useState } from "react";
import useAuth from "../hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const AddTask = () => {

    const [startDate, setStartDate] = useState(new Date());
    const { user } = useAuth();

    const handleAddTask = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        const deadline = form.deadline.value;
        const priority = form.priority.value;
        console.log(title, description, deadline, priority);
        const newTask = {
            title, 
            description,
            deadline,
            priority,
            email: user.email,
            status: 'Ongoing'
        }

        fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTask)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Task Added Successfully!',
                    position: 'top-right',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    timer: 1500
                })
                event.target.reset();
            }
        })
    }

    return (
        <div className="w-full bg-primary">
            <div className="flex justify-between pt-8 px-8">
                <h2 className="text-3xl">Add a Task</h2>
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
                <form onSubmit={handleAddTask} className="w-1/2 mx-auto grid grid-cols-1 lg:grid-cols-2">
                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text text-xl font-semibold">Task Title</span>
                            </div>
                            <input type="text" placeholder="Title" name="title" className="input input-bordered w-full max-w-xs" required />
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
                            <textarea className="textarea textarea-bordered h-24" name="description" placeholder="Description" required></textarea>
                        </label>
                    </div>
                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text text-xl font-semibold">Priority</span>
                            </div>
                            <select name="priority" className="select select-bordered w-full max-w-xs" required>
                                <option disabled selected>Priority</option>
                                <option>Low</option>
                                <option>Moderate</option>
                                <option>High</option>
                            </select>
                        </label>
                    </div>
                    <div className="my-2">
                        <input type="submit" value="Add Task" className="btn btn-primary text-white" />
                    </div>
                </form>
            </motion.div>
        </div>
    )
}

export default AddTask