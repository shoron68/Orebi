import React, { useEffect, useState } from 'react'
import Container from './Container'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import product5 from "../assets/Product_5.png"
import product6 from "../assets/Product_6.png"
import product7 from "../assets/Product_7.png"
import product8 from "../assets/Product_8.png"
import ads from "../assets/Ads_2.png"
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";

import axios from 'axios';







const Arrival = () => {
    let [productss, setProductss] = useState([])

    let getData = () => {
        axios.get("https://dummyjson.com/products").then((response) => {
            setProductss(response.data.products);
        })
    }
    useEffect(() => {
        getData()
    }, [])

    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <div className='absolute top-[37%] rounded-full h-[50px] w-[50px] bg-[#979797] text-[#FFFFFF] right-[0px] text-[30px] cursor-pointer' onClick={onClick}> <GrLinkNext className='item-center mt-[10px] ml-[5px] ' /> </div>
        );
    }

    function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
            <div className='absolute top-[37%] rounded-full h-[50px] w-[50px] bg-[#979797] text-[#FFFFFF] left-[0] z-10 text-[30px] cursor-pointer' onClick={onClick}> <GrLinkPrevious className='item-center mt-[10px] ml-[5px] ' /> </div>
        );
    }


    var settings = {
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };





    return (
        <Container className={`lg:pt-[128px] pt-[50px] lg:px-0 px-[10px]`}>
            <div className="">
                <h2 className='text-[39px] text-[#292929] font-dm font-bold'>New Arrivals</h2>
            </div>
            <div className=" pt-[48px]">
                <Slider {...settings}>
                    {productss.map((items) => (
                        <div className="!w-[90%]    ">
                            <div className="">
                                <div className="relative group overflow-hidden">
                                    <img src={items.thumbnail} className='w-full lg:h-[270px]' alt="" />

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
                    ))}



                </Slider>
            </div>
            <div className=" lg:pt-[200px] pt-[50px]">
                <Slider {...settings}>
                <div className="!w-[90%] ">
                            <div className="">
                                <div className="relative group overflow-hidden">
                                    <img src={product5} className='w-full lg:h-[270px]' alt="" />

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
                <div className="!w-[90%] ">
                            <div className="">
                                <div className="relative group overflow-hidden">
                                    <img src={product6} className='w-full lg:h-[270px]' alt="" />

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
                <div className="!w-[90%] ">
                            <div className="">
                                <div className="relative group overflow-hidden">
                                    <img src={product7} className='w-full lg:h-[270px]' alt="" />

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
                <div className="!w-[90%] ">
                            <div className="">
                                <div className="relative group overflow-hidden">
                                    <img src={product8} className='w-full lg:h-[270px]' alt="" />

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
                </Slider>
            </div>


            <div className="lg:pt-[150px] pt-[30px]">
                <img src={ads} alt="" />
            </div>


        </Container>
    )
}

export default Arrival