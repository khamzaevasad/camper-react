import styled from 'styled-components';

export const ShopCon = styled.div`
  display: flex;
  margin: 60px 70px;

  .location-box {
    padding: 15px;
  }
  .filter-con {
    flex: 2;
    height: 1500px;
    padding: 15px;
  }
  .filter-paragraph {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 18px */
  }

  .from-to-wrapper {
    display: flex;
  }

  .from-to-left {
    flex: 1;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 14px */
    margin-top: 10px;
  }

  .fromto-input {
    width: 91px;
    height: 36px;
    border-radius: 10px;
    border: 1px solid rgba(55, 55, 55, 0.6);
  }
  .from-to-right {
    flex: 1;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 14px */
    margin-top: 10px;
  }

  .brand-box {
    padding: 15px;
  }

  .select-mini {
    display: flex;
    justify-content: space-between;
  }

  .select-mini p:hover {
    color: #e88504;
    cursor: pointer;
  }

  .select-opt {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .check-con {
    width: 22px;
    height: 22px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 1px solid #666;
    background: #fff;
    cursor: pointer;
  }

  .check-con p {
    margin-left: 35px;
  }
  .button-box {
    margin-top: 54px;
    margin-bottom: 50px;
  }
  .button-style-cansel,
  .button-style-search {
    width: 115.804px;
    height: 38.968px;
    flex-shrink: 0;
    border-radius: 60px;
    background: var(--sariq, #e88504);
    /* btn sh */
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: white;
    border: none;
    cursor: pointer;
  }
  .button-style-search {
    background: var(--blue, #006dab);
  }

  .button-style-cansel:hover {
    background-color: #ff4d00;
  }
  .button-style-search:hover {
    background-color: #184bcd;
  }

  .compcare-cars {
    margin-top: 20px;
    display: flex;
    gap: 8px;
  }
  .compcare p {
    color: var(--blue, #006dab);
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .car1,
  .car2,
  .car3 {
    justify-content: center;
    align-items: center;
    display: flex;
    width: 76px;
    height: 90px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
  }

  /* carcon */

  .car-con {
    flex: 7;
    padding: 15px;
  }

  .sort-box {
    display: flex;
    padding: 5px;
  }

  .item-number {
    flex: 1;
    display: flex;
    align-items: center;
  }
  p span {
    color: var(--blue, #006dab);
  }
  .sort-select {
    flex: 2;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: end;
  }
  .sort-input {
    width: 200px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid rgba(55, 55, 55, 0.3);
    padding: 8px;
  }
  .input-button {
    width: 30px;
    height: 30px;
    border-radius: 0px 5px 5px 0px;
    border: 1px solid rgba(55, 55, 55, 0.3);
    margin-left: -37px;
    cursor: pointer;
  }

  .input-button:hover {
    background-color: #608dff;
    color: white;
  }
  .number-input {
    width: 70px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid rgba(55, 55, 55, 0.3);
    padding: 8px;
  }
  .clarity {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px 0px 0px 5px;
    border: 1px solid rgba(55, 55, 55, 0.3);
    width: 41px;
    height: 30px;
    flex-shrink: 0;
  }
  .men {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0px 5px 5px 0px;
    border: 1px solid rgba(55, 55, 55, 0.3);
    width: 40px;
    height: 30px;
    flex-shrink: 0;
    margin-left: -10px;
  }

  /*Shop container*/

  /*Car info container*/
  .car-categoria {
    margin-top: 37px;
    margin-left: 60px;
    padding: 10px;
    display: grid;
    grid-template-areas: 'a a a a';
    gap: 20px;
  }
  .car-info {
    border-radius: 20px;
    background: #fff;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
    width: 223px;
    height: 307px;
    flex-shrink: 0;
    padding: 13px;
    display: flex;
    flex-direction: column;
  }

  .heading-info {
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .paragraph-info {
    color: var(--text, #373737);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-top: 5px;
  }

  .stars-box {
    display: flex;
    justify-content: center;
    gap: 90px;
  }
  .rating-wrapper {
    display: flex;
  }

  .heading-price {
    margin-top: 18px;
    color: var(--blue, #006dab);
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .info-button-style {
    margin: 2px;
    margin-top: 13px;
    background-color: white;
    width: 94px;
    height: 35px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid var(--blue, #006dab);
    /* btn sh */
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
    color: var(--blue, #006dab);
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
  }

  .info-button-style:hover {
    background-color: #006dab;
    color: white;
  }
  @media only screen and (max-width: 1366px) {
    /*filter container*/
    .filter-con {
      display: none;
    }
    .sort-par {
      font-size: 13px;
    }
    /*filter container*/

    .car-categoria {
      display: grid;
      grid-template-areas: 'a a';
      gap: 35px;
      justify-content: center;
      margin: 0;
      padding: 15px;
    }

    .car-info {
      border-radius: 20px;
      background: #fff;
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
      width: 250px;
      height: 307px;
      flex-shrink: 0;
      padding: 13px;
      display: flex;
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 431px) {
    /*filter container*/
    .filter-con {
      display: none;
    }
    /*filter container*/

    /*car container*/
    .car-con {
      display: flex;
    }
    .price-con {
      display: none;
    }
    .car-categoria {
      display: grid;
      grid-template-areas: 'a';
    }
    /*car container*/

    /*option container*/
    .option-con {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 40px;
      margin-bottom: 20px;
      margin-left: 30px;
      margin-right: 30px;
    }
    .option-wrapper {
      display: flex;
    }
    .option-left {
      border-radius: 5px 0px 0px 5px;
      border: 1px solid rgba(55, 55, 55, 0.3);
      width: 41px;
      height: 30px;
      flex-shrink: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .option-right {
      border-radius: 0px 5px 5px 0px;
      border: 1px solid rgba(55, 55, 55, 0.3);
      width: 41px;
      height: 30px;
      flex-shrink: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .sort-mini-con {
      display: flex;
      gap: 30px;
      margin-left: 20px;
      margin-right: 20px;
    }
    .sort-mini-con p {
      margin-left: 10px;
      font-size: 13px;
    }
    .select-input {
      width: 150px;
      height: 30px;
      flex-shrink: 0;
      border-radius: 5px;
      border: 1px solid rgba(55, 55, 55, 0.3);
      padding: 10px;
    }
    .mini-input {
      border-radius: 5px;
      border: 1px solid rgba(55, 55, 55, 0.3);
      width: 82px;
      height: 30px;
      flex-shrink: 0;
      padding: 10px;
    }
    .mini-input-button {
      border-radius: 0px 5px 5px 0px;
      border: 1px solid rgba(55, 55, 55, 0.3);
      width: 30px;
      height: 30px;
      flex-shrink: 0;
      margin-left: -60px;
    }
    .mobile-line {
      margin-top: 10px;
      display: flex;
      justify-content: center;
    }
    /*option container*/
  }
`;
