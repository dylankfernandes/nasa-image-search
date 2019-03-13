import React from 'react'
import Header from '../../components/Header/Header';
import ImageGrid from '../../components/ImageGrid/ImageGrid';

const Home = () => (
  <div className="home">
    <Header />
    <div className="home__content">
      <ImageGrid />
    </div>
  </div>
)

export default Home