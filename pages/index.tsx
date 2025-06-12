import React from 'react';
import Image from 'next/image';
import { PROPERTYLISTINGSAMPLE } from '@/constants';

export default function Home() {
  return (
    <>
      <section className='px-4 xl:px-0'>
        <div
          className='bg-[url("/assets/hero-section-image/Image_mobile.png")] sm:bg-[url("/assets/hero-section-image/Image_desktop.png")] 
          bg-center bg-no-repeat bg-cover h-[296px] sm:h-[421px] lg:h-[481px] w-full max-w-7xl rounded-3xl mx-auto flex items-center justify-center'>
          <div className='text-white text-center'>
            <h1 className='text-[28.28px] sm:text-[68.63px] lg:text-[94px] font-semibold'>Find your favorite<br />place here!</h1>
            <h2 className='text-[7.42px] sm:text-[18px] lg:text-[24px]  font-medium'>The best prices for over 2 million properties worldwide.</h2>
          </div>
        </div>
      </section>
      <section className='w-full max-w-7xl mx-auto max-sm:overflow-x-hidden px-4 xl:px-0 flex items-center justify-between gap-3 py-5 whitespace-nowrap'>
        <div className='flex items-center gap-3 text-zinc-900 text-[13.78px] sm:text-sm font-semibold'>
          <button
            type="button"
            className='flex items-center justify-center border-[1px] border-neutral-300 hover:border-teal-600 rounded-full p-1 cursor-pointer 
            hover:bg-teal-50 transition-colors hover:shadow-sm hover:shadow-teal-600 sm:hidden w-8 h-8'
          >
            <Image src="/assets/icons/Linear/Essentional, UI/Filter.png" width={18} height={18} alt='Filter' />
          </button>
          <button
            type="button"
            className='border-[1px] border-teal-600 rounded-full px-3 py-1 cursor-pointer 
          bg-teal-50 text-teal-600 transition-colors shadow-sm shadow-teal-600'
          >
            All
          </button>
          <button
            type="button"
            className='border-[1px] border-neutral-300 hover:border-teal-600 rounded-full px-2 py-1 cursor-pointer 
            hover:bg-teal-50 hover:text-teal-600 transition-colors hover:shadow-sm hover:shadow-teal-600'
          >
            Top Villa
          </button>
          <button
            type="button"
            className='border-[1px] border-neutral-300 hover:border-teal-600 rounded-full px-2 py-1 cursor-pointer 
            hover:bg-teal-50 hover:text-teal-600 transition-colors hover:shadow-sm hover:shadow-teal-600'
          >
            Free Reschedule
          </button>
          <button
            type="button"
            className='border-[1px] border-neutral-300 hover:border-teal-600 rounded-full px-2 py-1 cursor-pointer 
            hover:bg-teal-50 hover:text-teal-600 transition-colors hover:shadow-sm hover:shadow-teal-600 
            sm:hidden lg:block'
          >
            Book Now, Pay later
          </button>
          <button
            type="button"
            className='border-[1px] border-neutral-300 hover:border-teal-600 rounded-full px-2 py-1 cursor-pointer 
            hover:bg-teal-50 hover:text-teal-600 transition-colors hover:shadow-sm hover:shadow-teal-600 
            sm:hidden lg:block'
          >
            Self CheckIn
          </button>
          <button
            type="button"
            className='border-[1px] border-neutral-300 hover:border-teal-600 rounded-full px-2 py-1 cursor-pointer 
            hover:bg-teal-50 hover:text-teal-600 transition-colors hover:shadow-sm hover:shadow-teal-600 
           sm:hidden lg:block'
          >
            Instant Book
          </button>
          <button
            type="button"
            className='hidden sm:flex lg:hidden items-center justify-center border-[1px] border-neutral-300 hover:border-teal-600 rounded-full p-1 cursor-pointer 
            hover:bg-teal-50 transition-colors hover:shadow-sm hover:shadow-teal-600'
          >
            <Image src="/assets/icons/Linear/Arrows/Alt Arrow Down.png" width={19} height={19} alt='Filter' />
          </button>
        </div>
        <div className='flex items-center gap-3 text-[13.78px] sm:text-sm font-semibold'>
          <button
            type="button"
            className='hidden sm:flex items-center justify-center gap-1 border-[1px] border-neutral-300 hover:border-teal-600 
            rounded-full px-2 py-1 cursor-pointer hover:bg-teal-50 hover:text-teal-600 transition-colors hover:shadow-sm
             hover:shadow-teal-600'
          >
            <span className='hidden lg:block'>Filter</span>
            <Image src="/assets/icons/Linear/Essentional, UI/Filter.png" width={18} height={18} alt='Filter' />
          </button>
          <button
            type="button"
            className='border-[1px] border-neutral-300 hover:border-teal-600 rounded-full px-2 py-1 cursor-pointer 
            hover:bg-teal-50 hover:text-teal-600 transition-colors hover:shadow-sm hover:shadow-teal-600'
          >
            <span className='opacity-50'>Sort by: </span><span>Highest Price</span>
          </button>
        </div>
      </section>
      <section className='relative container max-sm:max-w-[390px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-8 px-2 md:px-0'>
        <div
          className='absolute top-2 left-1 md:-left-1 flex gap-1 rounded-r-full rounded-tl-full bg-teal-600 hover:bg-teal-500 
        cursor-pointer transition-colors py-1 px-2 shadow-xl shadow-teal-800 z-50'>
          <Image src="/assets/icons/Discount.png" width={14} height={14} alt="Discount" />
          <span className='text-sm text-white font-medium'>60% Off</span>
        </div>
        {
          PROPERTYLISTINGSAMPLE?.map((item, index) => (
            <div
              key={index}
              className='flex flex-col gap-3'
            >
              <div>
                <Image src={item.image} width={98} height={68} alt={item.name}
                  className='w-full h-[200px] rounded-2xl cursor-pointer hover:brightness-50'
                />
              </div>
              <div className='flex items-center gap-1 text-zinc-900 text-[11px] font-medium whitespace-nowrap overflow-x-hidden'>
                <button
                  type="button"
                  className='bg-zinc-200 rounded-full px-2 py-1 cursor-pointer hover:bg-teal-100 
                  hover:text-teal-600 transition-colors'
                >
                  Top Villa
                </button>
                <button
                  type="button"
                  className='bg-zinc-200 rounded-full px-2 py-1 cursor-pointer hover:bg-teal-100 
                  hover:text-teal-600 transition-colors'
                >
                  Self CheckIn
                </button>
                <button
                  type="button"
                  className='bg-zinc-200 rounded-full px-2 py-1 cursor-pointer hover:bg-teal-100 
                  hover:text-teal-600 transition-colors'
                >
                  Free Reschedule
                </button>
              </div>
              <div className='flex flex-col gap-3'>
                <div>
                  <div className='flex items-center justify-between'>
                    <h2 className='text-zinc-900 text-lg font-semibold'>{item.name}</h2>
                    <div className='flex items-center justify-center gap-1'>
                      <Image src="/assets/icons/Star 2.png" width={15} height={15} alt='star' />
                      <span className='text-zinc-900 text-sm font-medium'>{item.rating}</span>
                    </div>
                  </div>
                  <h3
                    className='text-zinc-600 text-sm font-medium'>
                    {item.address.state} {item.address.city} {item.address.country}
                  </h3>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-1 bg-zinc-200 rounded-full px-2 py-1 cursor-pointer hover:bg-teal-100 
                  hover:text-teal-600 transition-colors text-[11px] sm:ml-1'>
                    <div className='flex items-center justify-center gap-0.5'>
                      <Image src="/assets/icons/bed 1.png" width={13} height={13} alt='Bed' />
                      <span>{item.offers.bed}</span>
                    </div>
                    <div className='flex items-center justify-center gap-0.5'>
                      <Image src="/assets/icons/bathtub 1.png" width={13} height={13} alt='Shower' />
                      <span>{item.offers.shower}</span>
                    </div>
                    <div className='flex items-center justify-center gap-0.5'>
                      <Image src="/assets/icons/people 1.png" width={13} height={13} alt='Occupants' />
                      <span>{item.offers.occupants}</span>
                    </div>
                  </div>
                  <span className='text-zinc-900 text-xs font-semibold'>${item.discount ? item.discount : 0}<sub>/n</sub></span>
                </div>
              </div>
            </div>
          ))
        }
      </section>
      <section
        className='container flex flex-col items-center justify-center gap-3 mx-auto 
        mt-25 mb-9 sm:mt-30 sm:mb-13 lg:mt-20 lg:mb-8'>
        <button
          className='text-white hover:text-amber-50 text-xs sm:text-sm text-center cursor-pointer font-medium bg-black rounded-full 
          px-3 py-1 hover:bg-slate-700 focus:ring-2 focus:ring-slate-950 transition-colors'
        >
          Show more
        </button>
        <p className='text-sm text-black text-center font-medium'>Click to see more listings</p>
      </section>
    </>
  );
}
