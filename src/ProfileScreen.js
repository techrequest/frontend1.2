import React, { useState, useContext } from 'react';
import AppContext from './AppContext';



const ProfileScreen = () => {

    const [ globalState, setGlobalState ] = useContext(AppContext);

    const [ state, setState ] = useState(
        {
            showErrors: false,
            loading: false,
            updateSuccess: false
        }
    )
    
    const formData = new FormData();
    
    // Undefined only before return
    let firstNameField;
    let lastNameField;
    let emailField;
    let passwordField;
    let phoneField;
    let addressLine1Field;
    let addressLine2Field;
    let addressLine3Field;
    let cityField;
    let stateField;
    let zipCodeField;
    let countryField;
    let tcsCheckBox;
    let photoUrlField;

    const attachFile = (event) => {
        // 1. create an array for file
        const files = Array.from(event.target.files)

        // 2. for every attachment, append file to formData
        files.forEach(
            (file, index) => {
                formData.append(index, file)
            }
        )
    }

    const updateUser = () => {
        const errors = [];
        // Validate the user's input
        if(firstNameField.value.length === 0) {
            errors.push("Please enter your first name!");
        }

        if(lastNameField.value.length === 0) {
            errors.push("Please enter your last name!");
        }

        // if(emailField.value.length === 0) {
        //     errors.push("Please enter your email!");
        // }

        // if(passwordField.value.length === 0) {
        //     errors.push("Please enter your password!");
        // }

        // If there are errors
        if(errors.length > 0) {
            setState(
                {
                    loading: false,
                    showErrors: true,
                    errors: errors,
                    updateSuccess: false
                }
            )
        } 
        // If no errors
        else {
            setState(
                {
                    ...state,
                    loading: true,
                }
            );

            // Capture all of user's response
            // 1. Create an object called formData
            // 2. For every field, add index and value to formData

            formData.append('firstName', firstNameField.value);
            formData.append('lastName', lastNameField.value)
            formData.append('email', emailField.value)
            formData.append('password', passwordField.value)
            formData.append('phoneNumber', phoneField.value)
            formData.append('addressLine1', addressLine1Field.value)
            formData.append('addressLine2', addressLine2Field.value)
            formData.append('addressLine3', addressLine3Field.value)
            formData.append('city', cityField.value)
            formData.append('state', stateField.value)
            formData.append('zipCode', zipCodeField.value)
            formData.append('country', countryField.value)
            formData.append('photoUrl', photoUrlField.value)

            // for (var pair of formData.entries()) {
            //     console.log(pair[0]+ ', ' + pair[1]); 
            // }


            // 4. Send to backend
            fetch(
                `http://localhost:8080/users/update`,
                {
                    method: 'PUT',
                    body: formData,
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                        //"Content-Type": "application/json"
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
                            updateSuccess: true
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


        {
            globalState.profile &&
            <div
                style={
                    {
                        backgroundImage: `url(${globalState.profile.photoUrl})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        width: '180px',
                        height: '180px',
                        margin: '0 auto',
                        display: 'block',
                        borderRadius: '100%'
                    }}
                />
        }


        <label>Enter your Firstname </label>
        <input 
        defaultValue={globalState.profile && globalState.profile.firstName}
        ref={(elem) => firstNameField = elem}
        className="field form-control" name="firstName" type="text" />

        <label>Enter your Lastname </label>
        <input 
        defaultValue={globalState.profile && globalState.profile.lastName}
        ref={(elem) => lastNameField = elem}
        className="field form-control" name="lastName" type="text" />

        <label>Enter your Email </label>
        <input 
        defaultValue={globalState.profile && globalState.profile.email}
        ref={(elem) => emailField = elem}
        className="field form-control" name="email" type="text" />

        <label>Enter a Password </label>
        <input 
        ref={(elem) => passwordField = elem}
        className="field form-control" name="password" 
        autocomplete="off" type="password" />

        <label>Enter your Phone </label>
        <input 
        defaultValue={globalState.profile && globalState.profile.phone}
        ref={(elem) => phoneField = elem}
        className="field form-control" name="phone" type="text" />

        <label>Enter your Address Line 1 </label>
        <input 
        defaultValue=" "
        ref={(elem) => addressLine1Field = elem}
        className="field form-control" name="phone" type="text" />

        <label>Enter your Address Line 2 </label>
        <input 
        defaultValue=" "
        ref={(elem) => addressLine2Field = elem}
        className="field form-control" name="phone" type="text" />

        <label>Enter your Address Line 3 </label>
        <input 
        defaultValue=" "
        ref={(elem) => addressLine3Field = elem}
        className="field form-control" name="phone" type="text" />

        <label>Enter your City </label>
        <input 
        defaultValue=" "
        ref={(elem) => cityField = elem}
        className="field form-control" name="phone" type="text" />

        <label>Enter your State </label>
        <input 
        defaultValue=" "
        ref={(elem) => stateField = elem}
        className="field form-control" name="phone" type="text" />

        <label>Enter your Country </label>
        <input 
        defaultValue=" "
        ref={(elem) => countryField = elem}
        className="field form-control" name="phone" type="text" />

        <label>Enter your Zipcode </label>
        <input 
        defaultValue=" "
        ref={(elem) => zipCodeField = elem}
        className="field form-control" name="phone" type="text" />

        <label>Upload your profile picture</label>
        <input 
        onChange={attachFile}
        className="field form-control" id="photo" name="file" 
        type="file" multiple="multiple"/>

        <input 
        ref={ (elem)=> photoUrlField = elem}
        defaultValue={globalState.profile && globalState.profile.photoUrl}
        className="field form-control" type="hidden"/>

        <br/><br/>

        {
            !state.loading &&
            <button 
                className="btn btn-primary"
                onClick={updateUser}
                style={
                    {
                        padding: "10px", 
                        fontSize: "16px"
                    }
                }>
                    Update
            </button>
        }

        {
            state.loading &&
            <div>Loading...</div>
        }

        {
            state.updateSuccess === true &&
            <div className="alert alert-success">Update successful!</div>
        }
        
    </div>
    )
}

export default ProfileScreen;