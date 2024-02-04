import React from 'react'
import { CardItem } from '..'
import { CardProp } from '../CardItem'

const Cards = ({ data }: any) => {
  return (
    <div className='grid grid-cols-3 gap-y-10 gap-x-[30px]'>
      {
        data?.map((item: CardProp, index: number) => (
          <CardItem item={item} key={index} />
        ))
      }
    </div>
  )
}

export default Cards