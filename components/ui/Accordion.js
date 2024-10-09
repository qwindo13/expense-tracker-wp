import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function Accordion(props) {
    const [isShowing, setIsShowing] = useState(false);

    const toggle = () => {
        setIsShowing(!isShowing);
    };

    return (
        <motion.div layout="position" className="border-2 p-4 rounded-2xl border-neutral-200 dark:border-neutral-900" onClick={toggle}>
            <div className="flex flex-row justify-between items-center">
                <button className="p-0 m-0 h-full text-left" type="button">
                    <h3 className="text-xl lg:text-2xl font-semibold text-[#2c2c2c] dark:text-white">{props.title}</h3>
                </button>
                <motion.div
                    animate={isShowing ? { rotate: 180 } : { rotate: 0 }}
                    className="h-8 w-8"
                >
                    <ChevronDown />
                </motion.div>
            </div>
            <div
                className={`pt-6 text-lg font-medium opacity-50 text-[#2c2c2c] dark:text-white ${isShowing ? '' : 'hidden'}`}
            >
                {props.children}
            </div>
        </motion.div>
    );
}
