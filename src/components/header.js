import React from 'react'
import Link from 'gatsby-link'


const Header = ({ siteTitle }) => (
  <div className="nav-bar">
    <div className="container">
    <div className="nav-items">
      
      <ul>
        <li><Link to="/" exact={true} activeClassName="active">Home</Link></li>
       
       
       
      </ul>
    </div>
    </div>
  </div>
)

export default Header
