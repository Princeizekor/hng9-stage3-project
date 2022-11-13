import React from 'react'

function Home() {
  return (
    <div className="home">
      <div className="wrapper">
      <div className="disp1">
      <h1 className="home-text">Rent a <span className="text-color">Place</span> away from <span className="text-color">Home</span> in the <span className="text-color">Metaverse</span></h1>
      <p className="home-text2">we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
      <form className="form-field">
          <input type="text" placeholder="Search for locations" className="text"/>
          <button type="submit" className="search-btn">Search</button>
      </form>
      </div>
      <div className="disp2">
          <div className="image3"></div>
          <div className="image4"></div>
          <div className="image5"></div>
          <div className="image6"></div>
      </div>
      </div>
    </div>
  )
}

export default Home
