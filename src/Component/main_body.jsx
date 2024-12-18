// import React from 'react';

function MainBody() {
  return (
    <div className="left_part h-[100vh] bg-[rgb(33,36,40)] text-[#C4CFDE] flex items-center justify-center md:ml-[20%]"> 
      <div className="logo_part flex items-center justify-center">
        <div className="h-[320px] w-[320px] rounded-full bg-gradient-to-r from-red-500 via-green-500 to-blue-500 animate-spin-slow p-1">
          <div className="h-full w-full bg-[rgb(33,36,40)] rounded-full flex items-center justify-center">
            <img src="https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg" alt="Profile" className="h-[300px] w-[300px] rounded-full object-cover transform hover:scale-105 transition duration-500 ease-in-out"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBody;
