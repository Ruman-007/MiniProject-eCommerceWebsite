import React, { useState } from 'react';
import styles from "./auth.module.scss";
import loginImg from "../../assets/login.png";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCaretDown, FaGoogle } from 'react-icons/fa';
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase/config';
import Loader from '../../components/loader/Loader'; 
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const provider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            toast.success("Login Successfully...");
        }).catch((error) => {
            const errorCode = error.code;
            toast.error(error.message);
            navigate("/");
        });
    }

    const loginUser = (e) => {
        e.preventDefault();
        setIsLoading(true);

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setIsLoading(false);
            toast.success("Login Successful...");
            navigate("/");
        })
        .catch((error) => {
            setIsLoading(false);
            toast.error(error.message);
        });
    };

    return (
        <>
            {isLoading && <Loader/>}
            <section className={`container ${styles.auth}`}>
                <div className={styles.img}>
                    <img src={loginImg} alt="Login" width="400" />
                </div>
                <div className={styles.form}>
                    <h2>Login</h2>
                    <form onSubmit={loginUser}>
                        <input type="text" placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button className="--btn --btn-primary --btn-block">Login</button>
                        <div className={styles.links}>
                            <Link to="/reset">Reset Password</Link>
                        </div>
                        <p>-- or --</p>
                    </form>
                    <button type="button" className="--btn --btn-danger --btn-block" onClick={signInWithGoogle}>
                        <FaGoogle color="white" /> &nbsp;Login With Google
                    </button>
                    <span className={styles.register}>
                        <p>Don't have an account?</p>
                        <Link to="/register">&nbsp;Register</Link>
                    </span>
                </div>
            </section>
        </>
    );
}

export default Login;
