import { useEffect, useState } from "react";
import Clock from "react-clock";
import 'react-clock/dist/Clock.css';
import bannerImg from "../assets/banner-img.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Banner = () => {
    const [value, setValue] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setValue(new Date()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <motion.div 
            className="hero min-h-screen" style={{backgroundImage: `url(${bannerImg})`}}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content flex flex-col lg:flex-row">
                <div className="max-w-md text-white">
                    <h1 className="mb-5 text-5xl font-bold">Master Your Day: Tasks Made Simple</h1>
                    <p className="mb-5">Elevate your daily grind. Organize tasks effortlessly, stay focused, and amplify productivity. Your journey to efficiency starts here—simplify life&apos;s demands with ease.</p>
                    <button className="btn btn-primary text-white"><Link to="/dashboard">Let&apos;s Explore</Link></button>
                </div>
                <Clock value={value} size={300} className="react-clock text-red-900" />
            </div>
        </motion.div>
    );
}

export default Banner