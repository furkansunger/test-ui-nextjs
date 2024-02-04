import { nunitoSans } from '@/app/layout'
import Image from 'next/image'
import React from 'react'

const CardItem = () => {
  return (
    <div className='bg-white rounded-lg'>
      <div className='flex items-start justify-between rounded-lg'>
        <div className='flex flex-col items-start justify-start gap-y-1'>
          <div className="relative w-[184px] h-[176px] ">
            <Image className='rounded-s-lg' src="/images/img-1.png" alt='test' fill
              style={{
                objectFit: 'cover',
              }} />
          </div>
          <div className="relative w-[184px] h-[176px] ">
            <Image className='rounded-s-lg' src="/images/img-2.png" alt='test' fill
              style={{
                objectFit: 'cover',
              }} />
          </div>
        </div>
        <div className="max-w-[254px] pt-[40px] pr-[30px] pb-[34px] pl-[34px] flex flex-col items-start justify-start gap-3">
          <h3 className='leading-[32px] text-2xl text-[#353844] font-bold'>Photography</h3>
          <ul className='marker:text-[#D2AD81] list-inside list-disc'>
            <li className={`font-bold text-[#353844] leading-6 text-[15px] ${nunitoSans.className}`}>Drone Photography</li>
            <li className={`font-bold text-[#353844] leading-6 text-[15px] ${nunitoSans.className}`}>Drone Photography</li>
            <li className={`font-bold text-[#353844] leading-6 text-[15px] ${nunitoSans.className}`}>Drone Photography</li>
          </ul>
          <p className={`font-semibold text-[#353844] leading-6 text-[15px] ${nunitoSans.className}`}>
            Every photograph we produce finds the beauty in your property while serving as a profitable asset.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CardItem