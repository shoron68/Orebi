import bnr from "../assets/bnr.png"
import Slider from "react-slick";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import Container from './Container'
import { FaTruckMoving } from "react-icons/fa";
import { IoMdReturnRight } from "react-icons/io";

const Banner = () => {

    // function SampleNextArrow(props) {
    //     const { className, style, onClick } = props;
    //     return (
    //         <div data-aos='fade-right' className='absolute lg:bottom-[-70px] bottom-[-40px] text-[#FF4522] right-[50px] text-[30px] cursor-pointer' onClick={onClick}> <GrLinkNext /> </div>
    //     );
    // }

    // function SamplePrevArrow(props) {
    //     const { className, style, onClick } = props;
    //     return (
    //         <div data-aos='fade-left' className='absolute lg:bottom-[-70px] bottom-[-40px] text-[#FF4522] right-[100px] z-10 text-[30px] cursor-pointer' onClick={onClick}> <GrLinkPrevious /> </div>
    //     );
    // }

    // var settings = {
    //     dots: false,
    //     infinite: true,
    //     autoplay: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     nextArrow: <SampleNextArrow />,
    //     prevArrow: <SamplePrevArrow />,
    // };
    return (
        <>
            <div className="">
                <img src={bnr} alt="" />
            </div>
            <Container className={`py-[30px]`}>

                <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <h2 className="text-[16px] font-dm font-bold text-[#262626]"> 2</h2>
                    <p className="text-[16px] font-dm  text-[#262626] ml-[20px]">Two years warranty</p>
                </div>
                <div className="flex items-center">
                    <FaTruckMoving className="text-[16px] font-dm font-bold text-[#262626]" />
                    <p className="text-[16px] font-dm  text-[#262626] ml-[20px]">Free shipping</p>
                </div>
                <div className="flex items-center">
                    <IoMdReturnRight className="text-[16px] font-dm font-bold text-[#262626]" />
                    <p className="text-[16px] font-dm  text-[#262626] ml-[20px]">Return policy in 30 days</p>
                </div>
                </div>
            </Container>

            {/* <div className="bg-[#D8D8D8]">
                <Slider {...settings}>
                    <div>

                    </div>
                </Slider>
            </div> */}

        </>
    )
}

export default Banner