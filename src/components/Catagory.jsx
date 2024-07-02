import React, { useContext, useEffect, useState, useRef } from 'react';
import Container from './Container';
import { HiMiniBarsArrowDown } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ApiData } from './ContextApi';

const Catagory = () => {
    let dispatch = useDispatch();
    let info = useContext(ApiData);
    let navigate = useNavigate();
    let [catshow, setCatshow] = useState(false);
    let [cartshow, setCartshow] = useState(false);
    let [usershow, setUsershow] = useState(false);
    let [itemshow, setItemshow] = useState(false);
    let itemMenu = useRef();
    let userMenu = useRef();
    let chartMenu = useRef();
    let catMenu = useRef();
    let data = useSelector((state) => state.prodcut.cartItem);
    let [searchChange, setSearchChange] = useState("");
    let [searchFilter, setSearchFilter] = useState([]);
    let [highlightedIndex, setHighlightedIndex] = useState(-1); // State to manage highlighted item

    useEffect(() => {
        document.addEventListener("click", (e) => {
            // Handle click events to toggle visibility
            if (catMenu.current.contains(e.target)) {
                setCatshow(true);
            } else {
                setCatshow(false);
            }

            if (chartMenu.current.contains(e.target)) {
                setCartshow(!cartshow);
            } else {
                setCartshow(false);
            }

            if (userMenu.current.contains(e.target)) {
                setUsershow(!usershow);
            } else {
                setUsershow(false);
            }

            if (itemMenu.current.contains(e.target)) {
                setItemshow(!itemshow);
            } else {
                setItemshow(false);
            }
        });
    }, [catshow, cartshow, usershow, itemshow]);

    // Function to handle search input change
    let handleSearch = (e) => {
        setSearchChange(e.target.value);
        if (e.target.value === "") {
            setSearchFilter([]);
        } else {
            let searchFind = info.filter((item) => item.title.toLowerCase().includes(e.target.value.toLowerCase()));
            setSearchFilter(searchFind);
        }
        setHighlightedIndex(-1); // Reset highlighted index when search changes
    };

    // Function to handle keyboard navigation within search results
    let handleKeyDown = (e) => {
        if (e.key === "ArrowDown") {
            e.preventDefault(); // Prevent default scrolling
            setHighlightedIndex((prevIndex) =>
                prevIndex < searchFilter.length - 1 ? prevIndex + 1 : prevIndex
            );
        } else if (e.key === "ArrowUp") {
            e.preventDefault(); // Prevent default scrolling
            setHighlightedIndex((prevIndex) =>
                prevIndex > 0 ? prevIndex - 1 : prevIndex
            );
        } else if (e.key === "Enter" && highlightedIndex !== -1) {
            // Navigate to the selected item
            navigate(`/shop/${searchFilter[highlightedIndex].id}`);
        }
    };

    // Function to handle direct navigation to a single product
    let handleSingleP = (id) => {
        navigate(`/shop/${id}`);
        setSearchFilter([])
    };

    return (
        <div className='bg-[#F5F5F3]'>
            <Container className={`px-[10px]`}>
                <div className="flex justify-between py-[25px] bg-[#F5F5F3] items-center lg:text-start text-center">
                    {/* Category Menu */}
                    <div className="relative " ref={catMenu}>
                        <div className="flex lg:pb-0 pb-[10px] lg:w-full w-24 cursor-pointer">
                            <HiMiniBarsArrowDown className='text-[28px] text-[#262626] ' />
                            <p className='lg:text-[16px] text-[14px] lg:ml-[0] ml-[-13px] text-[#262626] font-dm lg:pl-[10px]' >Shop by Category</p>
                        </div>
                        {catshow &&
                            <div className=" bg-[#262626] absolute z-50 lg:top-[40px] top-[48px] left-0 lg:w-[300px] w-[200px] ">
                                <ul>
                                    <li className='py-3'><a href="#" className='text-[rgba(255,255,255,0.73)] text-[16px] font-dm font-normal lg:pl-5 pl-0  hover:text-[#fff] hover:pl-10 duration-700'>Accessories</a></li>
                                    <li className='py-3'><a href="#" className='text-[rgba(255,255,255,0.73)] text-[16px] font-dm font-normal lg:pl-5 pl-0  hover:text-[#fff] hover:pl-10 duration-700'>Furniture</a></li>
                                    <li className='py-3 relative' ref={itemMenu}><a href="#" className='text-[rgba(255,255,255,0.73)] text-[16px] font-dm font-normal pl-5  hover:text-[#fff] hover:pl-10 duration-700'>Electronics</a>
                                        {itemshow &&
                                            <div className=" lg:flex z-50 absolute lg:top-[-98px] top-[200px] lg:left-[300px] left-[0] bg-[#FFFFFF] py-[24px] lg:px-[25px]">
                                                {/* Nested menus for Electronics */}
                                                <div className="flex">
                                                    <div className="  w-[100px] ">
                                                        <ul>
                                                            <li><h6 className='text-[14px] text-[#262626] font-dm font-bold pb-[21px]'>Phones</h6></li>
                                                            <li><a href="#" className='text-[14px] text-[#262626] font-dm font-normal hover:font-bold duration-200'>Phone 1</a></li>
                                                            <li className='py-[10px]'><a href="#" className='text-[14px] text-[#262626] font-dm font-normal  hover:font-bold duration-200'>Phone 2</a></li>
                                                            {/* Add more phone links here */}
                                                        </ul>
                                                    </div>
                                                    {/* Add more categories here */}
                                                </div>
                                            </div>
                                        }
                                    </li>
                                    {/* Add more categories here */}
                                </ul>
                            </div>
                        }
                    </div>

                    {/* Search Bar */}
                    <div className="">
                        <div className="relative lg:pb-0 pb-[10px] lg:ml-[0] ml-[-40px]">
                            <input
                                type="text"
                                value={searchChange}
                                onChange={handleSearch}
                                onKeyDown={handleKeyDown} // Handle key events for navigation
                                placeholder='Search Products'
                                className='lg:ml-0 ml-[13px] lg:h-[50px] h-[40px] w-full lg:pl-[21px] pl-[5px] lg:pr-[473px] '
                            />
                            <IoIosSearch className='absolute lg:top-[26%] top-[22%] lg:right-[25px] right-[5px] lg:text-[28px] text-[20px] text-[#262626]' />
                        </div>
                        {/* Display search results */}
                        {searchFilter.length > 0 &&
                            <div className="absolute top-[170px] left-[50%] translate-x-[-50%] z-10 overflow-y-scroll" >
                                {searchFilter.map((item, index) => (
                                    <div
                                        key={item.id}
                                        onClick={() => handleSingleP(item.id)}
                                        className={`flex bg-[#F5F5F3] py-[20px] px-[20px] ${highlightedIndex === index ? 'bg-gray-200' : ''}`}
                                        ref={index === highlightedIndex ? itemMenu : null} // Set ref to highlighted item
                                    >
                                        <div className="flex items-center justify-between  w-[400px]">
                                            <div className="h-[100px] w-[100px]  mr-[20px]">
                                                <img src={item.thumbnail} alt="" />
                                            </div>
                                            <div className="">
                                                <h4 className='text-[14px]  text-[#262626] font-dm font-bold'>{item.title}</h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        }
                    </div>

                    {/* User and Cart Icons */}
                    <div>
                        <div className="flex items-center ">
                            <div className="relative" ref={userMenu}>
                                <a href="#">
                                    <FaUser className='lg:text-[24px] text-[#262626]' />
                                </a>
                                {/* User dropdown */}
                                {usershow &&
                                    <div className="absolute z-50 top-10 right-[0px]">
                                        <div className="text-center">
                                            <ul>
                                                <li className='text-[#262626] bg-[#FFFFFF]  h-[50px] w-[150px] leading-[50px] hover:bg-[#262626] hover:text-[#fff] duration-500 '><Link to="/myaccount">My Account</Link></li>
                                                <li className='text-[#262626] bg-[#FFFFFF]  h-[50px] w-[150px] leading-[50px] hover:bg-[#262626] hover:text-[#fff] duration-500'>Log Out</li>
                                            </ul>
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className="relative" ref={chartMenu}>
                                <a>
                                    {data.length ? <div className="h-[20px] w-[20px] rounded-full absolute top-[-15px] left-[36px] bg-[#F5F5f3] text-center leading-5 font-dm font-normal text-[14px]">{data.length}</div> : ""}
                                    <FaShoppingCart className='lg:text-[24px] text-[#262626] ml-[15px]' />
                                </a>
                                {/* Cart dropdown */}
                                {cartshow &&
                                    <div className="absolute z-50 top-[40px] lg:right-0 right-[-15px] ">
                                        {data.map((item, i) => (
                                            <div key={i} className="">
                                                <div className="flex bg-[#F5F5F3] py-[20px] px-[20px]">
                                                    <div className="flex items-center justify-between w-[350px]">
                                                        <div className="h-[100px] w-[100px]  mr-[20px]">
                                                            <img src={item.thumbnail} alt="" />
                                                        </div>
                                                        <div className="">
                                                            <h4 className='text-[14px ] text-[#262626] font-dm font-bold'>{item.title}</h4>
                                                            <p className='text-[14px ] text-[#262626] font-dm font-bold'>${item.price}</p>
                                                        </div>
                                                        <div onClick={() => dispatch(productClear(i))} className="cursor-pointer ml-[30px]">
                                                            <RxCross2 />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bg-[white] py-[20px] px-[20px]">
                                                    <div className="">
                                                        <h3 className=''><span className='text-[16px] text-[rgba(38,38,38,0.67)] font-dm font-normal'>Subtotal:</span> <span className='text-[16px] text-[rgb(38,38,38)] font-dm font-bold'>${item.price * item.qun}</span></h3>
                                                    </div>
                                                    <div className="flex justify-between py-[20px]">
                                                            <Link to={"/cart"}>
                                                        <div className="">
                                                            <p className='py-[16px] px-[40px] border text-[16px] text-[#262626] font-dm font-normal hover:bg-[#262626] hover:text-[white] duration-500 '>View Cart</p>
                                                        </div>
                                                            </Link>
                                                            <Link to={"/cart"}>
                                                        <div className="">
                                                            <p className='py-[16px] px-[40px] border text-[16px] text-[#262626] font-dm font-normal hover:bg-[#262626] hover:text-[white] duration-500 '>Checkout</p>
                                                        </div>
                                                            </Link>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Catagory;
