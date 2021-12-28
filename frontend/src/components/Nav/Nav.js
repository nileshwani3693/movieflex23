import React, {useState, useEffect} from 'react'
import "./Nav.scss";
// import NetFlixLogo from "../../images/NetFlixLogo.png"
// import NetFlixAvatar from "../../images/NetFlixAvatar.png"
// import MoviesFlix from "../../images/MoviesFlix.jpg"
// import MoviesFlix from "../../images/MoviesFlix.png"
import {Link} from "react-router-dom"


const Nav = () => {
    const [show,setShow] = useState(false);

    const NavBarVisibility = () => {
        if(window.scrollY > 100){
            setShow(true)
        } else{
            setShow(false)
        }
    }

    useEffect(() =>{
        window.addEventListener("scroll",NavBarVisibility);

        return () => {
            window.removeEventListener("scroll",NavBarVisibility)
        }

    },[])
    return (
        <div className={`nav ${show && "nab-black"}`}>
              {/* <Link to="/">
                  <img src={MoviesFlix} className="nav-logo" alt="logo" />
              </Link> */}
            <div className="showcase-top">
               
                <Link to="/views" classname="btn btn-rounded">
                    Views
                </Link>

            </div>
              

              {/* <img src={NetFlixAvatar} className="nav-avatar" alt="logo"/> */}
              {/* {/* <div>
              <Link to="/views" classname="btn btn-rounded">
                    Views
              </Link> 
              </div>*/}
            
        </div>
        
    )
}

export default Nav
