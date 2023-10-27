import React from 'react'
import Layout from '../Layouts/Layout'
import Head from '../Components/Home/Head'


function AboutUs() {
  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Head title="About Us" />

        <div className="xl:py-20 py-10 px-4">
          <div className="grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center">
            
            <div>
              <h3 className="txt-xl lg:text-3xl mb-4 font-semibold">
                Welcome to our HDMovies
              </h3>
              <div className="mt-3 text-sm leading-8 text-text">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. A at
                  nulla doloribus obcaecati amet debitis ea mollitia dignissimos
                  deleniti fugit consequatur ab illo, perspiciatis, incidunt
                  architecto laudantium laboriosam in labore! Lorem ipsum dolor
                  sit, amet consectetur adipisicing elit. A at nulla doloribus
                  obcaecati amet debitis ea mollitia dignissimos deleniti fugit
                  consequatur ab illo, perspiciatis, incidunt architecto
                  laudantium laboriosam in labore!
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. A at
                  nulla doloribus obcaecati amet debitis ea mollitia dignissimos
                  deleniti fugit consequatur ab illo, perspiciatis, incidunt
                  architecto laudantium laboriosam in labore! Lorem ipsum dolor
                  sit, amet consectetur adipisicing elit. A at nulla doloribus
                  obcaecati amet debitis ea mollitia dignissimos deleniti fugit
                  consequatur ab illo, perspiciatis, incidunt architecto
                  laudantium laboriosam in labore!
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="p-8 bg-dry rounded-lg">
                  <span className="text-3xl block font-extrabold">10k</span>
                  <h4 className="text-lg font-semibold my-1">Listed Movies</h4>
                  <p className="mb-0 text-text leading-7 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div className="p-8 bg-dry rounded-lg">
                  <span className="text-3xl block font-extrabold">8k</span>
                  <h4 className="text-lg font-semibold my-1">Lovely Users</h4>
                  <p className="mb-0 text-text leading-7 text-sm">
                    Completely Free, Without registeration
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <img src="/images/about-us.jpg" alt="about-us" className="w-full xl:block hidden h-header rounded-lg object-cover" />
                </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutUs