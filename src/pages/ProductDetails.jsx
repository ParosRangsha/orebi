import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import MyBtns from '../components/btns/MyBtns';
import { FaPlus, FaMinus } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";



const ProductDetails = () => {
    let [featureShow, setfeatureShow] = useState(false)
    let changeshow = ()=>{
      setfeatureShow(!featureShow)
    }
    let [shipShow, setshipShow] = useState(false)
    let changeshipShow = ()=>{
      setshipShow(!shipShow)
    }
    let i = 0;
    let targetID = useParams();
    let [singleID, setSingleID] = useState({})
    let getData = ()=>{
      axios.get(`https://dummyjson.com/products/${targetID.id}`).then((response)=>{
        setSingleID(response.data)
      });
    };
    useEffect(()=>{
      getData()
    },[])
  return (
    <div className="max-w-container mx-auto my-[50px]">
      <div className="thumb flex justify-center items-center h-[40vh]">
        <img src={singleID.thumbnail} alt="" className='hover:scale-[250%] duration-[1s] hover:z-[999] hover:bg-[yellow] hover:fixed hover:top-[50%] hover:translate-y-[-50%]'/>
      </div>
      <h2 className='font-bold text-[30px]'>{singleID.title}</h2>
      <p className='mb-[20px]'><span className='font-bold'>Description: </span>{singleID.description}</p>
      <div className="price flex items-center gap-3">
        <p><span className='font-bold'>Price: </span></p>
        <p><del>{Math.floor(Math.floor(singleID.price / 100 * singleID.discountPercentage) + singleID.price)}.00$</del></p>
        <p className='font-bold text-[25px]'>{singleID.price}$</p>
        <p> with {Math.floor(singleID.discountPercentage)}% discount</p>
      </div>
      <div className="Details">
        <p><span className='font-bold'>Rating: </span>{singleID.rating} of 5.00</p>
        <p><span className='font-bold'>Stock: </span>{singleID.stock} pieces.</p>
      </div>
      <div className="color flex items-center gap-3">
        <p><span className='font-bold'>Color: </span></p>
        <div className="item flex gap-2 items-center">
          <div className="clr bg-[red] h-[20px] w-[20px] rounded-[50%] hover:scale-[120%] duration-[0.5s] cursor-pointer"></div>
          <div className="clr bg-[green] h-[20px] w-[20px] rounded-[50%] hover:scale-[120%] duratio-[0.5s] cursor-pointer"></div>
          <div className="clr bg-[blue] h-[20px] w-[20px] rounded-[50%] hover:scale-[120%] duration-[0.5s] cursor-pointer"></div>
          <div className="clr bg-[Yellow] h-[20px] w-[20px] rounded-[50%] hover:scale-[120%] duratio-[0.5s] cursor-pointer"></div>
          <div className="clr bg-[grey] h-[20px] w-[20px] rounded-[50%] hover:scale-[120%] duration-[0.5s] cursor-pointer"></div>
          <div className="clr bg-[olive] h-[20px] w-[20px] rounded-[50%] hover:scale-[120%] duration-[0.5s] cursor-pointer"></div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <p><span className='font-bold'>Size: </span></p>
        <select name="size" id="size" className='border-[1px] p-[5px] m-[5px]'>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div className="btns flex gap-3">
        <MyBtns link="/cart" caption="Add to Wish List" />
        <MyBtns link="/cart" caption="Add to Cart" />
      </div>
      <div className="features py-[20px]">
        <div className="heading flex justify-between items-center">
          <h2 className='font-bold'>FEATURES  & DETAILS</h2> 
          { featureShow ? <FaMinus onClick={changeshow}/> : <FaPlus  onClick={changeshow}/>}
        </div>
        {featureShow && <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, ad quaerat corporis cupiditate placeat consequuntur odit temporibus quia quae minima labore corrupti! Eveniet labore sunt omnis sapiente ex voluptatem! Voluptatem facilis architecto eius totam provident, accusantium alias iure id? Id maiores impedit alias tempora, pariatur, incidunt est consequuntur dolores totam numquam ea soluta nihil. Quos voluptas dolores incidunt quam eos sed velit sequi, distinctio placeat animi dolorum esse mollitia enim numquam debitis suscipit quia similique odio cum ab! Inventore unde sapiente repellendus, saepe iusto nisi reprehenderit molestias illo, magni sint exercitationem labore. Dolore alias quod ullam, molestias quam fuga tempora vel iure temporibus, assumenda, reiciendis repellendus! Temporibus eligendi deleniti molestias sint labore, fuga nihil veniam, vitae, sapiente sequi soluta minus laudantium rerum cupiditate sunt natus. Cumque corporis quos, recusandae ducimus exercitationem labore, dolorum in quia neque distinctio veniam accusamus ut corrupti debitis dicta enim, illum dolores temporibus obcaecati. Rem, officia maxime quibusdam tempora culpa repellat id veritatis necessitatibus nulla unde odio dicta est expedita perspiciatis libero ex dolor quae! Est sint cumque consequatur molestiae mollitia corrupti libero eos autem quisquam architecto, nulla fugit quidem quo repudiandae corporis cupiditate vero aperiam incidunt exercitationem rerum molestias porro harum? Deserunt, molestiae modi consectetur labore inventore temporibus sapiente fugiat saepe tempora magnam sit maiores nemo provident ex, vel suscipit ipsum enim impedit, vitae sunt error dicta dolor quos quis.</p>}
        
      </div>
      <div className="features py-[20px]">
        <div className="heading flex justify-between items-center">
          <h2 className='font-bold'>SHIPPING & RETURNS</h2> 
          { shipShow ? <FaMinus onClick={changeshipShow}/> : <FaPlus  onClick={changeshipShow}/>}
        </div>
        {shipShow && <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, ad quaerat corporis cupiditate placeat consequuntur odit temporibus quia quae minima labore corrupti! Eveniet labore sunt omnis sapiente ex voluptatem! Voluptatem facilis architecto eius totam provident, accusantium alias iure id? Id maiores impedit alias tempora, pariatur, incidunt est consequuntur dolores totam numquam ea soluta nihil. Quos voluptas dolores incidunt quam eos sed velit sequi, distinctio placeat animi dolorum esse mollitia enim numquam debitis suscipit quia similique odio cum ab! Inventore unde sapiente repellendus, saepe iusto nisi reprehenderit molestias illo, magni sint exercitationem labore. Dolore alias quod ullam, molestias quam fuga tempora vel iure temporibus, assumenda, reiciendis repellendus! Temporibus eligendi deleniti molestias sint labore, fuga nihil veniam, vitae, sapiente sequi soluta minus laudantium rerum cupiditate sunt natus. Cumque corporis quos, recusandae ducimus exercitationem labore, dolorum in quia neque distinctio veniam accusamus ut corrupti debitis dicta enim, illum dolores temporibus obcaecati. Rem, officia maxime quibusdam tempora culpa repellat id veritatis necessitatibus nulla unde odio dicta est expedita perspiciatis libero ex dolor quae! Est sint cumque consequatur molestiae mollitia corrupti libero eos autem quisquam architecto, nulla fugit quidem quo repudiandae corporis cupiditate vero aperiam incidunt exercitationem rerum molestias porro harum? Deserunt, molestiae modi consectetur labore inventore temporibus sapiente fugiat saepe tempora magnam sit maiores nemo provident ex, vel suscipit ipsum enim impedit, vitae sunt error dicta dolor quos quis.</p>}
      </div>
      <div className="review flex gap-6">
        <p className='text-[#262626]'>Description</p>
        <p className='text-[#000] font-bold'>Review (01)</p>
      </div>
      <p className='text-[#767676] py-[20px]'>01 review for Product</p>
      <div className="nam flex gap-6 items-center">
        <p className='font-bold text-[18px]'>John Ford</p>
        <div className="star flex gap-2 text-[#995]">
          <GoStarFill/><GoStarFill/><GoStarFill/><GoStarFill/><GoStarFill/>
        </div>
      </div>
      <p className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, cumque aperiam cupiditate earum tempora et rerum! Nobis inventore, blanditiis ullam nihil dolores perferendis numquam cumque reiciendis voluptas vitae deserunt placeat officiis consequatur! Deserunt in eligendi sed, repudiandae explicabo ipsam ipsum dolorum nam rem aut laudantium placeat nesciunt repellat rerum ad aperiam cum aliquid repellendus, cumque iure! Voluptatibus nostrum iste facilis odio vero ab, sequi voluptate quae temporibus iusto sint eum sed, perferendis laboriosam quasi, officia reiciendis aspernatur dolor dolore? Quo tempore perspiciatis delectus porro excepturi. At earum nesciunt totam suscipit.</p>
      <div className="addareview">
        <h2 className='text-[20px] font-bold py-[50px]'>Add a Review</h2>
        <label htmlFor="uname" className='font-bold'>Name</label>
        <input type="text" id='uname' className='block p-[5px] border-[1px] mb-[20px]' placeholder='Your name here'/>
        <label htmlFor="umail" className='font-bold'>Email</label>
        <input type="mail" id='umail' className='block p-[5px] border-[1px] mb-[20px]' placeholder='Your email here'/>
        <label htmlFor="txtArea" className='font-bold'>Email</label>
        <textarea name="msgbox" id="txtArea" className='block border-[1px] min-h-[150px] mb-[30px]'></textarea>
      </div>
      <MyBtns link='/message' caption='Post'/>
    </div>
  )
}

export default ProductDetails