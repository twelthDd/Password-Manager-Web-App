/* eslint-disable react/no-unescaped-entities */
// import React from "react";
import "./styleSheets/loginPage.css";
// import loginRequest from "../api/loginRequest";

export const LoginPage = () => {

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the form from submitting the default way
        let email = document.getElementById("emailInput").value;
        let password = document.getElementById("passwordInput").value;
        let rememberMe = document.getElementById("rememberMeInput").checked;
        console.log(email, password, rememberMe);
        // loginRequest(email, password, rememberMe);  

        // Reset the form
        event.target.reset();
    };

    return (
        <body>
            <section>
                <div className="form-box">
                    <div className="form-value">
                        <form onSubmit={handleSubmit}>
                            <h2>Login</h2>
                            <div className="inputbox">
                                {/* <ion-icon name="mail-outline"></ion-icon> */}
                                <input type="email" required id="emailInput"/>
                                <label htmlFor="">Email</label>
                            </div>
                            <div className="inputbox">
                                {/* <ion-icon name="lock-closed-outline"></ion-icon> */}
                                <input type="password" required id="passwordInput"/>
                                <label htmlFor="">Password</label>
                            </div>
                            <div className="forget">
                                <label htmlFor="">
                                    <input type="checkbox" id="rememberMeInput"/>Remember Me
                                    <a href="#">Forget Password</a>
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
};
