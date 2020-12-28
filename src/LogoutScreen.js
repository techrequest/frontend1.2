import React from 'react';
import TeQuestHeader from './TeQuestHeader';
import SideBarMenu from './SideBarMenu';
import FooterMenuItems from './FooterMenuItems';

function LogoutScreen () {
  return (
    <div className="App">

      <TeQuestHeader></TeQuestHeader>
      <div className="product-view">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="product-view-top">
                                      <h1>
                                        You have been logged out
                                      </h1>
                                  </div>
                                  <div className="product-view-top">
                                          <div className="bleft">
                                          some text
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
            <div>
                    <p> </p>
                   
                </div>
                <FooterMenuItems></FooterMenuItems>
    </div>
  );
}

export default LogoutScreen;