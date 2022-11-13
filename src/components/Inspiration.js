import React from 'react'
import linkData from '../data'
function Inspiration() {
  return (
    <div className="inspiration">
      <h2 className="insp-text">Inspiration for your next adventure</h2>
      <div className="nft-wrap">
      {
          linkData?.map((item, i) => 
              <div className="nfts" key={i}>
                  <img src={item?.img} alt="this are the NFT images" className="nft-img"/>
                  <div className="title-wrap">
                  <p className="title">{item?.title}</p>
                  <p className="sub-title">{item?.subTitle}</p>
                  </div>
                  <div className="km-wrap">
                  <p className="km">{item?.km}</p>
                  <p className="days">{item?.days}</p>
                  </div>
                  <img src={item?.star} alt="star image" className="star" />
              </div>
          )
      }
      </div>
    </div>
  )
}

export default Inspiration
