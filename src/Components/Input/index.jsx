import React, { forwardRef, useId } from "react";
import styles from "./styles.module.css"

const input = forwardRef(
    ({ label, type = "text", className = "", ...props }, ref) => {
        const id = useId();
        return (
            <div style={{width : "100%"}}>
                {label && (
                    <label className={styles.label} htmlFor={id}>
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    type={type}
                    className={styles.input-container}
                    {...props}
                    id={id}
                ></input>
            </div>
        );
    }
);

export default input;
