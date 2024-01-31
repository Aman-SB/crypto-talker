import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../../Store/authSlice";
import { Input, Logo, SplButton } from "../index";
import { useDispatch } from "react-redux";
import authService from "../../Appwrite/auth";
import { useForm } from "react-hook-form";
import styles from "./styles.module.css";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");

    const login = async (data) => {
        setError("");
        try {
            const session = await authService.login(data);
            if (session) {
                const userData = await authService.getCurrentUser();
                if (userData) dispatch(authLogin(userData));
                navigate("/home");
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.login_box}>
                <div className={styles.logo_container}>
                    <Logo />
                </div>
                <h2 className={styles.h2_text}>Sign in to your account</h2>
                <p className={styles.p_text}>
                    Don&apos;t have any account?&nbsp;
                    <Link to="/signup" className={styles.link}>
                        Sign up
                    </Link>
                </p>
                {error && <p className={styles.error_text}>{error}</p>}
                <form
                    onSubmit={handleSubmit(login)}
                    style={{ marginTop: "2rem" }}
                >
                    <div className={styles.input_container}>
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
                        <SplButton type="submit">Sign in</SplButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
