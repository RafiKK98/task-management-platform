import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";

const SignUp = () => {

    const { createUser, updateUserProfile, setUser, googleSignIn } = useAuth();
    const navigate = useNavigate();

    const handleSignUp = event => {
        event.preventDefault();
        const form  = event.target;
        const name = form.floating_name.value;
        const email = form.floating_email.value;
        const password = form.floating_password.value;
        const photoUrl = form.floating_photoUrl.value;
        const userData = {
            name: name,
            email: email,
            password: password,
            photoUrl: photoUrl
        }
        console.log(userData);
        createUser(email, password)
        .then((result) => {
            const loggedUser = result.user;
            setUser(loggedUser);
            updateUserProfile(name, photoUrl)
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User created successfully.',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/dashboard');
            })
        })
        .catch(error => console.log(`Error: ${error}`))
    }

    const handleGoogleLogin = () => {
        googleSignIn()
        .then((result) => {
            const loggedUser = result.user;
            setUser(loggedUser);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User logged in successfully.',
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/dashboard');
        })
        .catch(error => console.log(`Error: ${error}`))
    }

    return (
        <div className="flex flex-col justify-center gap-4 h-screen">
            <h1 className="text-center text-3xl">Welcome</h1>
            <form onSubmit={handleSignUp} className="max-w-md w-96 mx-auto p-5 border-2 border-secondary rounded-xl">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" required placeholder=" " />
                    <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" required placeholder=" " />
                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_photoUrl" id="floating_photoUrl" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" required placeholder=" " />
                    <label htmlFor="floating_photoUrl" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Photo Url</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" required placeholder=" " />
                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>
                <input type="submit" value={`Sign Up`} className="btn btn-primary text-white rounded-lg" />
            </form>
            <p className="text-center">Already have an account? Please <Link to="/login" className="text-primary">Login</Link></p>
            <p className="text-center">Back to <Link to="/" className="text-primary">Home</Link></p>
            <div className="text-center flex mx-auto">
                <button onClick={handleGoogleLogin} className="btn btn-primary rounded-lg text-white"><FaGoogle /></button>
            </div>
        </div>
    )
}

export default SignUp