import React, { useContext, useState} from 'react'
import Container from './Container'
import { FiPlus } from "react-icons/fi";
import { IoMdArrowDropup,IoMdArrowDropdown  } from "react-icons/io";
import { IoGrid } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import { TiArrowSortedDown } from "react-icons/ti";

import { ApiData } from './ContextApi';
import Postt from './pagination/Postt';
import PaginationArea from './pagination/PaginationArea';







const Pdtfilter = () => {

  let data = useContext(ApiData)
  let [pageStart, setPageStart] =useState(1)
  let [perPage, setperPage] =useState(6)
  
  let lastPage = pageStart * perPage
  let firstPage  = lastPage - perPage

  let allPage= data.slice(firstPage,lastPage)

  let pageNumber = []
  for (let i = 0 ; i< Math.ceil(data.length / perPage) ; i++){
    pageNumber.push(i)
  }
  let paginate =(pageNumber)=>{
    
    setPageStart(pageNumber + 1)
  }
  let next =()=>{

    if (pageStart < pageNumber . length){
      setPageStart((state)=> state+1)
    }
    
  }
  let prev =()=>{

    if(pageStart > 1){
      setPageStart( (state) => state - 1)
    }
    
  }
  let [show,setShow] =useState(false)
  let [show2,setShow2] =useState(false)
  let [show3,setShow3] =useState(false)


  return (
    <Container >
      <div className=" lg:flex justify-between lg:mx-0 mx-[10px]">
        <div className="lg:w-[28%] lg:pt-[128px] pt-[50px]">
          <div className="">
            <h3 className='text-[49px] text-[#292929] font-dm font-bold '>Products</h3>
            <span className='text-[14px] text-[#767676] font-dm font-normal'>Home &#62; Products</span>
          </div>
          <div className="lg:pt-[130px] pt-[60px]">
            <div  className="">
              <div onClick={()=>setShow(!show)} className="border-b-2 pb-[25px]">
                <span  className='text-[16px] text-[#262626] font-dm font-bold cursor-pointer '>Shop by Category</span>
              </div>
              {show && 
              <ul>
              <li className='flex items-center justify-between text-[14px] text-[#767676] py-[22px] border-b-2 border-[#7676762f]'>Category 1
                <FiPlus /></li>
              <li className='flex items-center text-[14px] text-[#767676] py-[22px] border-b-2 border-[#7676762f]'>Category 2</li>
              <li className='flex items-center text-[14px] text-[#767676] py-[22px] border-b-2 border-[#7676762f] justify-between'>Category 3 <FiPlus /></li>
              <li className='flex items-center text-[14px] text-[#767676] py-[22px] border-b-2 border-[#7676762f]'>Category 4</li>
              <li className='flex items-center text-[14px] text-[#767676] py-[22px] border-b-2 border-[#7676762f]'>Category 5</li>
            </ul>
              }
              
            </div>

            <div className=" pt-[53px]">
            <div onClick={()=>setShow2(!show2)} className="border-b-2 pb-[25px] flex justify-between">
                <span  className='text-[16px] text-[#262626] font-dm font-bold cursor-pointer '>Shop by Color</span>
                {show2 == true ? <IoMdArrowDropup />  : <IoMdArrowDropdown/> }
                
              </div>
              {show2 && 
              <ul>
              <li className='text-[14px] flex items-center text-[#767676] py-[22px] border-b-2 border-[#7676762f]'> <div className="mr-[10px] h-[10px] w-[10px] rounded-full bg-[black]"></div>Color 1
              </li>
              <li className='text-[14px] flex items-center text-[#767676] py-[22px] border-b-2 border-[#7676762f]'> <div className="mr-[10px] h-[10px] w-[10px] rounded-full bg-[#FF8686]"></div>Color 1
              </li>
              <li className='text-[14px] flex items-center text-[#767676] py-[22px] border-b-2 border-[#7676762f]'> <div className="mr-[10px] h-[10px] w-[10px] rounded-full bg-[#7ED321]"></div>Color 1
              </li>
              <li className='text-[14px] flex items-center text-[#767676] py-[22px] border-b-2 border-[#7676762f]'> <div className="mr-[10px] h-[10px] w-[10px] rounded-full bg-[#979797]"></div>Color 1
              </li>
              <li className='text-[14px] flex items-center text-[#767676] py-[22px] border-b-2 border-[#7676762f]'> <div className="mr-[10px] h-[10px] w-[10px] rounded-full bg-[#15CBA5]"></div>Color 1
              </li>

            </ul>
              
              }
            </div>

            <div className="pt-[53px]">

            <div onClick={()=>setShow3(!show3)} className="border-b-2 pb-[25px]">
                <span  className='text-[16px] text-[#262626] font-dm font-bold cursor-pointer '>Shop by Price</span>
              </div>

             {show3 && 
              <ul>
              <li className=' text-[14px] text-[#767676] py-[22px] border-b-2 border-[#7676762f]'>$0.00 - $9.99
              </li>
              <li className='flex items-center text-[14px] text-[#767676] py-[22px] border-b-2 border-[#7676762f]'>$10.00 - $19.99</li>
              <li className=' text-[14px] text-[#767676] py-[22px] border-b-2 border-[#7676762f] '>$20.00 - $29.99 </li>
              <li className='flex items-center text-[14px] text-[#767676] py-[22px] border-b-2 border-[#7676762f]'>$30.00 - $39.99</li>
              <li className='flex items-center text-[14px] text-[#767676] py-[22px] border-b-2 border-[#7676762f]'>$40.00 - $69.99</li>
            </ul>
             
             }
            </div>
          </div>
        </div>
        <div className="lg:w-[70%] lg:pt-[351px] pt-[100px] ">
          <div className="lg:flex justify-between">
            <div className="lg:w-[10%]">
              <div className="flex items-center">
                <div className="mr-[20px] py-[12px] px-[12px] border-2 duration-500 ease-in-out hover:bg-[#262626] hover:text-[#fff]">
                  <IoGrid />
                </div>
                <div className="py-[12px] px-[12px] border-2 duration-500 ease-in-out hover:bg-[#262626] hover:text-[#fff]">
                  <TfiMenuAlt />
                </div>

              </div>
            </div>
            <div className="lg:w-[60%]  ">
              <div className="lg:flex justify-between   ">

                <div className="flex items-center">
                  <div className="">
                    <p className='text-[16px] text-[#767676] font-dm font-normal '>Sort by:</p>
                  </div>
                  <div className="flex items-center ml-[5px] relative ">
                    <input type="text" placeholder='Featured' className=' w-[290px]  py-[5px] pl-[4px] border-2 border-[rgba(118,118,118,0.27)]' />
                    <div className="absolute top-[50%] right-0 translate-y-[-50%] mr-[10px] text-[#737373]">
                      <TiArrowSortedDown />
                    </div>
                  </div>
                </div>

                <div className="flex items-center ">
                  <div className="">
                    <p className='text-[16px] text-[#767676] font-dm font-normal '>Show:</p>
                  </div>
                  <div className="flex items-center ml-[5px] relative">
                    <input type="text" placeholder='36' className=' lg:w-[70%] w-[290px] py-[5px] pl-[10px] border-2 border-[rgba(118,118,118,0.26)]' />
                    <div className="absolute top-[50%] lg:right-[60px] right-0 translate-y-[-50%] mr-[10px] text-[#737373]">
                      <TiArrowSortedDown />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>



          <Postt allPage={allPage}/>
          <div className="text-end">
        <PaginationArea pageNumber={pageNumber} paginate={paginate} pageStart={pageStart} next={next} prev={prev}/>
          </div>


        </div>
      </div>
    </Container>
  )
}

export default Pdtfilter