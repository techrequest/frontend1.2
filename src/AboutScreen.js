import React from 'react';
import TeQuestHeader from './TeQuestHeader';
import SideBarMenu from './SideBarMenu';
import FooterMenuItems from './FooterMenuItems';

function AboutScreen () {
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
                                        About Us
                                      </h1>
                                  </div>
                                  <div className="product-view-top">
                                          <div className="bleft">
                                          Te-Quest is a platform to bring together consumers and providers.
                                          <br></br>
                                          <br></br>

                                          Today when everything has and can be done online, visibitly and information have become the key to living the lifestyle we were used to but can't anymore.<br></br>
                                          <br></br>

                                          Te-Quest is our attempt to bring together the information, visibitly, and people together to ease your life and let you spend your time doing what you like and love.<br></br>
                                          <br></br>

                                          If there is something you are looking for, do let us know we will add it so the next time you want to use a service, buy a product or just create, repair or build something you won't have to spend time searching around.
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

export default AboutScreen;