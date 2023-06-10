import React, { useEffect, useState } from 'react'
import Search from "../../assets/search.png"
import Zevi from "../../assets/ZEVI-GG-LogoDesogn -Option-2-Black 2 (2) 1.png"
import s from "../Home/homeStyle.module.css";
import { images } from '../../Data';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Home() {
  // const data = images;
  const navigate = useNavigate()
  const [data,setdata] = useState(images)

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
      <div className={s.container}>
        <img src={Zevi} alt="" className={s.zevi} />
        <div>
          <div onClick={handleShow}>
            <form action="" onSubmit={handleSubmit}>
              <input type="text" name="" id="" className={s.inputBox} placeholder='Search' value={text} onChange={(e) => settext(e.target.value)} />
            </form>
          </div>
          <img src={Search} alt="" className={s.searchImg} />
        </div>

        <div className={`${s.box}`} id='hide' >
          <h2 className={s.head}>Latest Trends</h2>

          <div className={s.images}>
            {
              data.map((item) => {
                return (
                  <>
                    <img src={item.imgs1} alt="" className={s.boxImage1} />
                    <h5 className={s.boxContent1}>{item.content1}</h5>
                    <img src={item.imgs2} alt="" className={s.boxImage2} />
                    <h5 className={s.boxContent2}>{item.content2}</h5>
                    <img src={item.imgs3} alt="" className={s.boxImage3} />
                    <h5 className={s.boxContent3}>{item.content3}</h5>
                    <img src={item.imgs4} alt="" className={s.boxImage4} />
                    <h5 className={s.boxContent4}>{item.content4}</h5>
                    <img src={item.imgs5} alt="" className={s.boxImage5} />
                    <h5 className={s.boxContent5}>{item.content5}</h5>
                  </>
                )
              })
            }
          </div>
          <div className={s.downContent}>
            <h1 className={s.h1}>Popular suggestions</h1>
            <h4 className={s.h41}>Striped shirt dress</h4>
            <h4 className={s.h42}>Satin shirts</h4>
            <h4 className={s.h43}>Denim jumpsuit</h4>
            <h4 className={s.h44}>Leather dresses</h4>
            <h4 className={s.h45}>Solid tshirts</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
