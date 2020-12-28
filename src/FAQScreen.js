import React from 'react';
import TeQuestHeader from './TeQuestHeader';
import SideBarMenu from './SideBarMenu';
import FooterMenuItems from './FooterMenuItems';

function FAQScreen () {
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
                                                  FAQ
                                                </h1>
                                        
                                  </div>
                                  <div className="product-view-top">
                                      <div className="bleft">
                                                      Te-Quest is a platform to bring together consumers and providers.

                                                      <br></br>
                                                      <br></br>

                                                      Page under construction.

                                                      <br></br>
                                                      <br></br>

                                                      We want to make sure we give you the correct information sowe will take some time to make this right

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

export default FAQScreen;