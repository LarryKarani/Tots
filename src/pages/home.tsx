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

const Home = () => {
  return (
    <div className='text-white w-full z-10'>
      <Hero />
      <Separator />
      <Utility />
      <SeparatorClose />
      <ProblemSolved />
      <Separator />
      <TokenomicsTable />
      <SeparatorClose />
      <Distribution />
      <Separator />
      <Timeline />
      <SeparatorClose />
      <Team />
      <Separator />
      <Contact/>
    </div>
  );
}

export default Home