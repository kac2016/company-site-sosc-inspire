import React from 'react'
import Link from 'gatsby-link'

const Footer = ({ siteTitle }) => (
  <footer>
    <div className="container">
      <div className="info-area">
        <div className="column">
          <a href="https://github.com/kac2016">GitHub</a>
          <a href="https://www.facebook.com/kuppusamy.co/">Facebook</a>
          <a href="https://in.linkedin.com/company/kuppusamy-&-co">LinkedIn</a>
        </div>
        
        <div className="column">
          <p>
            <strong>Kuppusamy & Co</strong><br/>
            No:67, F- Block, IHFD Nagar, 
            Pallavaram,Chennai - 43 IN<br/><br/>
            office@kuppusamy.co<br/>
            +91 9952749408
          </p>
        </div>
      </div>
    </div>
    <div className="copyright-area">
      <p>Kuppusamy & Co © { new Date().getFullYear() }</p>
    </div>
  </footer>
)

export default Footer
