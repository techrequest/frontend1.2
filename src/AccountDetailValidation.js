import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';

import SideBarMenu from './SideBarMenu';
import AppContext from './AppContext';


function AccountDetailValidation () {
  const [globalState, setGlobalState] = useContext(AppContext);

  return (
      
          
    <div className="App">
    {
    globalState.loggedIn &&
      <div className="product-view">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="product-view-top">
                                    <div className="row">
                                        <div className="col-md-4">
                                            
                                                <h1>
                                                  Account Details
                                                </h1>
                                        </div>
                                    </div>
                                  </div>
                                  <div className="product-view-top">
                                      <div className="row">
                                                     Some confidential information

                                      </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 sidebar">
                                <SideBarMenu>

                                </SideBarMenu>
                        </div>
                    </div>
                </div>
            </div>
    
      }
      {
          <div className="product-view">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-lg-8">
                      <div className="row">
                          <div className="col-md-12">
                              <div className="product-view-top">
                                  <div className="row">
                                      <div className="col-md-4">
                                          
                                              <h1>
                                                Account Details
                                              </h1>
                                      </div>
                                  </div>
                                </div>
                                <div className="product-view-top">
                                    <div className="bleft">
                                                    You must be logged in to access your account details.

                                    </div>
                                    <br/>
                                    <Link to='/login' className = "btn btn-primary">Login</Link>
                                </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 sidebar">
                              <SideBarMenu>

                              </SideBarMenu>
                      </div>
                  </div>
              </div>
          </div>

  
      }
      </div>
  );
}

export default AccountDetailValidation;