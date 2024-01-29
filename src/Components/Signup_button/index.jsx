import style from "./style.module.css";

const SplButton = ({ children, ...props }) => {
    return (
        <button className={style.btn} {...props}>
            {children}{" "}
        </button>
    );
};

export default SplButton;
