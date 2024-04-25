import React, { useEffect, useState } from 'react'
import Container from './Container'
import { HiMiniBarsArrowDown } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { useRef } from 'react';
import { RxCross2 } from "react-icons/rx";



const Catagory = () => {
    let [catshow, setCatshow] = useState(false)
    let [cartshow, setCartshow] = useState(false)
    let [usershow, setUsertshow] = useState(false)
    let [itemshow, setItemshow] = useState(false)
    let itemMenu = useRef()
    let userMenu = useRef()
    let chartMenu = useRef()
    let catMenu = useRef()

    useEffect(() => {
        document.addEventListener("click", (e) => {
            if (catMenu.current.contains(e.target) == true) {
                setCatshow(true)
            } else {
                setCatshow(false)
            }

            if (chartMenu.current.contains(e.target) == true) {
                setCartshow(!cartshow)
            } else {
                setCartshow(false)
            }

            if (userMenu.current.contains(e.target) == true) {
                setUsertshow(!usershow)
            } else {
                setUsertshow(false)
            }

            if (itemMenu.current.contains(e.target) == true) {
                setItemshow(!itemshow)
            } else {
                setItemshow(false)
            }


        })
    }, [catshow,cartshow,usershow,itemshow])



    return (

        <div className='bg-[#F5F5F3]'>
            <Container className={`px-[10px]`}>
                <div className=" flex justify-between py-[25px] bg-[#F5F5F3] items-center lg:text-start text-center">
                    <div className="relative " ref={catMenu}>
                        <div className="flex lg:pb-0 pb-[10px] lg:w-full w-24 cursor-pointer">
                            <HiMiniBarsArrowDown className='text-[28px] text-[#262626] ' />
                            <p className='lg:text-[16px] text-[14px] lg:ml-[0] ml-[-13px] text-[#262626] font-dm lg:pl-[10px]' >Shop by Category</p>
                        </div>

                        {catshow &&
                            <div className=" bg-[#262626] absolute z-50 lg:top-[40px] top-[48px] left-0 lg:w-[300px] w-[200px] ">
                                <ul>
                                    <li className='py-3'><a href="#" className='text-[rgba(255,255,255,0.73)] text-[16px] font-dm font-normal lg:pl-5 pl-0  hover:text-[#fff] hover:pl-10 duration-700'>Accesories</a></li>
                                    <li className='py-3'><a href="#" className='text-[rgba(255,255,255,0.73)] text-[16px] font-dm font-normal lg:pl-5 pl-0  hover:text-[#fff] hover:pl-10 duration-700'>Furniture</a></li>
                                    <li className='py-3 relative' ref={itemMenu}><a href="#" className='text-[rgba(255,255,255,0.73)] text-[16px] font-dm font-normal pl-5  hover:text-[#fff] hover:pl-10 duration-700'>Electronics</a>

                                        {itemshow &&
                                            <div className=" lg:flex z-50 absolute lg:top-[-98px] top-[200px] lg:left-[300px] left-[0] bg-[#FFFFFF] py-[24px] lg:px-[25px]">
                                                <div className="flex">
                                                <div className="  w-[100px] ">
                                                    <ul>
                                                        <li><h6 className='text-[14px] text-[#262626] font-dm font-bold pb-[21px]'>Phones</h6></li>
                                                        <li><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Phone 1</a></li>
                                                        <li className='py-[10px]'><a href="#" className='text-[14px] text-[#262626] font-dm font-normal  hover:font-bold duration-200'>Phone 2</a></li>
                                                        <li><a href="#" className='text-[14px] text-[#262626] font-dm hover:font-bold duration-200 font-normal'>Phone 3</a></li>
                                                        <li className='py-[10px]'><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Phone 4</a></li>
                                                        <li><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Phone 5</a></li>
                                                        <li className='py-[10px]'><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Phone 6</a></li>
                                                    </ul>
                                                </div>
                                                <div className=" w-[100px]">
                                                    <ul>
                                                        <li><h6 className='text-[14px] text-[#262626] font-dm font-bold pb-[21px]'>Computers</h6></li>
                                                        <li><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Computer 1</a></li>
                                                        <li className='py-[10px]'><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Computer 2</a></li>
                                                        <li><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Computer 3</a></li>
                                                        <li className='py-[10px]'><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Computer 4</a></li>
                                                        <li><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Computer 5</a></li>
                                                        <li className='py-[10px]'><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Computer 6</a></li>
                                                    </ul>
                                                </div>
                                                </div>
                                                <div className="flex">
                                                <div className=" w-[140px]">
                                                    <ul>
                                                        <li><h6 className='text-[14px] text-[#262626] font-dm font-bold pb-[21px]'>Smart watches</h6></li>
                                                        <li><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Smart watches 1</a></li>
                                                        <li className='py-[10px]'><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Smart watches 2</a></li>
                                                        <li><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Smart watches 3</a></li>
                                                        <li className='py-[10px]'><a href="#" className='text-[14px] text-[#262626] font-dm font-normal'>Smart watches 4</a></li>
                                                        <li><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Smart watches 5</a></li>
                                                        <li className='py-[10px]'><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Smart watches 6</a></li>
                                                    </ul>
                                                </div>
                                                <div className=" w-[100px]">
                                                    <ul>
                                                        <li><h6 className='text-[14px] text-[#262626] font-dm font-bold pb-[21px]'>Cameras</h6></li>
                                                        <li><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Camera 1</a></li>
                                                        <li className='py-[10px]'><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Camera 2</a></li>
                                                        <li><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Camera 3</a></li>
                                                        <li className='py-[10px]'><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Camera 4</a></li>
                                                        <li><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Camera 5</a></li>
                                                        <li className='py-[10px]'><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Camera 6</a></li>
                                                    </ul>
                                                </div>
                                                </div>
                                            </div>
                                        }


                                    </li>
                                    <li className='py-3'><a href="#" className='text-[rgba(255,255,255,0.73)] text-[16px] font-dm font-normal lg:pl-5 pl-0  hover:text-[#fff] hover:pl-10 duration-700'>Clothes</a></li>
                                    <li className='py-3'><a href="#" className='text-[rgba(255,255,255,0.73)] text-[16px] font-dm font-normal lg:pl-5 pl-0  hover:text-[#fff] hover:pl-10 duration-700'>Bags</a></li>
                                    <li className='py-3'><a href="#" className='text-[rgba(255,255,255,0.73)] text-[16px] font-dm font-normal lg:pl-5 pl-0  hover:text-[#fff] hover:pl-10 duration-700'>Home appliances</a></li>
                                </ul>
                            </div>
                        }


                    </div>
                    <div className="relative lg:pb-0 pb-[10px] lg:ml-[0] ml-[-40px]">

                        <input type="text" placeholder='Search Products' className='lg:ml-0 ml-[13px] lg:h-[50px] h-[40px] w-full lg:pl-[21px] pl-[5px] lg:pr-[473px] ' />
                        <IoIosSearch className='absolute lg:top-[26%] top-[22%] lg:right-[25px] right-[5px] lg:text-[28px] text-[20px] text-[#262626]' />
                    </div>
                    <div >
                        <div className="flex items-center ">
                            <div className="relative" ref={userMenu}>
                                <a href="#" >
                                    <FaUser className='lg:text-[24px] text-[#262626]' />
                                </a>
                                {usershow &&
                                    <div className="absolute z-50 top-10 right-[0px]">
                                        <div className="text-center">
                                            <ul>
                                                <li className='text-[#262626] bg-[#FFFFFF]  h-[50px] w-[150px] leading-[50px] hover:bg-[#262626] hover:text-[#fff] duration-500 '>My Account</li>
                                                <li className='text-[#262626] bg-[#FFFFFF]  h-[50px] w-[150px] leading-[50px] hover:bg-[#262626] hover:text-[#fff] duration-500 '>Log Out</li>
                                            </ul>
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className="relative" ref={chartMenu}>
                                <a href="#"  >
                                    <FaShoppingCart className='lg:text-[24px] text-[#262626] ml-[15px]' />
                                </a>
                                {cartshow &&
                                    <div className="absolute z-50 top-[40px] lg:right-0 right-[-15px] ">
                                        <div className="flex bg-[#F5F5F3] py-[20px] px-[20px]">
                                            <div className="flex items-center justify-between w-[350px]">
                                                <div className="h-[100px] w-[100px] bg-[#979797] mr-[20px]"></div>
                                                <div className="">
                                                    <h4 className='text-[14px ] text-[#262626] font-dm font-bold'>Black Smart Watch</h4>
                                                    <p className='text-[14px ] text-[#262626] font-dm font-bold'>$44.00</p>
                                                </div>
                                                <div className="ml-[30px]">
                                                    <RxCross2 />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-[white] py-[20px] px-[20px]">
                                            <div className="">
                                                <h3 className=''><span className='text-[16px] text-[rgba(38,38,38,0.67)] font-dm font-normal'>Subtotal:</span> <span className='text-[16px] text-[rgb(38,38,38)] font-dm font-bold'> $44.00</span></h3>
                                            </div>
                                            <div className="flex justify-between py-[20px]">
                                                <div className="">
                                                    <a href="#" className='py-[16px] px-[40px] border text-[16px] text-[#262626] font-dm font-normal hover:bg-[#262626] hover:text-[white] duration-500 '>View Cart</a>
                                                </div>
                                                <div className="">
                                                    <a href="#" className='py-[16px] px-[40px] border text-[16px] text-[#262626] font-dm font-normal hover:bg-[#262626] hover:text-[white] duration-500 '>Checkout</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }

                            </div>
                        </div>





                    </div>
                </div>
            </Container>
        </div>

    )
}

export default Catagory