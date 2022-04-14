import React from 'react';
import Modal from 'react-modal'
import {useState} from "react";



function Sidebar(props) {





    return (
        <>
           <aside className="sidebar">

               <div className="logo">
                   <a href="#">Brand <b>Colors</b></a>
               </div>
               <div className="description">
                   The biggest collection of official brand color codes around. Cureted by @Kaan and friends.
               </div>
               <nav className="menu">
                   <ul>
                       <li>
                           <a href="#">
                               About Brand Colors
                           </a>
                       </li>
                   </ul>
               </nav>

           </aside>
        </>
    );
}

export default Sidebar;