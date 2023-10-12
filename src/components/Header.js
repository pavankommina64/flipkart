import React from 'react'
import logo from './images/logo.png'
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className='row'>
        <div className='col-md-2 head'>
        <img src={logo} alt='no' id="logo"/> 
        </div>
        <div className='col-md-6 menu'>
          <ul>
           <Link to='/Mobiles'> <li><b>MOBILE</b></li></Link>
            <Link to='/LAPTOPS'><li><b>LAPTOPS</b></li></Link>
            <Link to='/MEDICIN'><li><b>MEDICIN</b></li></Link>
            <Link to='/PERFUMES'><li><b>PERFUMES</b></li></Link>
            <Link to='/HOME'><li><b>HOME</b></li></Link>
            <Link to='/OFFERS'><li style={{color:'red'}}><b>OFFERS</b></li></Link>
            <Link to='/VMART'><li style={{color:'red'}}><b>VMART</b></li></Link>
          </ul>
        </div>
        <div className='col-md-4 icon'>
         <i className='fa fa-pencil' style={{fontSize:'150%' ,marginTop:'10px',marginLeft:'110px'}}></i>
          <i className='fa fa-search' style={{fontSize:'150%' ,margin:'10px 0px 0px 85px'}}></i>
          <i className='fa fa-shopping-cart' style={{fontSize:'150%' ,margin:'10px 0px 0px 65px'}}></i>
          <i className='fa fa-user' style={{fontSize:'150%' ,margin:'10px 0px 0px 70px'}}></i>
          <ul>
          <Link to='/SCRAPBOOK'><li>SCRAPBOOK</li></Link>
          <Link to='/SEARCH'><li>SEARCH</li></Link>
          <Link to='/CART'><li>CART</li></Link>
          <Link to='/PROFILE'><li>PROFILE</li></Link>
          </ul>

          
        </div>
        </div>
  )
}
export default Header;