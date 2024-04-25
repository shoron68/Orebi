import React from 'react'
import Container from './Container'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import product from "../assets/Product_1.png"
import product2 from "../assets/Product_2.png"
import product3 from "../assets/Product_3.png"
import product4 from "../assets/Product_4.png"
import product5 from "../assets/Product_5.png"
import product6 from "../assets/Product_6.png"
import product7 from "../assets/Product_7.png"
import product8 from "../assets/Product_8.png"
import ads from "../assets/Ads_2.png"

const Arrival = () => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div data-aos='fade-right' className='absolute top-[37%] h-[50px] w-[50px] bg-[#979797] text-[#FFFFFF] right-[0px] text-[30px] cursor-pointer' onClick={onClick}> <GrLinkNext className='item-center mt-[10px] ml-[5px] '  /> </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div data-aos='fade-left' className='absolute top-[37%] h-[50px] w-[50px] bg-[#979797] text-[#FFFFFF] left-[0] z-10 text-[30px] cursor-pointer' onClick={onClick}> <GrLinkPrevious className='item-center mt-[10px] ml-[5px] ' /> </div>
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
                    slidesToShow: 1,
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

                    <div className="w-[24%]    ">
                        <a href="#" target='blank'>
                            <img src={product} className='lg:w-[90%] w-full h-full ' alt="" />
                        </a>
                    </div>
                    <div className="w-[24%]  ">
                        <a href="#" target='blank'>
                            <img src={product2} className='lg:w-[90%] w-full  ' alt="" />
                        </a>

                    </div>
                    <div className="w-[24%]">
                        <a href="#" target='blank'>
                            <img src={product3} className='lg:w-[90%] w-full   ' alt="" />
                        </a>
                    </div>
                    <div className="w-[24%]">
                        <a href="#" target='blank'>
                            <img src={product4} className='lg:w-[90%] w-full   ' alt="" />
                        </a>
                    </div>
                </Slider>
            </div>
            <div className=" lg:pt-[200px] pt-[50px]">
                <Slider {...settings}>

                    <div className="w-[24%]    ">
                        <a href="#" target='blank'>
                            <img src={product5} className='lg:w-[90%] w-full h-full ' alt="" />
                        </a>
                    </div>
                    <div className="w-[24%]  ">
                        <a href="#" target='blank'>
                            <img src={product6} className='lg:w-[90%] w-full  ' alt="" />
                        </a>

                    </div>
                    <div className="w-[24%]">
                        <a href="#" target='blank'>
                            <img src={product7} className='lg:w-[90%] w-full   ' alt="" />
                        </a>
                    </div>
                    <div className="w-[24%]">
                        <a href="#" target='blank'>
                            <img src={product8} className='lg:w-[90%] w-full   ' alt="" />
                        </a>
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