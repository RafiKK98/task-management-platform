import { motion } from "framer-motion";
import image from "/fav-icon.png"

const TargetAudienceSection = () => {
    const targetAudience = [
        'Developers',
        'Corporate Professionals',
        'Bankers',
        'Students'
    ];

    return (
        <motion.section 
            className="bg-gray-100 p-8 flex flex-col lg:flex-row gap-10 items-center"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
        >
            <figure>
                <img src={image} alt="section img" />
            </figure>
            <div className="px-10">
                <h2 className="text-3xl font-bold mb-4">Who Can Benefit?</h2>
                <ul className="list-[square] ml-6">
                {
                    targetAudience.map((audience, index) => (
                        <li key={index} className="text-lg mb-2">
                        {audience}
                        </li>
                    ))
                }
                </ul>
                <p className="mt-4">
                    Whether you&apos;re a developer, corporate professional, banker, or anyone seeking enhanced productivity,
                    our task manager is designed for you.
                </p>
            </div>
        </motion.section>
    );
};

export default TargetAudienceSection;