import Hero from '@/components/Hero';
import LeftRightGutter from '@/components/LeftRightGutter';
import Sidebar from '@/components/Sidebar';

import cityImage from '@/assets/images/orlando-city-skyline.jpeg';

const whatGoesWherePage = () => {
  return (
    <div className="flex flex-col w-full">
      <div
        className="relative flex items-center justify-center w-full"
        style={{ backgroundImage: `url(${cityImage.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className='absolute top-0 left-0 w-full h-full bg-black/30 z-10' />
        <div className='z-20'>
          <Hero header="What Goes Where" subheader="View what items should be placed in a trash cart, recycling cart, composter, or should be dropped off at a waste center." />
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

export default whatGoesWherePage