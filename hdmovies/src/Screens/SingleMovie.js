import React from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../Layouts/Layout'
import { Movies } from '../Data/MovieData'
import MovieInfo from '../Components/Single/MovieInfo'
import MovieCast from '../Components/Single/MovieCast'
import MovieRates from '../Components/Single/MovieRates'
import Titles from '../Components/Titles'
import { BsCollectionFill } from 'react-icons/bs'
import Movie from '../Components/Movie'


function SingleMovie() {
    const { id } = useParams()
    const movie = Movies.find((movie) => movie.name === id)
  const RelatedMovies = Movies.filter(
      (m) => m.category === movie.category
    )
  return (
    <Layout>
      <MovieInfo movie={movie} />
      <div className="container mx-auto min-h-screen px-2 my-6">
        <MovieCast />
        {/* Rates */}
        <MovieRates movie={movie} />
        {/*Related */}
        <div className="my-16">
          <Titles title="Related Movies" Icon={BsCollectionFill} />
          <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl-grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
            {RelatedMovies.map((movie, index) => (
              <Movie key={index} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SingleMovie