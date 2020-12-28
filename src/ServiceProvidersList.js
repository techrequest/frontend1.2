import React from 'react';
import FooterMenuItems from './FooterMenuItems';
import storefrontitaly from './images/storefrontitaly.jpg';
import storefrontold from './images/storefrontold.jpg';
import storefronturban from './images/storefronturban.jpg';
import storefrtontfrench from './images/storefrtontfrench.jpg';
import PageNavigationShortMenu from './PageNavigationShortMenu';
import SideBarMenu from './SideBarMenu';
import ServiceProviderCard from './ServiceProviderCard';
import ProductSearchBar from './ProductSearchBar';


import TeQuestHeader from './TeQuestHeader';

function ServiceProvidersList () {
  return (
    <div className="App">
        <TeQuestHeader></TeQuestHeader>

        <div className="product-view">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-md-12">
                                <ProductSearchBar/>
                            </div>
                            <ServiceProviderCard 
                            providerName = "Company 1"
                            rating = "3"
                            imageUrl = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3289&q=80"
                            alt = "Draftsman with Engineering Drawing"
                            price = "150"
                            /> 

                            <ServiceProviderCard 
                            providerName = "Company 2"
                            rating = "5"
                            imageUrl = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3289&q=80"
                            alt = "Draftsman with Engineering Drawing"
                            price = "150"
                            /> 

                            <ServiceProviderCard 
                            providerName = "Company 3"
                            rating = "2"
                            imageUrl = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3289&q=80"
                            alt = "Draftsman with Engineering Drawing"
                            price = "150"
                            /> 

                            <ServiceProviderCard 
                            providerName = "Company 4"
                            rating = "1"
                            imageUrl = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3289&q=80"
                            alt = "Draftsman with Engineering Drawing"
                            price = "150"
                            /> 

                            <ServiceProviderCard 
                            providerName = "Company 5"
                            rating = "2"
                            imageUrl = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3289&q=80"
                            alt = "Draftsman with Engineering Drawing"
                            price = "150"
                            /> 

                            <ServiceProviderCard 
                            providerName = "Company 6"
                            rating = "5"
                            imageUrl = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3289&q=80"
                            alt = "Draftsman with Engineering Drawing"
                            price = "150"
                            /> 

                            <ServiceProviderCard 
                            providerName = "Company 7"
                            rating = "5"
                            imageUrl = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3289&q=80"
                            alt = "Draftsman with Engineering Drawing"
                            price = "150"
                            /> 

                            <ServiceProviderCard 
                            providerName = "Company 8"
                            rating = "5"
                            imageUrl = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3289&q=80"
                            alt = "Draftsman with Engineering Drawing"
                            price = "150"
                            /> 

                            <ServiceProviderCard 
                            providerName = "Company 9"
                            rating = "5"
                            imageUrl = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3289&q=80"
                            alt = "Draftsman with Engineering Drawing"
                            price = "150"
                            /> 
                    

                            
                        </div>
                        
                    </div>
                    <div className="col-lg-4 sidebar">
                                <SideBarMenu>

                                </SideBarMenu>
                    </div>
                </div>
            </div>
    
            <div className="col-md-12">
                <PageNavigationShortMenu></PageNavigationShortMenu>
                <div>
                    <p> </p>
                   
                </div>
                <FooterMenuItems></FooterMenuItems>
            </div>
                       
        </div>
    </div>
  );
}

export default ServiceProvidersList