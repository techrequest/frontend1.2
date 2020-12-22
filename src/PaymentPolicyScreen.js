import React from 'react';
import TeQuestHeader from './TeQuestHeader';
import SideBarMenu from './SideBarMenu';
import FooterMenuItems from './FooterMenuItems';

function PaymentPolicyScreen () {
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
                                                  Payment Policy
                                                </h1>
                                  </div>
                                  <div className="product-view-top">
                                      <div className="bleft">
                                                      Te-Quest is a platform to bring together consumers and providers.
                                                      <br></br>
                                                      <br></br>
                                                      We encourage our users to make sure they discuss the payment options and come to a clean agreement regarding payment with the provider they choose to work with.
                                                      <br></br>
                                                      <br></br>
                                                      We don't accept payments on the website, so you should make sure you are comfortable with the providers terms and conditions.

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

export default PaymentPolicyScreen;