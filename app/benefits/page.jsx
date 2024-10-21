import Hero from '@/components/Hero';
import LeftRightGutter from '@/components/LeftRightGutter';
import Sidebar from '@/components/Sidebar';

import cityImage from '@/assets/images/orlando-city-skyline.jpeg';

const BenefitsPage = () => {
  return (
    <div className="flex flex-col w-full">
      <div
        className="relative flex items-center justify-center w-full"
        style={{ backgroundImage: `url(${cityImage.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className='absolute top-0 left-0 w-full h-full bg-black/30 z-10' />
        <div className='z-20'>
          <Hero header="Benefits of Recycling" subheader="Lets look at some of the interesting facts about recycling that will hopefully inspire you to participate in this effort." />
        </div>
      </div>
      <LeftRightGutter>
        <div className='relative flex flex-col md:flex-row items-center justify-between w-full'>
          <div className='w-full md:w-[70%]'>CONTENT</div>
          <div className='w-full md:w-[28%]'>
            <Sidebar />
          </div>
        </div>
      </LeftRightGutter>
    </div>
  )
}

export default BenefitsPage