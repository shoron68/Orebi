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

const Offers = () => {

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
    <Container>
        <div className="pt-[128px]">
            <h3 className='text-[39px] text-[#292929] font-dm font-bold'>Special Offers</h3>
        </div>

        <div className=" pt-[48px]">
                <Slider {...settings}>

                    <div className="w-[24%]    ">
                        <a href="#" target='blank'>
                            <img src={product9} className='lg:w-[90%] w-full h-full ' alt="" />
                        </a>
                    </div>
                    <div className="w-[24%]  ">
                        <a href="#" target='blank'>
                            <img src={product10} className='lg:w-[90%] w-full  ' alt="" />
                        </a>

                    </div>
                    <div className="w-[24%]">
                        <a href="#" target='blank'>
                            <img src={product11} className='lg:w-[90%] w-full   ' alt="" />
                        </a>
                    </div>
                    <div className="w-[24%]">
                        <a href="#" target='blank'>
                            <img src={product12} className='lg:w-[90%] w-full   ' alt="" />
                        </a>
                    </div>
                </Slider>
            </div>
    </Container>
  )
}

export default Offers