



// import React from 'react'
import Body from './body'
function left_part() {
  return (
    <div className="left_part flex flex-col justify-around h-[100vh] bg-[#212428] text-[#C4CFDE]"> 
        <div className="logo_part">
            <h1> Pranto </h1>
            <div className="logo">
                <img src="../Component/img/Pranto.png" alt="This is Image" />
            </div>
            </div>
        <div className="nave_bar_part">
        <ul className="left_part flex flex-col justify-between ">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
        </div>
        <Body />
        

      
    </div>
  )
}

export default left_part;
