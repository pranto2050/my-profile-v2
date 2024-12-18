

import SideBar from "./Component/side_bar";
import MainBody from "./Component/main_body"; // Renamed to start with uppercase

export default function LeftPart() {
    return (
        <div className="flex flex-col"> 
            <div className="first_part ">
                <SideBar />
            </div>
            <div className="second_part ">
                <MainBody />
            </div>
        </div>
    );
}




// // Header.jsx
// // import React from "react";
// const Header = () => {
//   return (
//     <header className="header">
//       <div className="logo">Logo</div>
//       <nav>
//         <ul className="nav-links">
//           <li><a href="#home">Home</a></li>
//           <li><a href="#about">About</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
