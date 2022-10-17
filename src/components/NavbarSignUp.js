import React from 'react';
// , { useEffect, useState }
import "../styles/NavbarSignUp.css";
import Avatar from "./Avatar";


import {selectUser} from "../features/userSlice";

import {useSelector} from "react-redux"

// import  { auth } from "../service/firebase";




function NavbarSignUp() {
  // function handleClick(){
  //     auth.signOut()
      
  // }
  // const [show, handleShow]= useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 100){
  //       handleShow(true);

  //     }else handleShow(false);
  //   });
  //   return () => {
  //     window.removeEventListener("scroll");
  //   };
  // }, []);

  const user =useSelector(selectUser)

  
  // {`NavbarSignUp ${show && "nav"}`}

  return (
    
    <div className="NavbarSignUp">
      <div className='Logo'>
    
          <img alt="" src='../logo.png'></img>
       
        
      </div>

      <a href='./'><h6>Acceuil</h6></a>
      <a href='./messages'><h6>Messages</h6></a>
      <a href='./Offer'><h6 className="switch">Lancer une offre</h6></a>

     
      {/* <Avatar onClick={()=>{auth.signOut()}} src={user.photo}/> */}
      <Avatar src="../imgProfil.png" className="Avatar" />
      {/* "../imgProfil.png" */}
      {/* onClick={handleClick()}  */}
      
      {/* "../imgProfil.png" */}
      {/* <button   type="button" class="btn NavBtn btn-outline-warning">Sign Out</button> */}
      {/* onClick={()=>{auth.signOut()}} */}
      {/* name={user.displayName} src={user.photo} */}
      {/* <SettingsIcon/> */}
      {/* <h6>Orders</h6> */}
      {/*  */}






    </div>
  )
}

export default NavbarSignUp;