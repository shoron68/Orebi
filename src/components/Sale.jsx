import React from 'react'
import Container from './Container'
import sale1 from "../assets/Ad_1.png"
import sale2 from "../assets/Ad_2.png"
import sale3 from "../assets/Ad_3.png"

const Sale = () => {
  return (
    <Container className={`pt-[174px]`}>
        <div className="lg:flex lg:justify-between">
            <div className="lg:w-45%">
                <img src={sale1}  className='lg:w-[95%] lg:mr-[40px]' alt="" />
            </div>
            <div className="w-45%">
            <img src={sale2} className='w-full' alt="" />
            <img src={sale2} className='w-full mt-[40px]' alt="" />
            </div>
        </div>
    </Container>
  )
}

export default Sale