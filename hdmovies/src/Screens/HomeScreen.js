import React from 'react'
import Layout from '../Layouts/Layout';
import Banner from '../Components/Home/Banner';
import TopRated from '../Components/Home/TopRated';
import Promos from '../Components/Home/Promos';
import PopularMovies from '../Components/Home/PopularMovies';


function HomeScreen() {
  return (
    <Layout>
      <div className="container mx-auto min-h-screen px-2 mb-6">
        <Banner />
        <PopularMovies />
        <Promos />
        <TopRated />
      </div>
    </Layout>
  );
}

export default HomeScreen