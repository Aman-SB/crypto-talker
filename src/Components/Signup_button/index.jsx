import { toast } from "react-toastify";
import style from "./style.module.css";

const SplButton = ({ children, userData = "user", ...props }) => {
    const handletoast = (e) => {
        e.preventDefault();
        console.log("toasting");
        toast.success("Welcome ", userData);
    };
    return (
        <button className={style.btn} {...props} onClick={() => handletoast}>
            {children}{" "}
        </button>
    );
};

export default SplButton;
