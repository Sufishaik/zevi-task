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
  const [data, setdata] = useState([])

  // const [show, setshow] = useState(false);
  const [text, settext] = useState('')
  const handleShow = () => {
    // setshow(true);
    const toggle = document.getElementById("hide");
    toggle.style.display = "block";

  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   navigate("/search")
  // }
  const handleSearch = async (e) => {
    e.preventDefault();
    navigate("/search", {
      state : {
        setdata : setdata(data),
      }
    })
    return await axios.get(`http://localhost:3000/users?q=${text.toLowerCase()}`)
    .then((resp) => {
        setdata(resp.data);
        settext('');
      })
      .catch((err) => console.log("Error", err))
  }
  useEffect(() => {
    fetch('http://localhost:3000/users');
  }, [])

  const fetch = async (api) => {
    const makecall = await axios.get(api);
    console.log(makecall.data);
    setdata(makecall.data)
  }
  useEffect(() => {
    fetch('http://localhost:3000/posts')
  })
  return (
    <div className='home'>
      <div className='container'>
        <img src={Zevi} alt="" className='zevi' />
        <div>
          <div onClick={handleShow}>
            <form action="" onSubmit={handleSearch}>
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
                    <div className='boxImage1'>
                      <img src={item.img1} alt="" className='' />
                      <h5 className='title2'>{item.title2}</h5>

                    </div>
                    <div>

                    </div>

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
