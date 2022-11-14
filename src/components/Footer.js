import React from 'react'

function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrap">
          <div className="comp1">
              <img src="./img/Group.svg" alt="footer logo" className="footer-logo"/>
              <img src="./img/facebook-263-721950.svg" alt="facebook logo" className="facebook"/>
              <img src="./img/instagram-216-721958.svg" alt="instagram logo" className="instagram"/>
              <img src="./img/twitter-241-721979.svg" alt="twitter logo" className="twitter"/>
              <p className="copy">&copy; 2022 Metabnb</p>
          </div>
          <div className="comp2">
              <p className="footer-text">Community</p>
              <p className="footer-text">NFT</p>
              <p className="footer-text">Tokens</p>
              <p className="footer-text">Landlords</p>
              <p className="footer-text">Discord</p>
          </div>
          <div className="comp3">
          <p className="footer-text">Places</p>
          <p className="footer-text">Castle</p>
          <p className="footer-text">Farm</p>
          <p className="footer-text">Beach</p>
          <p className="footer-text">Learn more</p>
          </div>
          <div className="comp4">
          <p className="footer-text">About us</p>
          <p className="footer-text">Road map</p>
          <p className="footer-text">Creators</p>
          <p className="footer-text">Career</p>
          <p className="footer-text">Contact us</p>
          <p className="and">&copy; 2022 Metabnb</p>
          </div>
      </div>
    </div>
  )
}

export default Footer
