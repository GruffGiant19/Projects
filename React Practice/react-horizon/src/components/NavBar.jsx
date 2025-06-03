import React from 'react'

const NavBar = () => {
  return (
    <div>
        <header>
        <nav className="flex justify-between p-4 ">
            <img  className="h-10" src="src/assets/images/horizons logo.png" alt="logo" ></img>
            <div className="flex">
                <img className="h-5 w-5" src="src/assets/images/ghana.png" alt="image of ghana" ></img>
                <img className="h-5 w-5" src="src/assets/images/nigeria.png" alt="image of nigeria"></img>
                <img className="h-5 w-5" src="src/assets/images/kenya.png" alt="image of kenya"></img> 
            </div>

            <a href="#">ABOUT US </a>
        </nav>
        
        </header>
    </div>
  )
}

export default NavBar