import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import './ExtraSecOne.css';

const ExtraSecOne = () => {
    return (
        <div>
            {/* <!-- Section: Design Block --> */}
<section className="mb-40">
  {/* <!-- Navbar --> */}
  <SectionTitle heading='Best Offer' subHeading='Join Now'></SectionTitle>
  {/* <!-- Navbar --> */}

  {/* <!-- Jumbotron --> */}
  <div className="px-6 py-12 text-center md:px-12 lg:text-left">
    <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xl:px-32">
      <div className="grid items-center lg:grid-cols-2">
        <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
          <div
            className="block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]">
            <h1 className="mt-2 mb-16 text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
              The best offer <br /><span className="text-orange-500">for you</span>
            </h1>
            <button className='btn btn-orange shadow-lg text-2xl'>Enroll Now</button>
          </div>
        </div>
        <div className="md:mb-12 lg:mb-0">
          <img src={'https://i.ibb.co/D7qwLFy/preview.jpg'}
            className="w-full h-96 rounded-lg shadow-lg dark:shadow-black/20" alt="" />
        </div>
      </div>
    </div>
  </div>
  
</section>

        </div>
    );
};

export default ExtraSecOne;