import React, { useState } from 'react'
import styles from "./auth.module.scss"
import registerImg from "../../assets/register.png";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase/config";
import Loader from '../../components/loader/Loader';
const Register = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [cPassword,setCPassword]=useState("");
    const [isLoading,setIsLoading]=useState(false);
    const navigate =useNavigate();

    const registerUser=(e)=>{
        e.preventDefault();
        if(password!== cPassword){
            toast.error("Passwords do not match.");
        }
        setIsLoading(true);

        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    setIsLoading(false);
    toast.success("Registration Successful...");
    navigate("/login");
  })
  .catch((error) => {
    
    toast.error(error.message);
    setIsLoading(false);
});
    }

  return (
    <>
    <ToastContainer/>
    {isLoading && <Loader/>}
    <section className={`container ${styles.auth}`}>
    
    <div className={styles.form}>
        <h2>Register</h2>
        
        <form action="" onSubmit={registerUser}>
            <input type="text" placeholder='Email' required value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <input type="password" placeholder='Password' required value={password} onChange={(e)=> setPassword(e.target.value)} />
            <input type="password" placeholder='Conform Password' required value={cPassword} onChange={(e)=> setCPassword(e.target.value)}/>
            <button type='submit' className="--btn --btn-primary --btn-block">Sign Up</button>
            <div className={styles.links}>
            </div>
        </form>
        <span className={styles.register}>
            <p>Already have an account?</p>
            <Link to="/login">&nbsp;Login</Link>
        </span>

    </div>
    <div className={styles.img}>
        <img src={registerImg} alt="Login" width="400" />
    </div>
</section>
</>
  )
}

export default Register
