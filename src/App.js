import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import AppContext from './AppContext';
import LayoutRoute from './LayoutRoute';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import ServiceProvidersList from './ServiceProvidersList';
import ContactScreen from './ContactScreen';
import PromotionScreen from './PromotionScreen';
import FAQScreen from './FAQScreen';
import NewCreationScreen from './NewCreationScreen';
import ConstructionScreen from './ConstructionScreen';
import InstallationScreen from './InstallationScreen';
import RepairScreen from './RepairScreen';
import ManagementScreen from './ManagementScreen';
import DeliverScreen from './DeliverScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import AccountDetailScreen from './AccountDetailScreen';
import PrivacyPolicyScreen from './PrivacyPolicyScreen';
import TnCScreen from './TnCScreen';
import PaymentPolicyScreen from './PaymentPolicyScreen';
import ShippingPolicyScreen from './ShippingPolicyScreen';
import ReturnPolicyScreen from './ReturnPolicyScreen';
import LogoutScreen from './LogoutScreen';
import EditProfileScreen from './EditProfileScreen';


const App = () => {

  const [globalState, setGlobalState] = useState(
    {
      loggedIn: localStorage.getItem('jwt') ? true : false, 
      profile: null
    }
  )

  useEffect(
    () => {
      // if there is a token and globalState.profile is null
      if( localStorage.getItem('jwt') && globalState.profile === null) {
        // fetch GET to get profile details
        fetch(
          `http://localhost:8080/users/profile`,
          {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
          }
        )
        .then(
          (backendResponse) => backendResponse.json()
        )
        .then(
          (json) => {
            console.log('user\'s profile', json)
            // update the globalState.profile
            setGlobalState(
              {
                ...globalState,
                profile: json
              }
            )
          }
        ).catch(
          error => console.log(error)
        )
      }
    },
    [ globalState.loggedIn, globalState.profile ]
  )
  
  return (
    <AppContext.Provider value={[globalState, setGlobalState]}>
    <BrowserRouter>
        <Switch>
            <LayoutRoute path="/" exact={true} component={HomeScreen} />
            <LayoutRoute path="/about" exact={true} component={AboutScreen} />
            <LayoutRoute path="/serviceproviders" exact={true} component={ServiceProvidersList} />
            <LayoutRoute path="/contactus" exact={true} component={ContactScreen} />
            <LayoutRoute path="/promotions" exact={true} component={PromotionScreen} />
            <LayoutRoute path="/faq" exact={true} component={FAQScreen} />
            <LayoutRoute path="/create" exact={true} component={NewCreationScreen} />

            <LayoutRoute path="/construct" exact={true} component={ConstructionScreen} />

            <LayoutRoute path="/install" exact={true} component={InstallationScreen} />

            <LayoutRoute path="/repair" exact={true} component={RepairScreen} />

            <LayoutRoute path="/deliver" exact={true} component={DeliverScreen} />

            <LayoutRoute path="/login" exact={true} component={LoginScreen} />
            <LayoutRoute path="/registeracc" exact={true} component={RegisterScreen} />

            <LayoutRoute path="/myaccount" exact={true} component={AccountDetailScreen} />
            <LayoutRoute path="/manage" exact={true} component={ManagementScreen} />
            <LayoutRoute path="/privacypolicy" exact={true} component={PrivacyPolicyScreen} />
            <LayoutRoute path="/tnc" exact={true} component={TnCScreen} />

            <LayoutRoute path="/paymentpolicy" exact={true} component={PaymentPolicyScreen} />

            <LayoutRoute path="/shippingpolicy" exact={true} component={ShippingPolicyScreen} />

            <LayoutRoute path="/returnPolicy" exact={true} component={ReturnPolicyScreen} />

            <LayoutRoute path="/logout" exact={true} component={LogoutScreen} />
            <LayoutRoute path="/editprofile" exact={true} component={EditProfileScreen} />

        </Switch>
    </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App;