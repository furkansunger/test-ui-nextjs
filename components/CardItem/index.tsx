import { nunitoSans } from '@/app/layout'
import Image from 'next/image'
import React from 'react'

export interface CardProp {
  id: string,
  name: string,
  list?: [
    id: string,
    item: string
  ],
  description: string,
  imgs: [
    id: string,
    img: string
  ]
}

interface Prop {
  item: CardProp,
}

const CardItem = ({ item }: Prop) => {
  return (
    <div className='bg-white rounded-lg'>
      <div className='flex items-start justify-between rounded-lg'>
        <div className='flex flex-col items-start justify-start gap-y-1'>
          {
            item.imgs.length > 1 ? (
              <>
                {
                  item.imgs.map((item, index) => (
                    <div key={index} className="relative w-[184px] h-[176px] ">
                      <Image className='rounded-s-lg' src={item.img} alt='test' fill
                        style={{
                          objectFit: 'cover',
                        }} />
                    </div>
                  ))
                }
              </>
            ) : (
              <div className="relative w-[184px] h-[336px] ">
                <Image className='rounded-s-lg' src={item.imgs[0].img} alt='test' fill
                  style={{
                    objectFit: 'cover',
                  }} />
              </div>
            )
          }
        </div>
        <div className="max-w-[254px] pt-[40px] pr-[30px] pb-[34px] pl-[34px] flex flex-col items-start justify-start gap-3">
          <h3 className='sm:leading-[32px] leading-6 sm:text-2xl text-lg text-[#353844] font-bold'>{item.name}</h3>

          <ul className='marker:text-[#D2AD81] list-inside list-disc'>
            {
              item.list && item.list.map((value, index) => (
                <li key={index} className={`font-bold text-[#353844] sm:leading-6 leading-4 sm:text-[15px] text-xs ${nunitoSans.className}`}>{value.item}</li>
              ))
            }
          </ul>

          <p className={`font-semibold text-[#353844] sm:leading-6 leading-4 sm:text-[15px] text-xs ${nunitoSans.className}`}>
            {item.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CardItem