import React from 'react';
import Banner from '../Banner/Banner';
import Branch from '../Branch/Branch';
import Faq from '../Faq/Faq';
import Services from '../Services/Services';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>

            <Branch></Branch>
            <Faq></Faq>


        </div>
    );
};

export default Home;