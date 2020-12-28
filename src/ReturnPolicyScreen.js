import React from 'react';
import TeQuestHeader from './TeQuestHeader';
import SideBarMenu from './SideBarMenu';
import FooterMenuItems from './FooterMenuItems';

function ReturnPolicyScreen () {
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
                                                  Returns Policy
                                                </h1>
                                        
                                  </div>
                                  <div className="product-view-top">
                                      <div className="bleft">
                                                      Te-Quest is a platform to bring together consumers and providers.
                                                      <br></br>
                                                      <br></br>
                                                      Refund policy
We're so convinced you'll absolutely love our services, that we're willing to offer a 30 day risk-free money back guarantee. If you are not satisfied with the service for any reason you can get a refund within 30 days of making a purchase. Please keep in mind that even though we offer a full money back guarantee, we will issue a refund only for the unused portion of the service.
<br></br>
                                                      <br></br>

Additional services
<br></br>
                                                      <br></br>
Please note that any additional services, custom work or technical support are non-refundable as our time cannot be recovered.
<br></br>
                                                      <br></br>

Contacting us
<br></br>
                                                      <br></br>
If you would like to contact us concerning any matter relating to this Refund Policy, you may send an email
<br></br>
                                                      <br></br>

This document was last updated on December 22, 2020

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

export default ReturnPolicyScreen;