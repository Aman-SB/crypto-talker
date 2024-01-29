import { useState } from "react";
import authService from "../../Appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../Store/authSlice";
import { Button, Input, Logo } from "../index";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import styles from "./styles.module.css";

const Signup = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const create = async (data) => {
        setError("");
        try {
            const userData = await authService.createAccount(data);
            if (userData) {
                const currUser = await authService.getCurrentUser();
                if (currUser) dispatch(login(currUser));
                navigate("/");
            }
        } catch (error) {}
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper_container}>
                <div className={styles.logo_container}>
                    <span className={styles.logo_span}>
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className={styles.h2_inside}>Sign up to your account</h2>
                <p className={styles.p_text}>
                    Already have any account?&nbsp;
                    <Link to="/login" className={styles.link_signin}>
                        Sign In
                    </Link>
                </p>
                {error && <p className={styles.error_text}>{error}</p>}
                <form onSubmit={handleSubmit(create)}>
                    <div className={styles.input_container}>
                        <Input
                            label="Full Name: "
                            placeholder="Enter you full Name"
                            {...register("name", {
                                required: true,
                            })}
                        />
                        <Input
                            label="Email:"
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatter: (value) =>
                                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                                            value
                                        ) ||
                                        "Email address must be valid address",
                                },
                            })}
                        />
                        <Input
                            label="Password:"
                            placeholder="Enter your password"
                            type="password"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        <Button type="submit" styles={{ width: "100%" }}>
                            {" "}
                            Create Account{" "}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
