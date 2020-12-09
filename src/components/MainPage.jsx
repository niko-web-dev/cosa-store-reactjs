import React from 'react';
import Offer from "./offer/Offer";
import Collection from "./collection/Collection";
import About from "./about/About";
import Subscription from "./subscription/Subscription";
import Footer from "./footer/Footer";

const MainPage = ({items}) => {

        return (
            <>
                <Offer/>
                <Collection items={items}/>
                <About/>
                <Subscription/>
                <Footer/>
            </>
        );
}

export default MainPage;