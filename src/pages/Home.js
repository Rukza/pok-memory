import React from 'react';
import MemGame from '../components/MemGame';
import Navigation from '../components/Navigation';
import '../styles/Home.css';



const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <MemGame/>
        </div>
    );
};

export default Home;