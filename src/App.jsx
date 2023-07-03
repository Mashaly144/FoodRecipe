import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import States from './components/States';
import Quality from './components/Quality';
import ServicesState from './components/ServicesState';
import SectionHeading from './Ui/SectionHeading';
import Card from './components/Card';
import ChifList from './components/ChifList';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import Header from './components/Header';
const App = () => {
 
  return (
    <div>
      <Header />
      <States />
      <Quality />
      <SectionHeading
        name='Services'
        title='Our Services'
        discription={`
                  Lorem ipsurn dolor sit amet consectetur. Tempus massa mauris
                  tellus eu Lectus tempor can id facilisis eget laoreet.`}
      />
      <ServicesState />
      <SectionHeading
        name='Foods'
        title='Explore Our Best Foods'
        discription={`
                  Lorem ipsurn dolor sit amet consectetur. Tempus massa mauris
                  tellus eu Lectus tempor can id facilisis eget laoreet.`}
      />
      <Card />
      <SectionHeading
        name="Chef's"
        title="Chef's SpeciaI Our"
        discription={`
                  Lorem ipsurn dolor sit amet consectetur. Tempus massa mauris
                  tellus eu Lectus tempor can id facilisis eget laoreet.`}
      />
      <ChifList />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default App;
