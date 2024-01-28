import { motion, useScroll } from "framer-motion";

function Scroll() {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            className="progress-bar"
            style={{ scaleX: scrollYProgress }}
        />
    );
}

export default Scroll;