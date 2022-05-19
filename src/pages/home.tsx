import React from 'react'
import SeparatorClose from '../components/closeSeparator';
import Hero from '../components/hero'
import Separator from '../components/separator';
import Utility from '../components/utilitySection';
import '../components/separator.scss';
import ProblemSolved from '../components/problemSolved';
import TokenomicsTable from '../components/tokenomicsTable';
import Distribution from '../components/Distribution';
import Team from '../components/team';
import Timeline from '../components/timeline';
import Contact from '../components/contact';
import Footer from '../components/footer';

const Home = () => {
  return (
    <div className='text-white w-full z-10'>
      <Hero />
      <Separator />
      <Utility />
      {/* <SeparatorClose /> */}
      <ProblemSolved />
      <TokenomicsTable />
      <Distribution />
      <Timeline />
      <Team />
      {/* <Contact /> */}
      <Footer/>
    </div>
  );
}

export default Home