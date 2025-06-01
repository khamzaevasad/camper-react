import styled from 'styled-components';
import bgImage from '../assets/bg-pc.png';

export const MainBgWrapper = styled.div`
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: white;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 90px;

  .bg-wrapper-item {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
  }

  .bg-wrapper-item p {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .bg-wrapper-item h3 {
    font-size: 27px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-top: 15px;
  }

  .bg-wrapper-item h2 {
    font-size: 80px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  @media only screen and (max-width: 1366px) {
    /*Bg wrapper*/
    .bg-wrapper {
      background-position: center;
      background-image: url(${bgImage});
      background-repeat: no-repeat;
      background-position: center;
      height: 350px;
    }
    /*Bg wrapper*/
  }

  @media only screen and (max-width: 431px) {
    .bg-wrapper {
      background-position: center;
      background-image: url(${bgImage});
      background-repeat: no-repeat;
      background-position: center;
      height: 350px;
    }
  }
`;

// mobile
export const OptionCon = styled.div`
  display: none;
`;
export const SortMiniCon = styled.div`
  display: none;
`;

export const MobileLine = styled.div`
  display: none;
`;
