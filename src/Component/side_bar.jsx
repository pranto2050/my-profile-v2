

// import React from 'react'
function left_part() {
  return (
    <div className="fixed">
    <div className="left_part flex flex-col py-[10%] h-[100vh] bg-[rgb(33,36,40)] text-[#C4CFDE] items-center"> 
        <div className="logo_part">
            <div className="logo h-[200px] w-[200px] ">
              <img src="https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg" alt="This is Image" className="rounded-full"/>
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
    </div>
  )
}

export default left_part;
