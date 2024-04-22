import React, { useState } from 'react'
import Container from './Container'
import Logo from "../assets/Logo.png"
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Nav = () => {
    let [show,setShow]=useState(false)
    return (
        <Container className={`px-[10px]`}>
            <div className="flex justify-between items-center py-[32px] lg:bg-[#FFFFFF] bg-[#FFFFFF] ">
                <div className="w-[10%]">
                    <img src={Logo} alt="" />
                </div>
                <div className="w-[90%]">
                    <ul className={`lg:flex justify-center lg:static absolute -z-30  ${show ==true ? 'top-[88px] left-[0px] bg-[rgba(64,193,248,0.12)]  w-full  duration-700 text-center': ' duration-700 top-[-400px] left-[0px] text-center  w-full bg-[none] '}`}>
                        <li className='text-[16px] text-[#262626] font-dm font-bold'>Home</li>
                        <li className='lg:px-[40px] lg:py-0 py-2 text-[16px] text-[#262626] font-dm font-regular'>Shop</li>
                        <li className='text-[16px] text-[#262626] font-dm font-regular' >About</li>
                        <li className='lg:px-[40px] lg:py-0 py-2 text-[16px] text-[#262626] font-dm font-regular'>Contacts</li>
                        <li className='text-[16px] text-[#262626] font-dm font-regular'>Journal</li>
                    </ul>
                </div>
                <div className=" lg:hidden relative " onClick={()=>{setShow(!show)}}>
                {show==true ? <RxCross2 className='text-[#262626] text-[25px]'/> : <FaBars className='text-[#262626] text-[25px]' />}
            </div>
            </div>
           
        </Container>
    )
}

export default Nav