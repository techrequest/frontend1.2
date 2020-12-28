import React, { useContext } from 'react';
import { Route, Link } from 'react-router-dom';
import AppContext from './AppContext';
import NavBar from './NavBar';


const LayoutRoute = (props) => {

    const [globalState, setGlobalState] = useContext(AppContext);

    const handleLogOut = () => {
        localStorage.removeItem('jwt');
        setGlobalState(
            {
                ...globalState,
                loggedIn: false
            }
        )
    }

    return (
        <React.Fragment>
        <div>
            <NavBar extraComponent={

                globalState.loggedIn ?
                <React.Fragment>
                   <div className="collapse navbar-collapse pl-5" ><b>
                     <ul className="navbar-nav mr-auto">
                         <li>
                         <Link to='/editprofile'
                    className="nav-link">Edit Profile</Link>
                         </li>
                        <li className="nav-item active">
                    <Link to='/logout' onClick={handleLogOut} 
                    className="nav-link">Logout</Link>
                       </li>
                            </ul>
                        </b>
                    </div>
                </React.Fragment> :

                <React.Fragment>
                     <div className="collapse navbar-collapse pl-5" ><b>
                     <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                                    <Link to="/login" className="nav-link">Login</Link>
                                    </li><li className="nav-item active">
                                    <Link to="/registeracc" className="nav-link">Register</Link>
                                </li>
                            </ul>
                        </b>
                    </div>
                </React.Fragment>
                }>

                <div className="collapse navbar-collapse pr-5" ><b>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                        <Link to="/" className="nav-link" > Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/serviceproviders" className="nav-link" > Service Providers List</Link>
                        </li>
                        <li className="nav-item dropdown active">
                            <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Service Categories</Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                    <Link to="/create" className="dropdown-item" > New Creations</Link>
                                    <div className="dropdown-divider"></div>
                                        <Link to="/construct" className="dropdown-item" > Construction</Link>
                                        <div className="dropdown-divider"></div>
                                        <Link to="/install" className="dropdown-item" > Installation</Link>
                                        <div className="dropdown-divider"></div>
                                        <Link to="/repair" className="dropdown-item" > Repairs</Link>
                                        <div className="dropdown-divider"></div>
                                        <Link to="/manage" className="dropdown-item" > Management</Link>
                                        <div className="dropdown-divider"></div>
                                        <Link to="/deliver" className="dropdown-item" > Deliveries</Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link to="/promotions" className="nav-link" > Promotions</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contactus" className="nav-link" > Contact Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/faq" className="nav-link" > FAQ</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/myaccount" className="nav-link" > My Account</Link>
                                </li>
                    </ul>
                </b>
            </div>
            <div class="form-inline my-2 my-lg-0">
                
            </div>
        
            <div align="center" className="fixed-bottom text-light bg-dark">
                Copyright &copy; <a href='index.html' className="text-light bg-dark"> TeQuest </a> - Your Service Provider. All Rights Reserved
            </div> 
      
        </NavBar>

        <Route path={props.path} exact={props.exact} component={props.component} />

        </div>
        </React.Fragment>
    )
}

export default LayoutRoute