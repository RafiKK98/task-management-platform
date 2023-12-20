import { useEffect, useState } from "react";
import Clock from "react-clock";
import 'react-clock/dist/Clock.css';
import bannerImg from "../assets/banner-img.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
    const [value, setValue] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setValue(new Date()), 1000);

        return () => {
        clearInterval(interval);
        };
    }, []);
    return (
        <div className="hero min-h-screen" style={{backgroundImage: `url(${bannerImg})`}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content flex flex-row">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary"><Link to="/dashboard">Let&apos;s Explore</Link></button>
                </div>
                <Clock value={value} size={300} className="react-clock text-red-900" />
            </div>
        </div>
    );
}

export default Banner