import Image from 'next/image'
import React from 'react'
import hardServicesImg from "./../assets/hard_services.jpg"

const ServiceCard = ({title = "Hard Services", img = hardServicesImg, content = "we are specialized in high-quality cleaning services to deliver cleanest work environment."}) => {
  return (
    <div className='flex flex-col space-y-2 mx-2' style={{height: "300px"}}>
        <div className='relative h-44 md:h-60'><Image src={img} layout="fill" /></div>
        <div className='text-brownish font-bold text-base md:text-lg pt-2'>{title}</div>
        <div className='text-stonish text-sm'>{content}</div>
    </div>
  )
}

export default ServiceCard