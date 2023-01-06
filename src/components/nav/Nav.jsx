import React from 'react'
import { useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri';
import './nav.css'

function Nav() {
  const [active,setActive]=useState('#');
  return (
  <nav>
    <a href="#" onClick={()=>setActive('#')} className={active==='#'?'active':''}><AiOutlineHome/></a>
    <a href="#about" onClick={()=>setActive('#about')} className={active==='#about'?'active':''}><AiOutlineUser/></a>
    <a href="#experience" onClick={()=>setActive('#experience')} className={active==='#experience'?'active':''}><BiBook/></a>
    <a href="#services" onClick={()=>setActive('#services')} className={active==='#services'?'active':''}><RiServiceLine/></a>
    
   
  </nav>
  )
}s

export default Nav