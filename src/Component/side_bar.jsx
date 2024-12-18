
// import React from 'react'
function left_part() {
  return (
    <div className="fixed w-[20%] md:border-r-8 border-[black]">
    <div className="left_part flex flex-col  py-[10%] h-[100vh] bg-[rgb(33,36,40)] text-[#C4CFDE] items-center  gap-[50px] w-[100%]"> 
            <div className="logo h-[150px] w-[150px] ">
              <img src="https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg" alt="This is Image" className="rounded-full border-4 border-[#32363B]"/>
            </div>
        <div className="nave_bar_part flex flex-col justify-center items-center">
        <ul className="left_part flex flex-col justify-between items-center gap-[20px]">
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Resume</li>
            <li>My Lerning</li>
            <li>My Blog</li>
            <li>Contact</li>
        </ul>
        </div>
        <div className="social_part bg-[#1B1D20] h-[50px] w-[80%]">
          <div className="cart_logo"></div>
          <div className="count_value"> <h1> 0 </h1></div>
        </div>
    </div>
    </div>
  )
}

export default left_part;
