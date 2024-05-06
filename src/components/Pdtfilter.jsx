import React from 'react'
import Container from './Container'
import { FiPlus } from "react-icons/fi";
import { IoMdArrowDropup } from "react-icons/io";
import { IoGrid } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";

import product5 from "../assets/Product_5.png"
import product6 from "../assets/Product_6.png"
import product7 from "../assets/Product_7.png"
import product8 from "../assets/Product_8.png"

import product9 from "../assets/Product_9.png"
import product10 from "../assets/Product_10.png"
import product11 from "../assets/Product_11.png"
import product12 from "../assets/Product_12.png"





const Pdtfilter = () => {
  return (
    <Container>
      <div className=" flex justify-between">
        <div className="w-[28%] pt-[128px]">
          <div className="">
            <h3 className='text-[49px] text-[#292929] font-dm font-bold '>Products</h3>
            <span className='text-[14px] text-[#767676] font-dm font-normal'>Home = Products</span>
          </div>
          <div className="pt-[130px]">
            <div className="">
              <ul>
                <li className='text-[16px] text-[#262626] font-dm font-bold'>Shop by Category</li>
                <li className='flex items-center justify-between text-[14px] text-[#767676] py-[22px] border-b-2 border-[#7676762f]'>Category 1
                  <FiPlus /></li>
                <li className='flex items-center text-[14px] text-[#767676] py-[22px] border-b-2 border-[#7676762f]'>Category 2</li>
                <li className='flex items-center text-[14px] text-[#767676] py-[22px] border-b-2 border-[#7676762f] justify-between'>Category 3 <FiPlus /></li>
                <li className='flex items-center text-[14px] text-[#767676] py-[22px] border-b-2 border-[#7676762f]'>Category 4</li>
                <li className='flex items-center text-[14px] text-[#767676] py-[22px] border-b-2 border-[#7676762f]'>Category 5</li>
              </ul>
            </div>

            <div className=" pt-[53px]">
              <ul>
                <li className='text-[16px]  text-[#262626] font-dm font-bold flex justify-between items-center'>Shop by Color <IoMdArrowDropup /></li>
                <li className='text-[14px] flex items-center text-[#767676] py-[22px] border-b-2 border-[#7676762f]'> <div className="mr-[10px] h-[10px] w-[10px] rounded-full bg-[black]"></div>Color 1
                </li>
                <li className='text-[14px] flex items-center text-[#767676] py-[22px] border-b-2 border-[#7676762f]'> <div className="mr-[10px] h-[10px] w-[10px] rounded-full bg-[#FF8686]"></div>Color 1
                </li>
                <li className='text-[14px] flex items-center text-[#767676] py-[22px] border-b-2 border-[#7676762f]'> <div className="mr-[10px] h-[10px] w-[10px] rounded-full bg-[#7ED321]"></div>Color 1
                </li>
                <li className='text-[14px] flex items-center text-[#767676] py-[22px] border-b-2 border-[#7676762f]'> <div className="mr-[10px] h-[10px] w-[10px] rounded-full bg-[#979797]"></div>Color 1
                </li>
                <li className='text-[14px] flex items-center text-[#767676] py-[22px] border-b-2 border-[#7676762f]'> <div className="mr-[10px] h-[10px] w-[10px] rounded-full bg-[#15CBA5]"></div>Color 1
                </li>

              </ul>
            </div>

            <div className="pt-[53px]">
              <ul>
                <li className='text-[16px] text-[#262626] font-dm font-bold'>Shop by Price</li>
                <li className=' text-[14px] text-[#767676] py-[22px] border-b-2 border-[#7676762f]'>$0.00 - $9.99
                </li>
                <li className='flex items-center text-[14px] text-[#767676] py-[22px] border-b-2 border-[#7676762f]'>$10.00 - $19.99</li>
                <li className=' text-[14px] text-[#767676] py-[22px] border-b-2 border-[#7676762f] '>$20.00 - $29.99 </li>
                <li className='flex items-center text-[14px] text-[#767676] py-[22px] border-b-2 border-[#7676762f]'>$30.00 - $39.99</li>
                <li className='flex items-center text-[14px] text-[#767676] py-[22px] border-b-2 border-[#7676762f]'>$40.00 - $69.99</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-[70%] pt-[351px]">
          <div className="flex justify-between">
            <div className="w-[10%]">
              <div className="flex items-center ">
                <div className="mr-[20px] py-[12px] px-[12px] border-2 duration-500 ease-in-out hover:bg-[#262626] hover:text-[#fff]">
                  <IoGrid />
                </div>
                <div className="py-[12px] px-[12px] border-2 duration-500 ease-in-out hover:bg-[#262626] hover:text-[#fff]">
                  <TfiMenuAlt />
                </div>

              </div>
            </div>
            <div className="w-[50%]">
              <div className="flex justify-between mr-[-60px]">

                <div className="flex items-center">
                  <div className="">
                    <p className='text-[16px] text-[#767676] font-dm font-normal '>Sort by:</p>
                  </div>
                  <div className="flex items-center ml-[5px] relative">
                    <input type="text" placeholder='Featured' className=' py-[5px] pl-[4px] border-2 border-[rgba(118,118,118,0.27)]' />
                    <div className="absolute top-[50%] right-0 translate-y-[-50%] mr-[10px] text-[#737373]">
                      <TiArrowSortedDown />
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="">
                    <p className='text-[16px] text-[#767676] font-dm font-normal '>Show:</p>
                  </div>
                  <div className="flex items-center ml-[5px] relative">
                    <input type="text" placeholder='36' className=' w-[70%] py-[5px] pl-[10px] border-2 border-[rgba(118,118,118,0.26)]' />
                    <div className="absolute top-[50%] right-[60px] translate-y-[-50%] mr-[10px] text-[#737373]">
                      <TiArrowSortedDown />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>



          <div className=" flex justify-between flex-wrap">
            <div className="w-[32%] pt-[40px] ">
              <div className="">
                <div className="relative group overflow-hidden">
                  <img src={product5} className='w-full' alt="" />

                  <div className=" absolute left-0 bottom-[-150px]  w-full bg-[#fff] h-[150px] duration-500 ease-in-out flex items-center justify-end group-hover:bottom-0" >
                    <div className="">
                      <div className="flex items-center justify-end mr-2 py-2">
                        <h3 className='mr-2 text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out'>Add to Wish List</h3>
                        <FaHeart />
                      </div>
                      <div className="flex items-center justify-end mr-2 py-2 ">
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
                  <p className='text-[16px] text-[#262626] font-dm font-bold'>Basic Crew Neck Tee</p>
                </div>
                <div className="">
                  <h3 className='text-[16px] text-[#262626] font-dm font-bold'>$44.00</h3>
                </div>
              </div>
            </div>
            <div className="w-[32%] pt-[40px] ">
              <div className="">
                <div className="relative group overflow-hidden">
                  <img src={product6} className='w-full' alt="" />

                  <div className=" absolute left-0 bottom-[-150px]  w-full bg-[#fff] h-[150px] duration-500 ease-in-out flex items-center justify-end group-hover:bottom-0" >
                    <div className="">
                      <div className="flex items-center justify-end mr-2 py-2">
                        <h3 className='mr-2 text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out'>Add to Wish List</h3>
                        <FaHeart />
                      </div>
                      <div className="flex items-center justify-end mr-2 py-2 ">
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
                  <p className='text-[16px] text-[#262626] font-dm font-bold'>Basic Crew Neck Tee</p>
                </div>
                <div className="">
                  <h3 className='text-[16px] text-[#262626] font-dm font-bold'>$44.00</h3>
                </div>
              </div>
            </div>
            <div className="w-[32%] pt-[40px] ">
              <div className="">
                <div className="relative group overflow-hidden">
                  <img src={product7} className='w-full' alt="" />

                  <div className=" absolute left-0 bottom-[-150px]  w-full bg-[#fff] h-[150px] duration-500 ease-in-out flex items-center justify-end group-hover:bottom-0" >
                    <div className="">
                      <div className="flex items-center justify-end mr-2 py-2">
                        <h3 className='mr-2 text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out'>Add to Wish List</h3>
                        <FaHeart />
                      </div>
                      <div className="flex items-center justify-end mr-2 py-2 ">
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
                  <p className='text-[16px] text-[#262626] font-dm font-bold'>Basic Crew Neck Tee</p>
                </div>
                <div className="">
                  <h3 className='text-[16px] text-[#262626] font-dm font-bold'>$44.00</h3>
                </div>
              </div>
            </div>
            <div className="w-[32%] pt-[40px] ">
              <div className="">
                <div className="relative group overflow-hidden">
                  <img src={product8} className='w-full' alt="" />

                  <div className=" absolute left-0 bottom-[-150px]  w-full bg-[#fff] h-[150px] duration-500 ease-in-out flex items-center justify-end group-hover:bottom-0" >
                    <div className="">
                      <div className="flex items-center justify-end mr-2 py-2">
                        <h3 className='mr-2 text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out'>Add to Wish List</h3>
                        <FaHeart />
                      </div>
                      <div className="flex items-center justify-end mr-2 py-2 ">
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
                  <p className='text-[16px] text-[#262626] font-dm font-bold'>Basic Crew Neck Tee</p>
                </div>
                <div className="">
                  <h3 className='text-[16px] text-[#262626] font-dm font-bold'>$44.00</h3>
                </div>
              </div>
            </div>


            <div className="w-[32%] pt-[40px] ">
              <div className="">
                <div className="relative group overflow-hidden">
                  <img src={product9} className='w-full' alt="" />

                  <div className=" absolute left-0 bottom-[-150px]  w-full bg-[#fff] h-[150px] duration-500 ease-in-out flex items-center justify-end group-hover:bottom-0" >
                    <div className="">
                      <div className="flex items-center justify-end mr-2 py-2">
                        <h3 className='mr-2 text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out'>Add to Wish List</h3>
                        <FaHeart />
                      </div>
                      <div className="flex items-center justify-end mr-2 py-2 ">
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
                  <p className='text-[16px] text-[#262626] font-dm font-bold'>Basic Crew Neck Tee</p>
                </div>
                <div className="">
                  <h3 className='text-[16px] text-[#262626] font-dm font-bold'>$44.00</h3>
                </div>
              </div>
            </div>
            <div className="w-[32%] pt-[40px] ">
              <div className="">
                <div className="relative group overflow-hidden">
                  <img src={product10} className='w-full' alt="" />

                  <div className=" absolute left-0 bottom-[-150px]  w-full bg-[#fff] h-[150px] duration-500 ease-in-out flex items-center justify-end group-hover:bottom-0" >
                    <div className="">
                      <div className="flex items-center justify-end mr-2 py-2">
                        <h3 className='mr-2 text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out'>Add to Wish List</h3>
                        <FaHeart />
                      </div>
                      <div className="flex items-center justify-end mr-2 py-2 ">
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
                  <p className='text-[16px] text-[#262626] font-dm font-bold'>Basic Crew Neck Tee</p>
                </div>
                <div className="">
                  <h3 className='text-[16px] text-[#262626] font-dm font-bold'>$44.00</h3>
                </div>
              </div>
            </div>
            <div className="w-[32%] pt-[40px] ">
              <div className="">
                <div className="relative group overflow-hidden">
                  <img src={product11} className='w-full' alt="" />

                  <div className=" absolute left-0 bottom-[-150px]  w-full bg-[#fff] h-[150px] duration-500 ease-in-out flex items-center justify-end group-hover:bottom-0" >
                    <div className="">
                      <div className="flex items-center justify-end mr-2 py-2">
                        <h3 className='mr-2 text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out'>Add to Wish List</h3>
                        <FaHeart />
                      </div>
                      <div className="flex items-center justify-end mr-2 py-2 ">
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
                  <p className='text-[16px] text-[#262626] font-dm font-bold'>Basic Crew Neck Tee</p>
                </div>
                <div className="">
                  <h3 className='text-[16px] text-[#262626] font-dm font-bold'>$44.00</h3>
                </div>
              </div>
            </div>
            <div className="w-[32%] pt-[40px] ">
              <div className="">
                <div className="relative group overflow-hidden">
                  <img src={product12} className='w-full' alt="" />

                  <div className=" absolute left-0 bottom-[-150px]  w-full bg-[#fff] h-[150px] duration-500 ease-in-out flex items-center justify-end group-hover:bottom-0" >
                    <div className="">
                      <div className="flex items-center justify-end mr-2 py-2">
                        <h3 className='mr-2 text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out'>Add to Wish List</h3>
                        <FaHeart />
                      </div>
                      <div className="flex items-center justify-end mr-2 py-2 ">
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
                  <p className='text-[16px] text-[#262626] font-dm font-bold'>Basic Crew Neck Tee</p>
                </div>
                <div className="">
                  <h3 className='text-[16px] text-[#262626] font-dm font-bold'>$44.00</h3>
                </div>
              </div>
            </div>
            <div className="w-[32%] pt-[40px] ">
              <div className="">
                <div className="relative group overflow-hidden">
                  <img src={product10} className='w-full' alt="" />

                  <div className=" absolute left-0 bottom-[-150px]  w-full bg-[#fff] h-[150px] duration-500 ease-in-out flex items-center justify-end group-hover:bottom-0" >
                    <div className="">
                      <div className="flex items-center justify-end mr-2 py-2">
                        <h3 className='mr-2 text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out'>Add to Wish List</h3>
                        <FaHeart />
                      </div>
                      <div className="flex items-center justify-end mr-2 py-2 ">
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
                  <p className='text-[16px] text-[#262626] font-dm font-bold'>Basic Crew Neck Tee</p>
                </div>
                <div className="">
                  <h3 className='text-[16px] text-[#262626] font-dm font-bold'>$44.00</h3>
                </div>
              </div>
            </div>
            <div className="w-[32%] pt-[40px] ">
              <div className="">
                <div className="relative group overflow-hidden">
                  <img src={product11} className='w-full' alt="" />

                  <div className=" absolute left-0 bottom-[-150px]  w-full bg-[#fff] h-[150px] duration-500 ease-in-out flex items-center justify-end group-hover:bottom-0" >
                    <div className="">
                      <div className="flex items-center justify-end mr-2 py-2">
                        <h3 className='mr-2 text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out'>Add to Wish List</h3>
                        <FaHeart />
                      </div>
                      <div className="flex items-center justify-end mr-2 py-2 ">
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
                  <p className='text-[16px] text-[#262626] font-dm font-bold'>Basic Crew Neck Tee</p>
                </div>
                <div className="">
                  <h3 className='text-[16px] text-[#262626] font-dm font-bold'>$44.00</h3>
                </div>
              </div>
            </div>
            <div className="w-[32%] pt-[40px] ">
              <div className="">
                <div className="relative group overflow-hidden">
                  <img src={product12} className='w-full' alt="" />

                  <div className=" absolute left-0 bottom-[-150px]  w-full bg-[#fff] h-[150px] duration-500 ease-in-out flex items-center justify-end group-hover:bottom-0" >
                    <div className="">
                      <div className="flex items-center justify-end mr-2 py-2">
                        <h3 className='mr-2 text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out'>Add to Wish List</h3>
                        <FaHeart />
                      </div>
                      <div className="flex items-center justify-end mr-2 py-2 ">
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
                  <p className='text-[16px] text-[#262626] font-dm font-bold'>Basic Crew Neck Tee</p>
                </div>
                <div className="">
                  <h3 className='text-[16px] text-[#262626] font-dm font-bold'>$44.00</h3>
                </div>
              </div>
            </div>
            <div className="w-[32%] pt-[40px] ">
              <div className="">
                <div className="relative group overflow-hidden">
                  <img src={product12} className='w-full' alt="" />

                  <div className=" absolute left-0 bottom-[-150px]  w-full bg-[#fff] h-[150px] duration-500 ease-in-out flex items-center justify-end group-hover:bottom-0" >
                    <div className="">
                      <div className="flex items-center justify-end mr-2 py-2">
                        <h3 className='mr-2 text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out'>Add to Wish List</h3>
                        <FaHeart />
                      </div>
                      <div className="flex items-center justify-end mr-2 py-2 ">
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
                  <p className='text-[16px] text-[#262626] font-dm font-bold'>Basic Crew Neck Tee</p>
                </div>
                <div className="">
                  <h3 className='text-[16px] text-[#262626] font-dm font-bold'>$44.00</h3>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </Container>
  )
}

export default Pdtfilter