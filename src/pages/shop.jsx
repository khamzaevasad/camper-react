import React from 'react'
import { ShopCon } from '../style/shopStyle'
import miniline from '../assets/mini-line.svg';
import bigbottom from '../assets/big-bottom.svg';
import bottom from '../assets/bottom.svg';
import ic_round from '../assets/ic_round-view-list.svg';
import carOne from '../assets/carone.svg';
import carTwo from '../assets/cartwo.svg';
import carThree from '../assets/carthree.svg';
import carmany from '../assets/carmany.svg';
import clarity from '../assets/clarity.svg';
import uch from '../assets/3cho.svg';
import besh from '../assets/5chi.svg';
import tort from '../assets/4chi.svg';
import star from '../assets/star.svg';


const Shop = () => {
  return (
<ShopCon className="shop-container">
      <div className="filter-con">
        <div className="location-box">
          <p className="filter-paragraph">Cost of car</p>
          <img src={miniline} alt="line" style={{marginBottom: '8px'}} />
          <div className="from-to-wrapper">
            <div className="from-to-left">
              <p>from</p>
              <input type="text" className="fromto-input" />
            </div>
            <div className="from-to-right">
              <p>to</p>
              <input type="text" className="fromto-input" />
            </div>
          </div>
        </div>
        
        <div className="brand-box">
          <div className="select-mini">
            <p className="filter-paragraph">Brand</p>
            <img src={bigbottom} alt="bottom" />
          </div>
          <img src={miniline} alt="line" />
          <div className="select-opt">
            <div className="check-con">
              <p>Aidal</p>
            </div>
            <div className="check-con">
              <p>Knal</p>
            </div>
            <div className="check-con">
              <p>escape</p>
            </div>
          </div>
        </div>
        
        <div className="brand-box">
          <div className="select-mini">
            <p className="filter-paragraph">Company</p>
            <img src={bigbottom} alt="bottom" />
          </div>
          <img src={miniline} alt="line" />
          <div className="select-opt">
            <div className="check-con">
              <p>escape</p>
            </div>
            <div className="check-con">
              <p>Aidal</p>
            </div>
          </div>
        </div>
        
        <div className="brand-box">
          <div className="select-mini">
            <p className="filter-paragraph">License type</p>
            <img src={bigbottom} alt="bottom" />
          </div>
          <img src={miniline} alt="line" />
          <div className="select-opt">
            <div className="check-con">
              <p>1year</p>
            </div>
            <div className="check-con">
              <p>2year</p>
            </div>
            <div className="check-con">
              <p>1.5year</p>
            </div>
          </div>
        </div>
        
        <div className="brand-box">
          <div className="select-mini">
            <p className="filter-paragraph">Number of travelers</p>
            <img src={bigbottom} alt="bottom" />
          </div>
          <img src={miniline} alt="line" />
          <div className="select-opt">
            <div className="check-con">
              <p>2</p>
            </div>
            <div className="check-con">
              <p>3.4</p>
            </div>
            <div className="check-con">
              <p>5+</p>
            </div>
          </div>
        </div>
        
        <div className="brand-box"> 
          <div className="select-mini">
            <p className="filter-paragraph">Location</p>
            <img src={bigbottom} alt="bottom" />
          </div>
          <img src={miniline} alt="line" />
          <div className="select-opt">
            <div className="check-con">
              <p>Seoul</p>
            </div>
            <div className="check-con">
              <p>Incheon</p>
            </div>
            <div className="check-con">
              <p>Pusan</p>
            </div>
            <div className="button-box">
              <button className="button-style-cansel">Cansel</button>
              <button className="button-style-search">Search</button>
            </div>
          </div>
        </div>
        
        <div className="compcare">
          <p>Compare</p>
          <div className="compcare-cars">
            <div className="car1">
              <img src={carOne} alt="car" />
            </div>
            <div className="car2">
              <img src={carTwo} alt="car" width="100" />
            </div>
            <div className="car3">
              <img src={carThree} alt="car" width="100" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="car-con">
        <div className="price-con">
          <div className="sort-box">
            <div className="item-number">
              <p className="filter-paragraph">Item <span>25.156</span></p> 
            </div>
            <div className="sort-select">
              <p className="sort-par">sort by</p>
              <input type="text" placeholder="Select" className="sort-input" />
              <button className="input-button">
                <img src={bottom} alt="bottom" />
              </button>
              <input type="text" placeholder="60" className="number-input" />
              <button className="input-button">
                <img src={bottom} alt="bottom" />
              </button>
              <div className="clarity">
                <img src={clarity} alt="clarity" />
              </div>
              <div className="men">
                <img src={ic_round} alt="men" />
              </div>
            </div>
          </div>
          <hr />
        </div>
        
        <div className="car-categoria">
          {}
          {[
            uch,
            besh,
            uch,
            tort,
            uch,
            besh,
            tort,
            besh,
            carmany,
            carmany,
            carmany,
            carmany,
            carmany,
            carmany,
            carmany,
           carmany
          ].map((carImage, index) => (
            <div key={index} className="car-info">
              <img src={carImage} alt="car" />
              <h2 className="heading-info">Name of the car</h2>
              <div className="brand-name">
                <div className="stars-box">
                  <p className="paragraph-info">Brand name{index === 0 ? 's' : ''}</p>
                  <div className="rating-wrapper">
                    <img src={star} alt="star" />
                    <p className="paragraph-info">5.3</p>
                  </div>
                </div>
                <h2 className="heading-price">250$</h2>
                <div className="car-info-button">
                  <button className="info-button-style">Order</button>
                  <button className="info-button-style">Compare</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ShopCon>
  )
}

export default Shop
