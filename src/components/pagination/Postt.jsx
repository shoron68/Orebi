import React, { useEffect, useState } from 'react'
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addToCart } from '../slice/productSlice';
import { useNavigate } from 'react-router-dom';

const Postt = ({ allPage, categoryFilter,multi }) => {
    let dispatch = useDispatch()
    let [filter, setFilter] = useState([])
    let [count,setCount] = useState(true)
    let navigate = useNavigate()

    useEffect(() => {
        let showFilter = categoryFilter.slice(0,5)
        setFilter(showFilter)
    }, [categoryFilter])


    let handelFilShow = ()=>{
        setFilter(categoryFilter)
        setCount(false)
    }

    let handelFilHide = () =>{
        setFilter(categoryFilter)
    }
    let handelProductCart = (items)=>{
        dispatch(addToCart({...items, qun:1}))
        setTimeout(()=>{
            navigate("/shop")
        })
    }
    

    return (


        <div className=" flex justify-between flex-wrap mt-[40px]">

            {categoryFilter.length > 0 ?

                <div className=" ">
                    <div className="">
                        {filter.map((items, i) => (
                            <  div key={i} className={`${multi == "activeMulti" ? "!w-[100%]" :"lg:!w-[32%]" }`}>
                                <Link to={`/shop/${items.id}`}>
                                    <div className="">
                                        <div className="relative group overflow-hidden">
                                            <img src={items.thumbnail} className='w-full h-[150px] lg:h-[230px]' alt="" />

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
                                            <p className='text-[16px] text-[#262626] font-dm font-bold'>{items.title}</p>
                                        </div>
                                        <div className="">
                                            <h3 className='text-[16px] text-[#262626] font-dm font-bold'>${items.price}</h3>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="">

                        { count ? categoryFilter.length > 5 && 
                        <button onClick={handelFilShow} className='h-[50px] font-dm font-normal w-[100px] border-[1px] border-[#262626] rounded-[5px] hover:bg-[#262626] hover:text-[#fff] duration-500'>Show All</button> 
                        :
                        <button onClick={handelFilHide} className='h-[50px] font-dm font-normal w-[100px] border-[1px] border-[#262626] rounded-[5px] hover:bg-[#262626] hover:text-[#fff] duration-500'>Hide All</button>
                        
                        }
                        
                    

                    
                    </div>
                                       
                    
                </div>

                :

                <div className={`${multi == "activeMulti" ? " " :"flex justify-between flex-wrap mt-[40px]" }`}>
                    {allPage.map((items, i) => (
                        <  div key={i} className={`${multi == "activeMulti" ? "!w-[100%]" :"lg:!w-[32%]" }`}>
                            
                                <div className="">
                                    <div className="relative group overflow-hidden">
                                    <Link to={`/shop/${items.id}`}>
                                        <img src={items.thumbnail} className='w-full h-[150px] lg:h-[230px]' alt="" />
                                        </Link>
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
                                                <div onClick={()=>handelProductCart(items)} className="flex items-center justify-end mr-2 py-2">
                                                    <h3 className='mr-[10px] text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out'>Add to Cart</h3>
                                                    <FaShoppingCart />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center  py-5">
                                    <div className="">
                                        <p className='text-[16px] text-[#262626] font-dm font-bold'>{items.title}</p>
                                    </div>
                                    <div className="">
                                        <h3 className='text-[16px] text-[#262626] font-dm font-bold'>${items.price}</h3>
                                    </div>
                                </div>
                           
                        </div>
                    ))}
                </div>


            }
        </div>




    )
}

export default Postt