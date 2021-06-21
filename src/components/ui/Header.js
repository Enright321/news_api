import React from 'react';
// import '../../App.css'
// import FontAwesome from 'react-fontawesome'
// import faStyles from 'font-awesome/css/font-awesome.css'

const Header = ({ twitter, facebook, instagram, youtube }) => {


  return (
    <nav id="main-nav">
      <div className="container">
        
        <h1 className="logo">Daily News</h1>
        <div className="social">
          <a href="http://facebook.com" target="#"><i className={facebook}></i></a>
          <a href="http://twitter.com" target="#"><i className={twitter}></i></a>
          <a href="http://instagram.com" target="#"><i className={instagram}></i></a>
          <a href="http://youtube.com" target="#"><i className={youtube}></i></a>
        </div>
        <ul>
          <li><a className="current" href="/#">Home</a></li>
          <li><a href="/#">Sports</a></li>
          <li><a href="/#">Technology</a></li>
          <li><a href="/#">Food</a></li>
          <li><a href="/#">World</a></li>
        </ul>
      </div>
    </nav>
  )
}

Header.defaultProps = {
  twitter: 'fab fa-twitter fa-2x',
  facebook: 'fab fa-facebook fa-2x',
  instagram: 'fab fa-instagram fa-2x',
  youtube: 'fab fa-youtube fa-2x'
}

export default Header;