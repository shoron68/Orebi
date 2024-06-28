import React, { useState } from 'react'
import Container from '../Container'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const auth = getAuth();
    let navigate=useNavigate()
    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")
    let notify = () => toast.success('Success', {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        }) ;

    let handleLogin= ()=>{
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log(userCredential);
    navigate("/")
  })
  .catch((error) => {
    const errorCode = error.code;
  });
    }
  return (
    <Container>
        <div className="pb-[50px]">
            <div className="py-[120px]">
                <h2 className=' font-dm font-bold text-[49px] text-[#262626]'>Login</h2>
                <p className=' font-dm text-[12px] text-[#767676] font-normal'>Home  &gt;  Login</p>
            </div>

            <div className="border-b-[1px] border-[#F0F0F0] pb-[62px]">
                <p className='text-[16px] text-[#767676] font-dm w-[644px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
            </div>

            <div className="">
                <h2 className=' font-dm font-bold text-[39px] text-[#262626] py-[55px]'>Returning Customer</h2>

                <div className="flex justify-between flex-wrap">
                    <div className="w-[49%] border-b-[1px] border-[#F0F0F0]">
                        <h5 className='text-[16px] text-[#262626] font-dm font-bold'>Email address</h5>
                        <input onChange={(e)=>setEmail(e.target.value)} className='py-[20px] text-[14px] text-[#767676] font-dm outline-none' type="mail" placeholder='company@domain.com' />
                    </div>
                    <div className="w-[49%]">
                    <div className="w-[49%] border-b-[1px] border-[#F0F0F0]">
                        <h5 className=' text-[16px] text-[#262626] font-dm font-bold'>Password</h5>
                        <input onChange={(e)=>setPassword(e.target.value)} className=' py-[20px] text-[14px] text-[#767676] font-dm outline-none' type="password" placeholder='********' />
                    </div>
                    </div>
                </div>
            </div>

            <div className="pt-[29px] pb-[70px] border-b-[1px] border-[#F0F0F0]">
                
                <div className="">
                <div onClick={notify} className="">
                    <button onClick={handleLogin} className='text-[16px] text-[#262626] font-dm font-bold h-[50px] w-[200px] border-[1px] border-[#262626] hover:bg-[#262626] hover:text-[#fff] ease-in-out duration-300'>Log in</button>
                </div>
                <ToastContainer
                          position="bottom-center"
                          autoClose={1000}
                          hideProgressBar={false}
                          newestOnTop={false}
                          closeOnClick
                          rtl={false}
                          pauseOnFocusLoss
                          draggable
                          pauseOnHover
                          theme="dark"
                          
                        />
                </div>
                
            </div>

            <div className="pt-[58px] pb-[148px]">
                <div className="">
                    <h4 className='text-[39px] text-[#262626] font-dm font-bold'>New Customer</h4>
                </div>
                <div className="pt-[38px] pb-[51px]">
                    <p className='text-[16px] text-[#767676] font-dm font-normal leading-8 w-[644px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                </div>
                <div className="">
                <div className="">
                    <Link to="/signup">
                    <button className='text-[16px] text-[#262626] font-dm font-bold h-[50px] w-[200px] border-[1px] border-[#262626] hover:bg-[#262626] hover:text-[#fff] ease-in-out duration-300'>Continue</button>
                    </Link>
                </div>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Login