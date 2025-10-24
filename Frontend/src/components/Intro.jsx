import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../Logotipo/logo.png";

export default function Intro({ onFinish }) {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const audio = new Audio("/intro-sound.mp3");
        audio.play();
        const timer = setTimeout(() => onFinish(), 4000);
        return () => clearTimeout(timer);
    }, [onFinish]);

    if (!show) return null;

    return (
        <div className="flex items-center justify-center h-screen bg-black">
            <motion.img
                src={logo}
                alt="Nexora Logo"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                    scale: [0.8, 1.1, 1],
                    opacity: [0, 1, 1],
                    filter: ["brightness(0.6)", "brightness(1.5)", "brightness(1)"],
                }}
                transition={{ duration: 3, ease: "easeInOut" }}
                className="w-64"
            />
        </div>
    );
}
