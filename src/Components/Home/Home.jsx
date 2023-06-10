import React, { useEffect, useState } from 'react'
import Search from "../../assets/search.png"
import Zevi from "../../assets/ZEVI-GG-LogoDesogn -Option-2-Black 2 (2) 1.png"
import "../Home/homeStyle.css";
// import { images } from '../../Data';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Home() {
  // const data = images;
  const navigate = useNavigate()
  const [data,setdata] = useState([])

  // const [show, setshow] = useState(false);
  const [text, settext] = useState('')
  const handleShow = () => {
    // setshow(true);
    const toggle = document.getElementById("hide");
    toggle.style.display = "block";

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search")
  }
  const fetch = async (api) => {
    const makecall = await axios.get(api);
    console.log(makecall.data);
    setdata(makecall.data)
  }
  useEffect(() =>{
    fetch('http://localhost:3000/users')
  })
  return (
    <div>
      <div className='container'>
        <img src={Zevi} alt="" className='zevi' />
        <div>
          <div onClick={handleShow}>
            <form action="" onSubmit={handleSubmit}>
              <input type="text" name="" id="" className='inputBox' placeholder='Search' value={text} onChange={(e) => settext(e.target.value)} />
            </form>
          </div>
          <img src={Search} alt="" className='searchImg' />
        </div>

        <div className='box' id='hide' >
          <h2 className='head'>Latest Trends</h2>

          <div className='images'>
            {
              data.map((item) => {
                return (
                  <>
                    <img src={item.imgs1} alt="" className='boxImage1' />
                    <h5 className='boxContent1'>{item.content1}</h5>
                    <img src={item.imgs2} alt="" className='boxImage2' />
                    <h5 className='boxContent2'>{item.content2}</h5>
                    <img src={item.imgs3} alt="" className='boxImage3' />
                    <h5 className='boxContent3'>{item.content3}</h5>
                    <img src={item.imgs4} alt="" className='boxImage4' />
                    <h5 className='boxContent4'>{item.content4}</h5>
                    <img src={item.imgs5} alt="" className='boxImage5' />
                    <h5 className='boxContent5'>{item.content5}</h5>
                  </>
                )
              })
            }
          </div>
          <div className='downContent'>
            <h1 className='h1'>Popular suggestions</h1>
            <h4 className='h41'>Striped shirt dress</h4>
            <h4 className='h42'>Satin shirts</h4>
            <h4 className='h43'>Denim jumpsuit</h4>
            <h4 className='h44'>Leather dresses</h4>
            <h4 className='h45'>Solid tshirts</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
