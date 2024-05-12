import React from 'react'
import Container from './Container'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import product9 from "../assets/Product_9.png"
import product10 from "../assets/Product_10.png"
import product11 from "../assets/Product_11.png"
import product12 from "../assets/Product_12.png"
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";

const Offers = () => {

    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <div className='absolute lg:top-[37%] top-[50%] translate-y-[-50%] rounded-full lg:h-[50px] h-[25px] w-[25px] lg:w-[50px] bg-[#979797] text-[#FFFFFF] right-[0px] lg:text-[30px] text-[16px] cursor-pointer' onClick={onClick}> <GrLinkNext className='item-center lg:mt-[10px] mt-[5px] lg:ml-[5px] ml-[4px] ' /> </div>
        );
    }

    function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
            <div className='absolute lg:top-[37%] top-[50%] translate-y-[-50%] rounded-full lg:h-[50px] h-[25px] w-[25px] lg:w-[50px] bg-[#979797] text-[#FFFFFF] left-[0] z-10 lg:text-[30px] text-[16px]cursor-pointer' onClick={onClick}> <GrLinkPrevious className='item-center lg:mt-[10px] mt-[5px] lg:ml-[5px] ml-[4px] ' /> </div>
        );
    }


    var settings = {
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
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
                    slidesToShow: 1 ,
                    slidesToScroll: 1
                }
            }
        ]
    };
  return (
    <Container className="lg:px-0 px-[10px]">
        <div className="lg:pt-[128px] pt-[50px] ">
            <h3 className='text-[39px] text-[#292929] font-dm font-bold'>Special Offers</h3>
        </div>

        <div className=" pt-[48px]">
                <Slider {...settings}>

                <div className="lg:!w-[90%] ">
                            <div className="">
                                <div className="relative group overflow-hidden">
                                    <img src={product9} className='w-full lg:h-[270px]' alt="" />

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
                <div className="lg:!w-[90%]  ">
                            <div className="">
                                <div className="relative group overflow-hidden">
                                    <img src={product10} className='w-full lg:h-[270px]' alt="" />

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
                <div className="lg:!w-[90%]  ">
                            <div className="">
                                <div className="relative group overflow-hidden">
                                    <img src={product11} className='w-full lg:h-[270px]' alt="" />

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
                <div className="lg:!w-[90%]  ">
                            <div className="">
                                <div className="relative group overflow-hidden">
                                    <img src={product12} className='w-full lg:h-[270px]' alt="" />

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
    </Container>
  )
}

export default Offers