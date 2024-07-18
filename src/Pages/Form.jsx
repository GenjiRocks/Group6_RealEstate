import React, { useEffect, useState } from 'react';
import styles from '../Pages/Form.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
function Form() {

  const [userDetails , setUserDetails] = useState({
    username:'',
    email:'',
    password:''
    
  })
  console.log(userDetails);


  useEffect(() => {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    const handleRegisterClick = () => {
      container.classList.add(styles.containerActive);
    };

    const handleLoginClick = () => {
      container.classList.remove(styles.containerActive);
    };

    registerBtn.addEventListener('click', handleRegisterClick);
    loginBtn.addEventListener('click', handleLoginClick);

    return () => {
      registerBtn.removeEventListener('click', handleRegisterClick);
      loginBtn.removeEventListener('click', handleLoginClick);
    };n
  }, []);

  return (
    <>
    <div style={{backgroundColor: '#c9d6ff',background:'linear-gradient(to right, #e2e2e2, #c9d6ff)',display:'flex',
      justifyContent:'center', alignItems:'center', height:'100vh', margin:'0'}}>
    <div className={styles.formContainer} id="container">
      <div className={`${styles.formInnerContainer} ${styles.signUp}`}>
        <form>
          <h2>Create Account</h2>
          <span>or use your email for registration</span>
          <input type="text" placeholder="UserName" onChange={(e)=>
            setUserDetails({...userDetails,username:e.target.value})
          } />
          <input type="email" placeholder="Email" onChange={(e)=>
            setUserDetails({...userDetails,email:e.target.value})
          }
           />
          <input type="password" placeholder="Password"  onChange={(e)=>
            setUserDetails({...userDetails,password:e.target.value})
          }
          />
          <button type="button">Sign Up</button>
        </form>
      </div>
      <div className={`${styles.formInnerContainer} ${styles.signIn}`}>
        <form>
          <h1>Sign In</h1>
          <span>or use your email password</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forget Your Password?</a>
          <button type="button">Sign In</button>
        </form>
      </div>
      <div className={styles.toggleContainer}>
        <div className={styles.toggle}>
          <div className={`${styles.togglePanel} ${styles.toggleLeft}`}>
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of the site's features</p>
            <button className={styles.hidden} id="login" type="button">Sign In</button>
          </div>
          <div className={`${styles.togglePanel} ${styles.toggleRight}`}>
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all of the site's features</p>
            <button className={styles.hidden} id="register" type="button">Sign Up</button>
          </div>
        </div>
      </div>

    </div>
    
    </div>
    <div style={{marginTop:'-80px' }} className='d-flex align-items-center justify-content-center'>
            <h4> <Link to={'/'} style={{textDecoration:'none'}}><FontAwesomeIcon icon={faArrowLeft}  className='me-1'/> Back to home</Link></h4>
      </div>
    

    </>
  );
}

export default Form;
