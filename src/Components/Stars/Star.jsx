import React from 'react'
import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
// import styled from "styled-components";
import "../Stars/Style.css";
function Star({ star }) {
    const rating = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        return (
            <span key={index}>
                {
                    star >= index + 1 ? <FaStar style={{color : ' #FDD33D'}} /> : star >= number ? <FaStarHalfAlt /> : <AiOutlineStar />
                }
            </span>
        )
    })
    return (
        <div>

            {rating}
          

        </div>
    )
}

export default Star
