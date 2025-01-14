import React from 'react'

const Contact = () => {
  return (
    <div className="contact max-w-container mx-auto py-[50px]">
      <div className="form w-1/2 mx-auto bg-[#d6d6d6] p-[20px] rounded-[5px]">
        <h2 className='text-[20px] font-bold bg-[#e9e9e9] p-[10px] mb-[30px]'>FILL UP FORM</h2>
        <form action="post">
          <div className="User flex w-full items-center my-[10px]">
            <label htmlFor="uname" className='w-[30%]'>Your Name</label>
            <input type="text" placeholder='Your Name Here' id='uname' className='w-[70%] p-[10px]'/>
          </div>
          <div className="User flex w-full items-center my-[10px]">
            <label htmlFor="umail" className='w-[30%]'>Your E-mail</label>
            <input type="mail" placeholder='Your E-mail Here' id='umail' className='w-[70%] p-[10px]'/>
          </div>
          <div className="User w-full items-center my-[10px]">
            <label htmlFor="utxt" className='w-[30%]'>Your Message</label>
            <textarea name="mytext" placeholder='Your message here' id="utxt" className='w-full h-[120px] p-[10px]'></textarea>
          </div>
          <div className="btns flex justify-end">
            <button className='py-[15px] px-[30px] bg-[#262626] text-[#fff] font-bold hover:bg-[#770] hover:text-[#ff0] duration-[1s]'>Send Message</button>
          </div>
        </form>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1826.0851957330794!2d90.38057735156832!3d23.741302499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1736846374053!5m2!1sen!2sbd" className='w-full h-[400px] my-[50px]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Contact