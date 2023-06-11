import React, { useEffect, useState } from 'react'
import "../Search/Search.css"
import Search from "../../assets/search.png"
import Zevi from "../../assets/ZEVI-GG-LogoDesogn -Option-2-Black 2 (2) 1.png"
import arror1 from "../../assets/Vector (12).png";
import arror2 from "../../assets/Vector (12).png";
import star1 from "../../assets/Star 1.png";
import star2 from "../../assets/Star 5.png";
import love from "../../assets/Vector (13).png"
import love2 from "../../assets/Vector (14).png"
import axios from 'axios';
import Star from '../Stars/Star';
function SearchSession() {
  const [rate, setrate] = useState({
    rate5: 5,
    rate4: 4,
    rate3: 3,
    rate2: 2,
    rate1: 1,
  })
  const [brand, setbrand] = useState({
    mango : 'mango',
    HandM : 'hm'
  })
  const [data, setdata] = useState([])
  const [text, settext] = useState('');




  const fetch = async (api) => {
    const makecall = await axios.get(api);

    setdata(makecall.data)


  }

  const [checkvalue, setcheckvalue] = useState('');
  const [checkvalue2, setcheckvalue2] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
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

  const filterHandle = async (e) => {
    if (e.target.checked) {
      const res = data.filter((item) => parseInt(item.rs) < 600)
      setdata(res);
      setcheckvalue(" ")
    }
  }
  const filterHandle2 = (e) => {
    if (e.target.checked) {
      data.filter((item) => parseInt(item.rs) < 600)
      alert("no data available");
      setcheckvalue2("")
    }
  }
  const handleRate = (e) => {
    if (e.target.checked) {
      const rates3 = data.filter((item) => parseInt(item.star) == e.target.value);
      setdata(rates3)
    }
    else if (e.target.checked) {
      const rates2 = data.filter((item) => parseInt(item.star) == e.target.value);
      setdata(rates2)
    }
    else if (e.target.checked) {
      const rates4 = data.filter((item) => parseInt(item.star) == e.target.value);
      setdata(rates4)
    }
    else if (e.target.checked) {
      const rates5 = data.filter((item) => parseInt(item.star) == e.target.value);
      setdata(rates5)
    }
    else if (e.target.checked) {
      const rates1 = data.filter((item) => parseInt(item.star) == e.target.value);
      setdata(rates1)
    }
  }
  const handleBrand = (e) => {
    e.preventDefault();
    if (e.target.checked) {
      const mango = data.filter((item) => item.mango == e.target.value);
      setdata(mango)
    }
    if (e.target.checked) {
      const HandM = data.filter((item) => item.hm == e.target.value);
      setdata(HandM)
    }
  }

 
  return (
    <div>
      <div>
        <img src={Zevi} alt="" className='zevi2' />
        <form action="" onSubmit={handleSearch}>
          <input type="text" name="" id="" placeholder='Search' className='inputsearch' value={text} onChange={(e) => settext(e.target.value)} />
          <img src={Search} alt="" className='searchImg2' />
        </form>
      </div>

      <div className='leftSession'>
        <h1 className='searchhead'>Search Results</h1>
        <h3 className='brand1'>BRAND</h3>
        <img src={arror1} className='arrow' alt="" />

        <input type="checkbox" className='check1' name="" id="" value={brand.mango} onChange={ handleBrand} />
        <span className='span1'>Mango</span>
        <input type="checkbox" name="" className='check2' id="" value={brand.HandM} onChange={handleBrand} />
        <span className='span2'>H&M</span>
        <div className='line1'></div>
        <h3 className='pricehead'>PRICE RANGE</h3>
        <img src={arror2} className='arrow2' alt="" />
        <input type="checkbox" className='check3' name="" id="rs" value={checkvalue} onChange={filterHandle} />
        <span className='span3'>Under 700</span>
        <input type="checkbox" name="" className='check4' value={checkvalue2} onChange={filterHandle2} />
        <span className='span4'>1000 To 3000</span>
        <div className='line2'></div>
        <h2 className='rate'>RATINGS</h2>
        <input type="checkbox" className='checkrate1' value={rate.rate5} onChange={handleRate} name="" id="" />
        <div className='star'>
          <img src={star1} alt="" className='star1' />
          <img src={star1} alt="" className='star2' />
          <img src={star1} alt="" className='star3' />
          <img src={star1} alt="" className='star4' />
          <img src={star1} alt="" className='star5' />
        </div>
        <input type="checkbox" className='checkrate2' value={rate.rate4} onChange={handleRate} name="" id="" />
        <div className='star'>
          <img src={star1} alt="" className='star6' />
          <img src={star1} alt="" className='star7' />
          <img src={star1} alt="" className='star8' />
          <img src={star1} alt="" className='star9' />
          <img src={star2} alt="" className='star10' />
        </div>
        <input type="checkbox" className='checkrate3' value={rate.rate3} onChange={handleRate} name="" id="" />
        <div className='star'>
          <img src={star1} alt="" className='star11' />
          <img src={star1} alt="" className='star12' />
          <img src={star1} alt="" className='star13' />
          <img src={star2} alt="" className='star14' />
          <img src={star2} alt="" className='star15' />
        </div>
        <input type="checkbox" className='checkrate4' value={rate.rate2} onChange={handleRate} name="" id="" />
        <div className='star'>
          <img src={star1} alt="" className='star16' />
          <img src={star1} alt="" className='star17' />
          <img src={star2} alt="" className='star18' />
          <img src={star2} alt="" className='star19' />
          <img src={star2} alt="" className='star20' />
        </div>
        <input type="checkbox" className='checkrate5' value={rate.rate1} onChange={handleRate} name="" id="" />
        <div className='star'>
          <img src={star1} alt="" className='star21' />
          <img src={star2} alt="" className='star22' />
          <img src={star2} alt="" className='star23' />
          <img src={star2} alt="" className='star24' />
          <img src={star2} alt="" className='star25' />
        </div>
      </div>

      <div className='rightSession'>
     
        {
          data.map((item) => {
            return (
              <>
                <div className='img' >
                  <div className='img-container'>
                    <div className='img-b' >
                      <img src={item.imgs}  className='img1' alt="" />
                    </div>
                    <img onClick={() => {
                      if (data.filter((pro) => parseInt(pro.id) == item.id)) {
                        return item.love = item.love2;
                      }
                    }} src={item.love} alt="" id={item.id} className="love1 love" />
                      <button className='btn' id='btns'>View Product</button>
                 
                    <h5 className='title'>{item.title}</h5>
                    <span className='rup1'> Rs.{item.rs}</span>
                    <span className='rup2'>Rs.{item.rs1}</span>
                    <span className='num'>{item.num}</span>
                    <Star star={item.star} className="stars"/>
                   
                  </div>
                 
                </div>
              </>
            )
          })
        }
      </div>
    </div>
  )
}

export default SearchSession
