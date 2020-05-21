import React from 'react';

import NavBar from './Navbar';
import MainSection from './MainSection';
import AppSection from './AppSection';
import CardSection from './CardSection';
import Footer from './FooterSection';


const App = ()=> // bypassing return statement
(
        <div>
            <NavBar/>
            <MainSection/>
            <AppSection/>
            <CardSection/>
            <Footer/>
        </div>
);

export default App;