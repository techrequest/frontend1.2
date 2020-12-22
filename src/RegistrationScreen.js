import React, { useState } from 'react';

const RegistrationScreen = () => {


    const [ state, setState ] = useState(
        {
            showErrors: false,
            loading: false,
            registeredSuccess: false
        }
    )
    // Undefined only before return
    let firstNameField;
    let lastNameField;
    let emailField;
    let passwordField;
    let phoneField;
    let addressLine1;
    let addressLine2;
    let addressLine3;
    let city;
    let stateLocation;
    let zipCode;
    let country;
    

    const registerUser = () => {
        const errors = [];
        // Validate the user's input
        if(firstNameField.value.length === 0) {
            errors.push("Please enter your first name!");
        }

        if(lastNameField.value.length === 0) {
            errors.push("Please enter your last name!");
        }

        if(emailField.value.length === 0) {
            errors.push("Please enter your email!");
        }

        if(passwordField.value.length === 0) {
            errors.push("Please enter your password!");
        }

        if(phoneField.value.length === 0){
            errors.push("Please enter your phone number! ");
        }

        if(addressLine1.value.length === 0){
            errors.push("Please enter your Address Line 1! ");
        }

        if(addressLine2.value.length === 0){
            errors.push("Please enter your Address Line 2! ");
        }

        if(city.value.length === 0){
            errors.push("Please enter your City! ");
        }

        if(stateLocation.value.length === 0){
            errors.push("Please enter your State! ");
        }

        if(country.value.length === 0){
            errors.push("Please enter your country! ");
        }

        if(zipCode.value.length === 0){
            errors.push("Please enter your Zip Code! ");
        }
        // If there are errors
        if(errors.length > 0) {
            setState(
                {
                    loading: false,
                    showErrors: true,
                    errors: errors,
                    registeredSuccess: false
                }
            )
        } 
        // If no errors
        else {
            setState(
                {
                    loading: true,
                    showErrors: false,
                    errors: null,
                    registeredSuccess: false
                }
            );

            // Capture all of user's response
            // 1. Create an object called formData
            // 2. For every field, add index and value to formData
            const formData = {
                firstName: firstNameField.value,
                lastName: lastNameField.value,
                email: emailField.value,
                password: passwordField.value,
                phone: phoneField.value,
                addressLine1: addressLine1.value,
                addressLine2: addressLine2.value,
                addressLine3: addressLine3.value,
                city: city.value,
                stateLocation: stateLocation.value,
                zipCode: zipCode.value,
                country: country.value
            };

            // 4. Send to backend
            fetch(
                'http://localhost:3000/users/register',
                {
                    method: 'POST',
                    body: JSON.stringify(formData),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
            // First, convert string from backend to json
            .then(
                (backendResponse) => backendResponse.json()
            )
            // Then, we can read the json from backend
            .then(
                (json) => {
                    console.log(json);
                    setState(
                        {
                            loading: false,
                            showErrors: false,
                            errors: null,
                            registeredSuccess: true
                        }
                    );
                }
            )
            // If promise did not resolve
            .catch(
                (error) => {
                    console.log('an error occured', error)
                }
            )

        }
    }

    if( state.registeredSuccess === true ) {
        return(
            <div className="App">
                <div 
                style={{maxWidth: 600}}
                className="container mt-5 mb-5">
                    <div className="alert alert-success">
                        Account registered succesfully!
                    </div>

                    <button className="btn btn-primary">Login</button>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="container" 
            style={
                {
                    maxWidth: "40em"
                }
            }>

            {
                state.showErrors === true && 
                <div className="error-messages alert alert-danger">
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

            <label>Enter your firstname *</label>
            <input 
            ref={(elem) => firstNameField = elem}
            className="field form-control" name="firstName" type="text" />

            <label>Enter your lastname *</label>
            <input 
            ref={(elem) => lastNameField = elem}
            className="field form-control" name="lastName" type="text" />

            <label>Enter your email *</label>
            <input 
            ref={(elem) => emailField = elem}
            className="field form-control" name="email" type="text" />

            <label>Enter a password *</label>
            <input 
            ref={(elem) => passwordField = elem}
            className="field form-control" name="password" 
            autocomplete="off" type="password" />

            <label>Enter your phone </label>
            <input 
            ref={(elem) => phoneField = elem}
            className="field form-control" name="phone" type="text" />

            <label>Enter your Address Line 1</label>
            <input 
            ref={(elem) => addressLine1 = elem}
            className="field form-control" name="addressLine1" type="text" />

            <label>Enter your Address Line 2 </label>
            <input 
            ref={(elem) => addressLine2 = elem}
            className="field form-control" name="addressLine2" type="text" />
            
            <label>Enter your Address Line 3 (optional)</label>
            <input 
            ref={(elem) => addressLine3 = elem}
            className="field form-control" name="addressLine3" type="text" />

            <label>Enter your City</label>
            <input 
            ref={(elem) => city = elem}
            className="field form-control" name="city" type="text" />

            <label>Enter your State</label>
            <input 
            ref={(elem) => stateLocation = elem}
            className="field form-control" name="stateLocation" type="text" />

            <label>Enter your Zipcode</label>
            <input 
            ref={(elem) => zipCode = elem}
            className="field form-control" name="zipCode" type="text" />

            <label>Enter your Country</label>
            <input 
            ref={(elem) => country = elem}
            className="field form-control" name="country" type="text" />

            {
                !state.loading && !state.registeredSuccess && <div className="acenter">
                <button
                    className="btn btn-primary"
                    onClick={registerUser}
                    style={
                        {
                            
                            padding: "10px", 
                            fontSize: "16px"
                        }
                    }>
                       Register
                </button>
                </div> 
            }

            {
                state.loading &&
                <div>Loading...</div>
            }
            
        </div>
        )
    }
}

export default RegistrationScreen;