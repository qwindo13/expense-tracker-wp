import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function Accordion(props) {
    const [isShowing, setIsShowing] = useState(false);

    const toggle = () => {
        setIsShowing(!isShowing);
    };

    return (
        <motion.div layout="position" className="border-b-2 p-4  border-neutral-500 w-full" onClick={toggle}>
            <div className="flex flex-row justify-between items-center gap-8">
                <button className="p-0 m-0 h-full text-left" type="button">
                    <h3 className="text-xl lg:text-2xl font-medium text-white">{props.title}</h3>
                </button>
                <motion.div
                    animate={isShowing ? { rotate: 180 } : { rotate: 0 }}
                    className="h-8 w-8 flex items-center justify-center text-white"
                >
                    <ChevronDown />
                </motion.div>
            </div>
            <div
                className={`pt-6 text-lg font-medium opacity-50 text-white ${isShowing ? '' : 'hidden'}`}
            >
                {props.children}
            </div>
        </motion.div>
    );
}
