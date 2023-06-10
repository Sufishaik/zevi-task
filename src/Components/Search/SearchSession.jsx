import React, { useEffect, useState } from 'react'
import h from "../Search/Search.module.css"
import Search from "../../assets/search.png"
import Zevi from "../../assets/ZEVI-GG-LogoDesogn -Option-2-Black 2 (2) 1.png"
// import arror from "../../assets/angle-right 1.png";
import arror1 from "../../assets/Vector (12).png";
import arror2 from "../../assets/Vector (12).png";
import star1 from "../../assets/Star 1.png";
import star2 from "../../assets/Star 5.png";
import love from "../../assets/Vector (13).png"
import love2 from "../../assets/Vector (14).png"
import { images } from '../../Data';
import axios from 'axios';
function SearchSession() {
  // const data = images;
  const [data,setdata] = useState(images)
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
  useEffect(() =>{
    fetch('http://localhost:3000/users');
    
  })


  return (
    <div>
      <div>
        <img src={Zevi} alt="" className={h.zevi2} />
        <input type="text" name="" id="" className={h.inputSearch} value={text} onChange={(e) => settext(e.target.value)} />
        <img src={Search} alt="" className={h.searchImg2} />
      </div>

      <div className={h.leftSession}>
        <h1 className={h.searchhead}>Search Results</h1>
        <h3 className={h.brand1}>BRAND</h3>
        <img src={arror1} className={h.arrow} alt="" />

        <input type="checkbox" className={h.check1} name="" id="" value="mango" />
        <span className={h.span1}>Mango</span>
        <input type="checkbox" name="" className={h.check2} id="" value="h&m" />
        <span className={h.span2}>H&M</span>
        <div className={h.line1}></div>
        <h3 className={h.pricehead}>PRICE RANGE</h3>
        <img src={arror2} className={h.arrow2} alt="" />
        <input type="checkbox" className={h.check3} name="" id="" />
        <span className={h.span3}>Under 500</span>
        <input type="checkbox" name="" className={h.check4} id="" />
        <span className={h.span4}>1000 To 3000</span>
        <div className={h.line2}></div>
        <h2 className={h.rate}>RATINGS</h2>
        <input type="checkbox" className={h.checkrate1} name="" id="" />
        <div className={h.star}>
          <img src={star1} alt="" className={h.star1} />
          <img src={star1} alt="" className={h.star2} />
          <img src={star1} alt="" className={h.star3} />
          <img src={star1} alt="" className={h.star4} />
          <img src={star1} alt="" className={h.star5} />
        </div>
        <input type="checkbox" className={h.checkrate2} name="" id="" />
        <div className={h.star}>
          <img src={star1} alt="" className={h.star6} />
          <img src={star1} alt="" className={h.star7} />
          <img src={star1} alt="" className={h.star8} />
          <img src={star1} alt="" className={h.star9} />
          <img src={star2} alt="" className={h.star10} />
        </div>
        <input type="checkbox" className={h.checkrate3} name="" id="" />
        <div className={h.star}>
          <img src={star1} alt="" className={h.star11} />
          <img src={star1} alt="" className={h.star12} />
          <img src={star1} alt="" className={h.star13} />
          <img src={star2} alt="" className={h.star14} />
          <img src={star2} alt="" className={h.star15} />
        </div>
        <input type="checkbox" className={h.checkrate4} name="" id="" />
        <div className={h.star}>
          <img src={star1} alt="" className={h.star16} />
          <img src={star1} alt="" className={h.star17} />
          <img src={star2} alt="" className={h.star18} />
          <img src={star2} alt="" className={h.star19} />
          <img src={star2} alt="" className={h.star20} />
        </div>
        <input type="checkbox" className={h.checkrate5} name="" id="" />
        <div className={h.star}>
          <img src={star1} alt="" className={h.star21} />
          <img src={star2} alt="" className={h.star22} />
          <img src={star2} alt="" className={h.star23} />
          <img src={star2} alt="" className={h.star24} />
          <img src={star2} alt="" className={h.star25} />
        </div>
      </div>

      <div className={h.rightSession}>
        {
          data.map((item) => {
            return (
              <>
                <div onMouseOver={() => setbtntoggle(true)} onMouseLeave={() => setbtntoggle(false)}>
                  <img src={item.imgs6} className={h.imgs6} alt="" />
                  <img onClick={() => settoggle()} src={toggle ? toggle : love2} alt="" className={`${h.love1} love`} />
                  {
                    btntoggle && (<button className={h.btn1}>View Product</button>)
                  }
                  <h5 className={h.boxContent6}>{item.content6}</h5>
                  <span className={h.rs1}> Rs.599</span>
                  <span className={h.rs11}>{item.rs1}</span>
                  <span className={h.num}>(210)</span>
                  <img src={item.stars1} className={h.stars1} alt="" />
                  <img src={item.stars1} alt="" className={h.stars2} />
                  <img src={item.stars1} alt="" className={h.stars3} />
                  <img src={item.stars1} alt="" className={h.stars4} />
                  <img src={item.stars1} alt="" className={h.stars5} />
                </div>

                <div onMouseOver={() => setbtntoggle2(true)} onMouseLeave={() => setbtntoggle2(false)}>
                  <img src={item.imgs7} alt="" className={h.imgs7} />
                  <img onClick={() => settoggle2()} src={toggle2 ? toggle2 : love2} alt="" className={h.love2} />
                  {
                    btntoggle2 && (<button className={h.btn2}>View Product</button>)
                  }
                  <h5 className={h.boxContent7}>{item.content7}</h5>
                  <span className={h.rs2}> Rs.999</span>
                  <span className={h.rs22}>{item.rs2}</span>
                  <span className={h.num2}>(210)</span>
                  <img src={item.stars1} className={h.stars6} alt="" />
                  <img src={item.stars1} alt="" className={h.stars7} />
                  <img src={item.stars1} alt="" className={h.stars8} />
                  <img src={item.stars1} alt="" className={h.stars9} />
                  <img src={item.stars1} alt="" className={h.stars10} />
                </div>

                <div onMouseOver={() => setbtntoggle3(true)} onMouseLeave={() => setbtntoggle3(false)}>
                  <img src={item.imgs8} alt="" className={h.imgs8} />
                  <img onClick={() => settoggle3()} src={toggle3 ? toggle3 : love2} alt="" className={h.love3} />
                  {
                    btntoggle3 && (<button className={h.btn3}>View Product</button>)
                  }
                  <h5 className={h.boxContent8}>{item.content8}</h5>
                  <span className={h.rs3}> Rs.899</span>
                  <span className={h.rs33}>{item.rs2}</span>
                  <span className={h.num3}>(210)</span>
                  <img src={item.stars1} className={h.stars11} alt="" />
                  <img src={item.stars1} alt="" className={h.stars12} />
                  <img src={item.stars1} alt="" className={h.stars13} />
                  <img src={item.stars1} alt="" className={h.stars14} />
                  <img src={item.stars1} alt="" className={h.stars15} />
                </div>

                <div onMouseOver={() => setbtntoggle4(true)} onMouseLeave={() => setbtntoggle4(false)}>
                  <img src={item.imgs9} alt="" className={h.imgs9} />
                  <img onClick={() => settoggle4()} src={toggle4 ? toggle4 : love2} alt="" className={h.love4} />
                  {
                    btntoggle4 && (<button className={h.btn4}>View Product</button>)
                  }
                  <h5 className={h.boxContent9}>{item.content9}</h5>
                  <span className={h.rs4}> Rs.899</span>
                  <span className={h.rs44}>{item.rs2}</span>
                  <span className={h.num4}>(210)</span>
                  <img src={item.stars1} className={h.stars16} alt="" />
                  <img src={item.stars1} alt="" className={h.stars17} />
                  <img src={item.stars1} alt="" className={h.stars18} />
                  <img src={item.stars1} alt="" className={h.stars19} />
                  <img src={item.stars1} alt="" className={h.stars20} />
                </div>

                <div onMouseOver={() => setbtntoggle5(true)} onMouseLeave={() => setbtntoggle5(false)}>
                  <img src={item.imgs10} alt="" className={h.imgs10} />
                  <img onClick={() => settoggle5()} src={toggle5 ? toggle5 : love2} alt="" className={h.love5} />
                  {
                    btntoggle5 && (<button className={h.btn5}>View Product</button>)
                  }
                  {/* <h5 className={h.boxContent10}>{item.content10}</h5> */}
                </div>

                <div onMouseOver={() => setbtntoggle6(true)} onMouseLeave={() => setbtntoggle6(false)}>
                  <img src={item.imgs11} alt="" className={h.imgs11} />
                  <img onClick={() => settoggle6()} src={toggle6 ? toggle6 : love2} alt="" className={h.love6} />
                  {
                    btntoggle6 && (<button className={h.btn6}>View Product</button>)
                  }
                  {/* <h5 className={h.boxContent11}>{item.content11}</h5> */}
                </div>

                <div onMouseOver={() => setbtntoggle7(true)} onMouseLeave={() => setbtntoggle7(false)}>
                  <img src={item.imgs12} alt="" className={h.imgs12} />
                  <img onClick={() => settoggle7()} src={toggle7 ? toggle7 : love2} alt="" className={h.love7} />
                  {
                    btntoggle7 && (<button className={h.btn7}>View Product</button>)
                  }
                  {/* <h5 className={h.boxContent12}>{item.content12}</h5> */}
                </div>

                <div onMouseOver={() => setbtntoggle8(true)} onMouseLeave={() => setbtntoggle8(false)}>
                  <img src={item.imgs13} alt="" className={h.imgs13} />
                  <img onClick={() => settoggle8()} src={toggle8 ? toggle8 : love2} alt="" className={h.love8} />
                  {
                    btntoggle8 && (<button className={h.btn8}>View Product</button>)
                  }
                  {/* <h5 className={h.boxContent13}>{item.content13}</h5> */}
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
