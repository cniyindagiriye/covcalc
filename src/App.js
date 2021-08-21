import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContainer from './components/Main';

const App = () => (
  <div className="flex flex-col bg-white text-black font-sm w-full h-[100vh]">
    <Header />
    <MainContainer />
    <Footer />
  </div>
);

export default App;
