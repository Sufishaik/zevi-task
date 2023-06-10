import React, { useEffect, useState } from 'react'
import "../Search/Search.css"
import Search from "../../assets/search.png"
import Zevi from "../../assets/ZEVI-GG-LogoDesogn -Option-2-Black 2 (2) 1.png"
// import arror from "../../assets/angle-right 1.png";
import arror1 from "../../assets/Vector (12).png";
import arror2 from "../../assets/Vector (12).png";
import star1 from "../../assets/Star 1.png";
import star2 from "../../assets/Star 5.png";
import love from "../../assets/Vector (13).png"
import love2 from "../../assets/Vector (14).png"
// import { images } from '../../Data';
import axios from 'axios';
function SearchSession() {
  // const data = images;
  const [data, setdata] = useState([])
  const [text, settext] = useState('');
  const [toggle, settoggle] = useState(love);
  const [toggle2, settoggle2] = useState(love);
  const [toggle3, settoggle3] = useState(love);
  const [toggle4, settoggle4] = useState(love);
  const [toggle5, settoggle5] = useState(love);
  const [toggle6, settoggle6] = useState(love);
  const [toggle7, settoggle7] = useState(love);
  const [toggle8, settoggle8] = useState(love);
  const [btntoggle, setbtntoggle] = useState(false);
  const [btntoggle2, setbtntoggle2] = useState(false);
  const [btntoggle3, setbtntoggle3] = useState(false);
  const [btntoggle4, setbtntoggle4] = useState(false);
  const [btntoggle5, setbtntoggle5] = useState(false);
  const [btntoggle6, setbtntoggle6] = useState(false);
  const [btntoggle7, setbtntoggle7] = useState(false);
  const [btntoggle8, setbtntoggle8] = useState(false);
  const fetch = async (api) => {
    const makecall = await axios.get(api);
    console.log(makecall.data);
    setdata(makecall.data)
  }
  useEffect(() => {
    fetch('http://localhost:3000/users');

  })


  return (
    <div>
      <div>
        <img src={Zevi} alt="" className='zevi2' />
        <input type="text" name="" id="" className='inputSearch' value={text} onChange={(e) => settext(e.target.value)} />
        <img src={Search} alt="" className='searchImg2' />
      </div>

      <div className='leftSession'>
        <h1 className='searchhead'>Search Results</h1>
        <h3 className='brand1'>BRAND</h3>
        <img src={arror1} className='arrow' alt="" />

        <input type="checkbox" className='check1' name="" id="" value="mango" />
        <span className='span1'>Mango</span>
        <input type="checkbox" name="" className='check2' id="" value="h&m" />
        <span className='span2'>H&M</span>
        <div className='line1'></div>
        <h3 className='pricehead'>PRICE RANGE</h3>
        <img src={arror2} className='arrow2' alt="" />
        <input type="checkbox" className='check3' name="" id="" />
        <span className='span3'>Under 500</span>
        <input type="checkbox" name="" className='check4' id="" />
        <span className='span4'>1000 To 3000</span>
        <div className='line2'></div>
        <h2 className='rate'>RATINGS</h2>
        <input type="checkbox" className='checkrate1' name="" id="" />
        <div className='star'>
          <img src={star1} alt="" className='star1' />
          <img src={star1} alt="" className='star2' />
          <img src={star1} alt="" className='star3' />
          <img src={star1} alt="" className='star4' />
          <img src={star1} alt="" className='star5' />
        </div>
        <input type="checkbox" className='checkrate2' name="" id="" />
        <div className='star'>
          <img src={star1} alt="" className='star6' />
          <img src={star1} alt="" className='star7' />
          <img src={star1} alt="" className='star8' />
          <img src={star1} alt="" className='star9' />
          <img src={star2} alt="" className='star10' />
        </div>
        <input type="checkbox" className='checkrate3' name="" id="" />
        <div className='star'>
          <img src={star1} alt="" className='star11' />
          <img src={star1} alt="" className='star11' />
          <img src={star1} alt="" className='star13' />
          <img src={star2} alt="" className='star14' />
          <img src={star2} alt="" className='star15' />
        </div>
        <input type="checkbox" className='checkrate4' name="" id="" />
        <div className='star'>
          <img src={star1} alt="" className='star16' />
          <img src={star1} alt="" className='star17' />
          <img src={star2} alt="" className='star18' />
          <img src={star2} alt="" className='star19' />
          <img src={star2} alt="" className='star20' />
        </div>
        <input type="checkbox" className='checkrate5' name="" id="" />
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
                {/* <div onMouseOver={() => setbtntoggle(true)} onMouseLeave={() => setbtntoggle(false)}>
                  <div className='imgs'>
                  <img src={item.imgs} className='' alt="" />
                  </div>
                  <img onClick={() => settoggle()} src={toggle ? toggle : love2} alt="" className="love1 love" />
                  {
                    btntoggle && (<button className='btn'>View Product</button>)
                  }
                  <h5 className='boxContent'>{item.title}</h5>
                  <span className='rs'> {item.rs}</span>
                  <span className='rs1'>{item.rs1}</span>
                  <span className='num'>{item.num}</span>
                 
                </div> */}
                <div className="card imgs" style={{width: "18rem"}}>
                  <img src={item.imgs} className="card-img-top img" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title boxContent">{item.title}</h5>
                      <p className="card-text ">{item.rs}</p>
                      <p className="card-text ">{item.rs1}</p>
                      <p className="card-text ">{item.num}</p>
                     
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
