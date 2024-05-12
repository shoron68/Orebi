import React, { useContext } from 'react'
import { ApiData} from '../ContextApi'
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import Container from '../Container';

const About = () => {
  let setData = useContext (ApiData)
  
  return (
    <>
      <Container>

      <div className=" flex flex-wrap justify-between mt-10">
      {setData.map((items) => (
        <div className="!w-[32%]"> 
          <div className="">
            <div className="relative group overflow-hidden">
              <img src={items.thumbnail} className='w-full h-[350px]' alt="" />

              <div className=" absolute left-0 bottom-[-200px]  w-full bg-[#fff] h-[200px] duration-500 ease-in-out flex items-center justify-end group-hover:bottom-0" >
                <div className="">
                  <div className="flex items-center justify-end mr-2 py-2">
                    <h3 className='mr-2 text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out'>Add to Wish List</h3>
                    <FaHeart />
                  </div>
                  <div className="flex items-center justify-end mr-2 py-5 ">
                    <h3 className='mr-[10px] text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out'>Compare</h3>
                    <TfiReload />
                  </div>
                  <div className="flex items-center justify-end mr-2 py-2">
                    <h3 className='mr-[10px] text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out'>Add to Cart</h3>
                    <FaShoppingCart />
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="flex justify-between items-center  py-5">
            <div className="">
              <p className='text-[16px] text-[#262626] font-dm font-bold'>{items.title}</p>
            </div>
            <div className="">
              <h3 className='text-[16px] text-[#262626] font-dm font-bold'>${items.price}</h3>
            </div>
          </div>
        </div>
      ))}
      </div>
      </Container>

    </>
  )
}

export default About