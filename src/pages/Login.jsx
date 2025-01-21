import React from 'react'
import { Link } from 'react-router-dom'
import MyBtns from '../components/btns/MyBtns'

const Login = () => {
  return (
    <div className="max-w-container mx-auto my-[50px]">
      <h2 className='font-bold text-[50px]'>Login</h2>
      <div className="addre flex mb-[30px]">
        <Link to='/'>Home</Link>
        <p>/</p>
        <Link to='/login'>Login</Link>
      </div>
      <p className='text-justify text-[#777]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quam itaque, tempora modi dolor quisquam impedit, veniam consectetur fugit eos perferendis totam placeat molestias aut, magnam ut deleniti odit deserunt necessitatibus fugiat. Cumque, quo consectetur?</p>
      <h2 className='text-[40px] font-bold mt-[100px]'>Returning Customer</h2>
      <div className="form">
        <div className="user">
          <label htmlFor="uemail">E-mail Address</label>
          <input type="mail" id='uemail' placeholder='company@domain.com' className='block border-[1px] border-[#000] p-[10px] mb-[20px]'/>
        </div>
        <div className="user">
          <label htmlFor="upass">Password</label>
          <input type="password" id='upass' placeholder='Password' className='block border-[1px] border-[#000] p-[10px] mb-[20px]'/>
        </div>
        <MyBtns link='/login' caption='Login'/>
      </div>
      <h2 className='mt-[100px] text-[40px] font-bold'>New Customer</h2>
      <p className='text-justify text-[#777] mb-[20px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
      <MyBtns link='/signup' caption='Continue'/>
    </div>
  )
}

export default Login