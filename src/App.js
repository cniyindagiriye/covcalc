import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => (
  <div className="flex flex-col bg-white text-black font-sm w-full h-[100vh]">
    <Header />
    <Footer />
  </div>
);

export default App;
