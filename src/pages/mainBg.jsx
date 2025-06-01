import React from 'react'
import { MainBgWrapper, MobileLine, OptionCon, SortMiniCon } from '../style/mainBgStyle'
import bottom from '../assets/bottom.svg';
import clarity from '../assets/clarity.svg';
import ic_round from '../assets/ic_round-view-list.svg';
import mobileline from '../assets/mobile-line.svg';
const MainBg = () => {
  return (
        <>
        <MainBgWrapper className="bg-wrapper">
            <div className="bg-wrapper-item">
                <p>Home / Motors</p>
                <h3>Our ranges</h3>
                <h2>Motors</h2>
            </div>
        </MainBgWrapper>

  <OptionCon className="option-con">
  <div>
    <p className="filter-paragraph">
      Item <span>25.156</span>
    </p>
  </div>
  <div className="option-wrapper">
    <div className="option-left">
      <img src={clarity} alt="clarity" />
    </div>
    <div className="option-right">
      <img src={ic_round} alt="menu" />
    </div>
  </div>
</OptionCon>

<SortMiniCon className="sort-mini-con">
  <p>Sort by</p>
  <div className="select-wrapper">
    <input type="text" placeholder="Select" className="select-input" />
    <button className="input-button">
      <img src={bottom} alt="arrow" />
    </button>
  </div>
  <div className="mini-select-wrapper">
    <input type="text" placeholder="60" className="mini-input" />
    <button className="mini-input-button">
      <img src={bottom} alt="arrow" />
    </button>
  </div>
</SortMiniCon>

<MobileLine className="mobile-line">
  <img src={mobileline} alt="mini-line"/>
</MobileLine>

        </>
  );
}

export default MainBg;
