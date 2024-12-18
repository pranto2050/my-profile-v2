





// import React from 'react'
function main_body() {
  return (
    <div className="left_part flex flex-col justify-around h-[100vh] bg-[rgb(33,36,40)] text-[#C4CFDE]"> 
        <div className="logo_part">
            <h1> Pranto </h1>
            <div className="logo h-[100px] w-[100px]">
              <img src="https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg" alt="This is Image" />
            </div>
            </div>
        <div className="nave_bar_part">
        <ul className="left_part flex flex-col justify-between ">
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Resume</li>
            <li>My Lerning</li>
            <li>My Blog</li>
            <li>Contact</li>
        </ul>
        </div>
    </div>
  )
}

export default main_body;
