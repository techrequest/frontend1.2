import React from 'react';
import BoxLabelsPart from './BoxLabelsPart';
import CallForAction from './CallForAction';
import FeaturedSPs from './FeaturedSP';
import FooterMenuItems from './FooterMenuItems';
import MyCarousel from './MyCarousel';
import NewsletterSubscribe from './NewsletterSubscribe';
import TeQuestHeader from './TeQuestHeader';

// useEffect
  // fetch
    // setState
      // set cards to json

function HomeScreen() {
  return (
    <div className="App">

        <MyCarousel></MyCarousel>

        <BoxLabelsPart></BoxLabelsPart>

        <CallForAction></CallForAction>

        <FeaturedSPs></FeaturedSPs>

        <NewsletterSubscribe></NewsletterSubscribe>

    </div>
  );
}

export default HomeScreen;