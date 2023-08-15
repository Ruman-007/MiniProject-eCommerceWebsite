import React, { useEffect, useState } from 'react';
import { Link, NavLink, Navigate, useNavigate } from 'react-router-dom';
import styles from "./Header.module.scss";
import {FaShoppingCart, FaTimes, FaUserCircle} from "react-icons/fa";
import {HiOutlineMenuAlt3} from "react-icons/hi";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../../firebase/config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from '../../redux/slice/authSlice';
const logo=(
  <div className={styles.logo}>
            <Link to="/">
              <h2>e<span>Shop</span>.</h2>
            </Link>
  </div>
);
const cart=(
  <span className={styles.cart}>
                  <Link to="/cart">Cart <FaShoppingCart size={16}/><p>0</p></Link>
                </span>
);
const activeLink=({isActive})=>
  (isActive ? `${styles.active}` : "");

const Header = () => {
  const [showMenu,setShowMenu]=useState(false);
  const [uName,setUName]=useState("");
  const dispatch = useDispatch();

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
     
      if(user.displayName===null){
        const u1=user.email.slice(0,-10);
        const uname=u1.charAt(0).toUpperCase() + u1.slice(1);
        setUName(uname);
      }else{
       setUName(user.displayName);
      }



       dispatch(SET_ACTIVE_USER({
        email:user.email,
        userName:user.displayName ? user.displayName : user.displayName,
        userID:user.uid,
       }))
      } else {
        setUName("");
        dispatch(REMOVE_ACTIVE_USER())
      }
    });
  },[dispatch, uName])

  const toggleMenu=()=>{
    setShowMenu(!showMenu);
  };
  const hideMenu=()=>{
    setShowMenu(false);
  };

  const logOutUser=()=>{
    signOut(auth).then(() => {
      toast.success("Logout Successful...");
      navigate("/");
    }).catch((error) => {
        toast.error(error.message);
    });
  }



  const navigate=useNavigate();
  return (
    <header>
        <div className={styles.header}>
          {logo}
        
          <nav className={showMenu ?`${styles["show-nav"]}`:`${styles["hide-nav"]}`}>
            <div className={showMenu? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`:`${styles["nav-wrapper"]}`} onClick={hideMenu} >
            </div>

            <ul onClick={hideMenu}>
            <li className={styles["logo-mobile"]}>
                  {logo}
                  <FaTimes size={22} color="white" onClick={hideMenu}/>

              </li>
              <li>
                <NavLink to="/" className={activeLink}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={activeLink}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className={styles["header-right"]} onClick={hideMenu}>
                <span className={styles.links}>
    
                  <NavLink to="/login" className={activeLink}>Login</NavLink>
                  <a href="#/home" style={{color: "goldenrod"}}>
                    <FaUserCircle size={16}/>
                    Hi, {uName}
                  </a>
                  <NavLink to="/register" className={activeLink}>Register</NavLink>
                  <NavLink to="order-history" className={activeLink}>My Orders</NavLink>
                  <NavLink to="/" onClick={logOutUser}>LogOut</NavLink>
                </span>
                {cart}
            </div>
          </nav>
          <div className={styles["menu-icon"]}>
            {cart}
            <HiOutlineMenuAlt3 size={28} onClick={toggleMenu}/>
          </div>
        </div>
    </header>
  )
}

export default Header;
