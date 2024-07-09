/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { useContext } from 'react'; // Remove the duplicate import statement
import "./styleSheets/loginPage.css";
import loginRequest from '../api/loginRequest';
import { useNavigate } from 'react-router-dom';
import { tokenContext } from '../App';

export const LoginPage = () => {

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const {token, setToken} = useContext(tokenContext);
    const navigate = useNavigate();
    const  handleSubmit = (e) => {
        e.preventDefault(); 
        loginRequest(email, password)
        .then(({token}) => {
            setToken(token)
            navigate("/")
        }).catch(err => {
            setError(err.message)
        })
        
    }

    return (
        <body>


            <section>
                <div className="form-box">
                    <div className="form-value">
                        <form onSubmit={handleSubmit}>
                            <h2>Login</h2>
                            <div className= {"errorBox"} style={{color: "red"}}> {error}</div>
                            <div className="inputbox">
                                {/* <ion-icon name="mail-outline"></ion-icon> */}
                                <input type="email" required id="emailInput" onChange={(e)  => setEmail(e.target.value)}/>
                                <label htmlFor="">Email</label>
                            </div>
                            <div className="inputbox">
                                {/* <ion-icon name="lock-closed-outline"></ion-icon> */}
                                <input type="password" required id="passwordInput" onChange={(e)  => setPassword(e.target.value)}/>
                                <label htmlFor="">Password</label>
                            </div>
                            <div className="forget">
                                <label htmlFor="">
                                    <input type="checkbox" id="rememberMeInput"/>Remember Me    
                                    <a href="#">   Forget Password</a>
                                </label>
                            </div>
                            <button type="submit">Log in</button>
                            <div className="register">
                                <p>Don't have an account? <a href="#">Register</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {/* <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script> */}
        </body>
    );
}