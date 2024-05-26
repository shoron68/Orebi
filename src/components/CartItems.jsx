import React from 'react'
import Container from './Container'
import { RxCross2 } from "react-icons/rx";
import cartimg from "../assets/cartimg.png"


const CartItems = () => {
  return (
    <Container>
      <div className="py-[124px]">
        <div className="pb-[130px]">
          <h3 className='text-[49px] text-[#262626] font-dm font-bold '>Cart</h3>
          <span className='text-[12px] text-[#CDCDC0] font-dm font-normal'>Home &gt; Cart</span>
        </div>





        <div className="flex justify-start py-[34px] bg-[#F5F5F3]">
          <div className="w-[25%] pl-[20px]">
            <span className='text-[16px] text-[#262626] font-dm font-bold'>Product</span>
          </div>
          <div className="w-[25%]  pl-[20px]">
            <span className='text-[16px] text-[#262626] font-dm font-bold'>Price</span>
          </div>
          <div className="w-[25%] pl-[20px]">
            <span className='text-[16px] text-[#262626] font-dm font-bold'>Quanity</span>
          </div>
          <div className="w-[25%] pl-[20px]">
            <span className='text-[16px] text-[#262626] font-dm font-bold'>Total</span>
          </div>
        </div>




        <div className=" h-[160px] flex justify-start items-center border-[1px] border-[#F0F0F0] ">
          <div className="w-[25%] ">
            <div className="flex justify-around items-center">
              <div className="">
                <RxCross2 />
              </div>
              <div className="">
                <img src={cartimg} alt="" />
              </div>
              <div className="">
                <span className='text-[16px] text-[#262626] font-dm font-bold'>Product name</span>
              </div>
            </div>
          </div>
          <div className="w-[25%] pl-[20px]">
            <div className="">
              <span className='text-[16px] text-[#262626] font-dm font-bold'>$44.00</span>
            </div>
          </div>
          <div className="w-[25%] pl-[20px]">
            <div className="flex justify-around w-[139px] h-[36px] border-[1px] items-center">
              <div className="">
                <span className='text-[16px] text-[#262626] font-dm font-bold'>-</span>
              </div>
              <div className="">
                <span className='text-[16px] text-[#262626] font-dm font-normal'>1</span>
              </div>
              <div className="">
                <span className='text-[16px] text-[#262626] font-dm font-bold'>+</span>
              </div>
            </div>
          </div>
          <div className="w-[25%] pl-[20px]">
            <div className="">
              <span className='text-[16px] text-[#262626] font-dm font-bold'>$44.00</span>
            </div>
          </div>
        </div>



        <div className="py-[20px] items-center border-[1px] border-[#F0F0F0]">
          <div className="flex justify-between items-center ">
            <div className="">
              <select id="size" name="size" className='border-[2px] w-[255px] h-[50px] ml-[20px] items-center' size="1">
                <option>S</option>
                <option>M</option>
                <option>XL</option>
                <option>XXL</option>
                <option>XXXL</option>
              </select>
              <span className='text-[16px] text-[#262626] font-dm font-bold pl-[20px]'>Apply coupon</span>
            </div>
            <div className="">
              <div className="">
                <span className='text-[16px] text-[#262626] font-dm font-bold'>Update cart</span>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex justify-end">
          <div className="w-[40%]  pt-[50px]">
          <div className="">
          <div className="pb-[24px] ">
                <p className='text-[20px] text-[#262626] font-dm font-bold text-end '>Cart totals</p>
              </div>
              <div className="flex">
                <div className=" border-[1px] border-[#F0F0F0] h-[54px] w-[322px] ">
                  <p className='text-[16px] text-[#262626] font-dm font-bold leading-[50px] pl-[20px] '>Subtotal</p>
                </div>
                <div className="">
                  <div className=" border-[1px] border-[#F0F0F0] h-[54px] w-[322px] ">
                    <p className='text-[16px] text-[#767676] font-dm font-bold leading-[50px] pl-[20px] '>389.99 $</p>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className=" border-[1px] border-[#F0F0F0] h-[54px] w-[322px] ">
                  <p className='text-[16px] text-[#262626] font-dm font-bold leading-[50px] pl-[20px] '>Total</p>
                </div>
                <div className="">
                  <div className=" border-[1px] border-[#F0F0F0] h-[54px] w-[322px] ">
                    <p className='text-[16px] text-[#767676] font-dm font-bold leading-[50px] pl-[20px] '>389.99 $</p>
                  </div>
                </div>
              </div>
              <div className="pt-[20px] flex justify-end">
                <div className="">
                  <button className='h-[50px] w-[200px] items-center text-[14px] text-[#262626] font-dm font-semibold border-[1px] border-[#767676] hover:text-[#fff] hover:bg-[#262626] duration-500 ease-in-out'>Proceed to Checkout</button>
                </div>
              </div>
          </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default CartItems