import React from 'react';
import TeQuestHeader from './TeQuestHeader';
import SideBarMenu from './SideBarMenu';
import FooterMenuItems from './FooterMenuItems';
import ProfileScreen from './ProfileScreen';

function EditProfileScreen () {
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
                                        Profile Settings
                                      </h1>
                                  </div>
                                  <div className="product-view-top">
                                          <div className="bleft">
                                         <ProfileScreen/>
                                          <br></br>
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

export default EditProfileScreen;