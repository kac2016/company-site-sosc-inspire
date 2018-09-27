import React from 'react'
import Link from 'gatsby-link'
import soscLogo from '../images/logo_grad.svg';
import heroImage from '../images/hero_main.svg';
import clubImage from '../images/hero_clubs.svg';
import gceImage from '../images/hero_github.svg';
import connectImage from '../images/hero_connect_.png';


const IndexPage = () => (
  <div className="page white-bg">
    <div className="container">
      <section className="hero-section">
        <div className="hero-texts">
          <img src={soscLogo} className="sosc-logo" alt="sosc logo"/>
          <p className="sosc-header">
            Websites design<br/>Development and Maintenance
          </p>
          <p>
            We Create and Manage Modern Websites for small, Medium and Large 
            Enterprises with Future Tech of Web.
          
          </p>
          <a href="https://goo.gl/forms/XH41TwlMxOeRwmdQ2" className="btn-hero-green">Become a member</a>
        </div>
        <div>
          <img src={heroImage} className="hero-image" alt="hero image"/>
        </div>
      </section>
    </div>
    <div className="container">
      <section className="hero-section2 ">
        <div>
          <img src={clubImage} className="hero-image" alt="hero image"/>
        </div>
        <div className="hero-texts">
          <p className="hero-header">Landscape Horticulture Services</p>
          <div className="dash"/>
          <p>
          We believe that good landscape design and experienced construction management can do
           much to maximize the potential of a space while creating beautiful, elegant gardens and
            green spaces.We have the experience and ability to design and construct award winning landscapes 
            from natural stone work and paving, planting, 
            woodwork and fine carpentry, grading, retaining walls and other structures to landscape irrigation 
            and lighting.
          </p>
        </div>
      </section>
    </div>

    <div className="container">
      <section className="hero-section3">
        <div className="hero-texts">
          <p className="hero-header"> Human Resource Consulting</p>
          <div className="dash"/>
          <p>
          We suite of solutions includes recruitment, assessment, training, development and career management, to outsourcing and workforce consulting. These solutions are offered through the following:
We focuses on administrative, call centre, light industrial, skilled trades talent, IT, engineering and finance talent and solutions. 
          </p>
        </div>
        <div>
          <img src={gceImage} className="hero-image" alt="hero image"/>
        </div>
      </section>
    </div>

    <div className="container">
      <section className="hero-section4">
      <div>
          <img src={connectImage} className="hero-image" alt="hero image"/>
        </div>
        <div className="hero-texts">
          <p className="hero-header">Engineering Works</p>
          <div className="dash"/>
          <p>
            Meet people with similar interest to work together on projects
            and host events to build a better collaborative environment. We are
            more than 100 members with interests on various fields of technology
            here to know each other and get connected. Meet our members to know
            more about us and build something cool!
          </p>
          <Link to="/team" className="btn-hero-green">Learn More</Link>
        </div>
      </section>
    </div>
  </div>
)

export default IndexPage
