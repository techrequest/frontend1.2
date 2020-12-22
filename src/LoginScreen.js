import React, { useState, useContext } from 'react';
import {Link} from 'react-router-dom';
import './App.css'
import SideBarMenu from './SideBarMenu';
import AppContext from './AppContext';



const LoginScreen = () => {
    
    let emailField;
    let passwordField;
    
    const [globalState, setGlobalState] = useContext(AppContext);

    const [state,setState] = useState(
        {
            showErrors:false,
            loading: false,
            loginSuccess: false
        }
    )

    const loginUser = () => {
        const errors =[];

        if(emailField.value.length === 0){
            errors.push("Please enter your email!");
        }
        if(passwordField.value.length === 0){
            errors.push("Please enter a password!");
        }
        if(errors.length > 0){
            setState(
                {
                    ...state,
                    showErrors:true,
                    errors: errors

                }

            )
            console.log(errors);
        }
        else{
            setState(
                {
                    ...state,
                    loading: true,
                    showErrors: false,
                    errors: null
                }

            );
        const formData = {
            email: emailField.value,
            password: passwordField.value
        };

        fetch(
            'http://localhost:3001/users/login',
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            }
        )
        .then(
            (backendResponse) => backendResponse.json()
        )
        .then(
            (json) => {
                if(json.theToken){
                    setState(
                        {
                            ...state,
                            loading: false,
                            loginSuccess: true
                        }
                    );
                    setGlobalState({
                        ...globalState,
                        loggedIn : true
                    });
                    localStorage.setItem('jwt', json.theToken);
                }
                else{
                    setState(
                        {
                            ...state,
                            loading:false
                        }
                    );
                    alert("Login not successful, please check your details and try again");
                }


            }
        )
        .catch(
            (error) => {
                console.log("an error ocurred", error);
            }

        )
        }
    }

        if(state.loginSuccess === true ) {
            return( 
                  
                <div className="App">
                    <div 
                    style={{maxWidth: 600}}
                    className="container mt-5 mb-5">
                        <div className="alert alert-success">
                            You have logged in succesfully!
                        </div>
                        
                        <Link to = "/" className = "btn btn-primary text-center"> Home</Link>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="App container" style ={{maxWidth: "100%"}}>
                <h1>Login</h1>
                <br/>

                        <div className="product-view" >
                                <div className="container-fluid">
                                    <div className="row">
                                                <div className="col-md-12">
                                                       {
                                                        state.showErrors === true && 
                                                        <div className="error-messages alert alert-danger pt-3 pb-1">
                                                            <ol>
                                                            { 
                                                                state.errors.map(
                                                                    (error) =>
                                                                        <li>
                                                                            {error}
                                                                        </li>
                                                                ) 
                                                            }
                                                            </ol>
                                                        </div>
                                                    
                                                        }
                                                    
                                                        <div className="form-group">
                                                                <label for="exampleInputEmail1">Email address</label>
                                                                <input
                                                                ref = {
                                                                        (elem) =>
                                                                        emailField = elem
                                                                    }
                                                                type="email" className="form-control col-md-4" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                                        </div>
                                                        <div className="form-group">
                                                                <label for="exampleInputPassword1">Password</label>
                                                                <input 
                                                                ref = {
                                                                    (elem) =>
                                                                    passwordField = elem
                                                                }
                                                                type="password" className="form-control col-md-4" id="exampleInputPassword1"/>
                                                        </div>
                                                        {
                                                                !state.loading && !globalState.loggedIn &&
                                                                <button 
                                                                    className="btn btn-primary"
                                                                    onClick={loginUser}
                                                                    style={
                                                                        {   
                                                                            padding: "10px", 
                                                                            fontSize: "16px"
                                                                        }
                                                                    }>
                                                                        Login
                                                                </button>
                                                            }

                                                            {
                                                                state.loading &&
                                                                <div>Loading...</div>
                                                            }
                                                                
                                                    </div>
                                                </div>
                                            </div>
                                            </div>

                                    </div>             
            );
                                                            }
                                                        }
                                                    
                                                    

export default LoginScreen;