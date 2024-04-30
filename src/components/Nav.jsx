import React, { useState } from 'react'
import Container from './Container'
import Logo from "../assets/Logo.png"
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Nav = () => {
    let [show,setShow]=useState(false)
    return (
        <Container className={`px-[10px]`}>
            <div className="flex justify-between items-center py-[32px] lg:bg-[#FFFFFF] bg-[#FFFFFF] ">
                <div className="w-[10%]">
                    <img src={Logo} alt="" />
                </div>
                <div className="w-[90%]">
                    <ul className={`lg:flex justify-center lg:static absolute -z-30  ${show ==true ? 'top-[88px] left-[0px] bg-[#F5F5F3] z-50  w-full  duration-700 text-center': ' duration-700 top-[-400px] left-[0px] text-center  w-full bg-[none] '}`}>
                        <li className='text-[16px] text-[#262626] font-dm font-bold'><Link to="/">Home</Link></li>
                        <li className='lg:px-[40px] lg:py-0 py-2 text-[16px] text-[#262626] font-dm font-regular'><Link to="/shop">Shop</Link></li>
                        <li className='text-[16px] text-[#262626] font-dm font-regular' ><Link to="/about">About</Link></li>
                        <li className='lg:px-[40px] lg:py-0 py-2 text-[16px] text-[#262626] font-dm font-regular'><Link to="/contact">Contacts</Link></li>
                        <li className='text-[16px] text-[#262626] font-dm font-regular'><Link to="/journal">Journal</Link></li>
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