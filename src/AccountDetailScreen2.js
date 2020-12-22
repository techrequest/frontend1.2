import React from 'react';
import TeQuestHeader from './TeQuestHeader';
import SideBarMenu from './SideBarMenu';
import FooterMenuItems from './FooterMenuItems';
import AccountDetailValidation from './AccountDetailValidation';

function AccountDetailScreen () {
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
                                                  Account Details
                                                </h1>
                                                <h6>
                                                Te-Quest is a platform to bring together consumers and providers.
                                                </h6>
                                       
                                  </div>
                                  <div className="product-view-top">
                                      <div className="row">
                                          <AccountDetailValidation/>
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

export default AccountDetailScreen;