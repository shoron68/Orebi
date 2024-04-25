import React from 'react'
import Container from './Container'
import sale1 from "../assets/Ad_1.png"
import sale2 from "../assets/Ad_2.png"
import sale3 from "../assets/Ad_3.png"

const Sale = () => {
  return (
    <Container className={`lg:pt-[174px] pt-[50px] lg:px-0 px-[10px]`}>
      <div className="lg:flex lg:justify-between">
        <div className="lg:w-[49%]">
          <div className="">
          <img src={sale1} className=' ' alt="" />
          </div>
        </div>
        <div className="lg:w-[49%] lg:pt-0 pt-3">
          <div className="">
            <img src={sale2} className='' alt="" />
          </div>
          <div className="lg:pt-9 pt-3">
            <img src={sale3} className='' alt="" />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Sale