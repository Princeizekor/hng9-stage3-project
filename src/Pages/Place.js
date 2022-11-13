import React from 'react'
import placeData from '../placeData'

function Place() {
  return (
    <div className="place">
        <div className="place-content">
            <p>Resturant</p>
            <p>Cottage</p>
            <p>Castle</p>
            <p>fantast city</p>
            <p>beach</p>
            <p>Carbins</p>
            <p>Off-grid</p>
            <p>Farm</p>
        </div>
    <div className="nft-wrap">
      {
          placeData?.map((item, i) => 
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

export default Place
