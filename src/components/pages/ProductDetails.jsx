import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";
import img1 from "../../assets/Image_1.png"
import img2 from "../../assets/Image_2.png"
import img3 from "../../assets/Image_3.png"
import img4 from "../../assets/Image_4.png"
import { TiPlus } from "react-icons/ti";
import Container from '../Container';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
    let [singleProduct, setSingleProduct] = useState([])

    let productId = useParams()
    let dataId = () => {
        axios.get(`https://dummyjson.com/products/${productId.id}`).then((response) => {
            setSingleProduct(response.data)
        })
    }

    useEffect(() => {
        dataId()
    }, [])
    return (
        <Container className="pt-[50px]">
            <div className="flex justify-between flex-wrap">
                {singleProduct?.images?.map((image) => (
                    <div className="w-[48%]">
                        <img src={image} className='h-[250px]' alt="" />
                    </div>
                ))}
            </div>



            <div className="w-[48%]">
                <div className="">
                    <h3 className='text-[39px] text-[#262626] font-dm font-bold'>Product</h3>
                    <div className="flex items-center ">
                        <div className="flex font-dm text-[12px] text-[#FFD881]">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <div className=" ml-[20px]">
                            <span className='text-[14px] font-dm font-normal text-[#767676]'>{singleProduct.rating}</span>
                        </div>

                    </div>
                    <div className="flex pt-[10px] pb-[20px] border-b-2 border-[rgba(118,118,118,0.23)] ">
                        <span><del className='text-[rgba(118,118,118,0.49)] font-dm font-medium' >{singleProduct.discountPercentage}%Discount</del></span>
                        <span className='text-[20px] text-[#262626] font-dm font-bold ml-[20px] '>${singleProduct.price}</span>
                    </div>
                </div>


                <div className="pt-[29px]">
                    <div className="flex items-center">
                        <div className="">
                            <h3 className='text-[20px] uppercase text-[#262626] font-dm font-bold'>color:</h3>
                        </div>
                        <div className="flex items-center ml-[53px]">
                            <div className="h-[25px] w-[25px] rounded-full bg-[#767676]"></div>
                            <div className="h-[30px] w-[30px] rounded-full bg-[#FF8686] mx-[15px]"></div>
                            <div className="h-[25px] w-[25px] rounded-full bg-[#7ED321]"></div>
                            <div className="h-[25px] w-[25px] rounded-full bg-[#B6B6B6] mx-[15px]"></div>
                            <div className="h-[25px] w-[25px] rounded-full bg-[#15CBA5]"></div>
                        </div>
                    </div>
                    <div className="pt-[36px] flex">
                        <div className="">
                            <h4 className='text-[20px] text-[#262626] font-dm font-bold' >SIZE:</h4>
                        </div>

                        <select id="cars" name="cars" className='border-[2px] w-[70px] ml-[20px]' size="1">
                            <option >S</option>
                            <option>M</option>
                            <option >XL</option>
                            <option >XXL</option>
                            <option >XXXL</option>
                        </select>
                        {/* <div className=" ml-[80px]">
                            <input type="text" placeholder='S' className='leading-[30px] font-dm font-normal pl-[10px] text-[rgba(118,118,118,0.35)] border-2 border-[rgba(118,118,118,0.35)]' />
                        </div> */}
                    </div>


                    <div className="pt-[36px] pb-[30px] border-b-2 border-[rgba(118,118,118,0.23)] flex items-center ">
                        <div className="">
                            <h4 className='text-[20px] text-[#262626] font-dm font-bold' >QUANTITY:</h4>
                        </div>
                        <div className=" ml-[20px] flex justify-around h-[40px] w-[150px] border-[1px] items-center">
                            <div className="">-</div>
                            <div className="">0</div>
                            <div className="">+</div>
                        </div>
                    </div>

                    <div className="">

                    </div>
                </div>


                <div className="flex items-center py-[30px] border-b-2 border-[rgba(118,118,118,0.23)]">
                    <div className="">
                        <h4 className='text-[20px] text-[#262626] font-dm font-bold' >STATUS:</h4>
                    </div>
                    <div className=" ml-[30px]">
                        <span className='text-[14px] text-[#262626] font-dm font-normal '>{singleProduct.stock} Items Stock</span>
                    </div>
                </div>


                <div className="py-[30px] border-b-2 border-[rgba(118,118,118,0.23)]">
                    <div className="flex">
                        <div className="">
                            <button className=' h-[50px] w-[200px] font-dm font-normal border-2 border-[#262626] hover:bg-[#262626] hover:text-[#fff] duration-500 ease-in-out'>Add to Wish List</button>
                        </div>
                        <div className="ml-[20px]">
                            <button className='h-[50px] w-[200px] font-dm font-normal border-2 border-[#262626] hover:bg-[#262626] hover:text-[#fff] duration-500 ease-in-out'>Add to Cart</button>
                        </div>
                    </div>
                </div>


                <div className="py-[30px] border-b-2 border-[rgba(118,118,118,0.23)]">
                    <div className="flex justify-between items-center">
                        <div className="">
                            <h4 className='text-[20px] text-[#262626] font-dm font-bold' >FEATURES  & DETAILS</h4>
                        </div>
                        <div className="">
                            <TiPlus />
                        </div>
                    </div>
                </div>


                <div className="py-[30px] border-b-2 border-[rgba(118,118,118,0.23)]">
                    <div className="flex justify-between items-center">
                        <div className="">
                            <h4 className='text-[20px] text-[#262626] font-dm font-bold' >SHIPPING & RETURNS</h4>
                        </div>
                        <div className="">
                            <TiPlus />
                        </div>
                    </div>
                </div>
                <div className="py-[30px]">
                    <div className="">
                        <span className='text-[14px] text-[#767676] font-dm font-normal '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </span>
                    </div>
                </div>

                <div className="py-[50px]">
                    <span className='text-[20px] text-[#262626] font-dm font-bold'>Add a Review</span>
                </div>

                <div className="pb-[30px] border-b-2 border-[rgba(118,118,118,0.23)]">
                    <div className="">
                        <h2 className='text-[20px] text-[#262626] font-dm font-bold'>Name</h2>
                    </div>
                    <div className="pt-[10px]">
                        <input type="text" className='outline-none  w-full' placeholder='Enter Name' />
                    </div>
                </div>


                <div className="py-[30px] border-b-2 border-[rgba(118,118,118,0.23)]">
                    <div className="">
                        <h2 className='text-[20px] text-[#262626] font-dm font-bold'>Email</h2>
                    </div>
                    <div className="pt-[10px]">
                        <input type="text" className='outline-none  w-full' placeholder='Enter Name' />
                    </div>
                </div>


                <div className="pt-[30px] pb-[70px] border-b-2 border-[rgba(118,118,118,0.23)]">
                    <div className="">
                        <h2 className='text-[20px] text-[#262626] font-dm font-bold'>Review</h2>
                    </div>
                    <div className="pt-[10px]">
                        <input type="text" className='outline-none w-full' placeholder='Enter Name' />
                    </div>
                </div>
                <div className="py-[30px]">
                    <button className='w-[200px] h-[50px] border-2 border-[#262626] font-dm font-normal hover:bg-[#262626] hover:text-[#fff] duration-500 ease-in-out'>Post</button>
                </div>
            </div>
        </Container>
    )
}

export default ProductDetails