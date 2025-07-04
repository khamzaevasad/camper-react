import styled from 'styled-components';

export const FooterMobile = styled.div`
  display: none;
`;

export const FooterSection = styled.div`
  .footer-section {
    display: flex;
    height: 350px;
    background-color: #006dab;
  }
  .footer-left {
    flex: 2;
    padding: 50px;
    padding-left: 71px;
  }

  .footer-right {
    flex: 7;
  }

  .footer-contact {
    margin-left: 35px;
    padding: 50px;
  }
  table {
    color: white;
    width: 800px;
    text-align: left;
  }

  tr th {
    color: #fff;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    width: 800px;
    cursor: pointer;
  }
  tr td {
    color: #fff;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
  }

  @media only screen and (max-width: 1366px) {
    .footer-section {
      display: none;
    }

    .footer-con {
      display: flex;
      height: 401px;
      background-color: #006dab;
    }
    .logo-mini-con {
      flex: 1;
      display: flex;
      height: 40px;
      margin-top: 40px;
      margin-left: 79px;
    }
    .sns-mini-con {
      flex: 1;
      display: flex;
      gap: 14px;
      height: 40px;
      justify-content: end;
      margin-top: 40px;
      margin-right: 79px;
    }
  }

  @media only screen and (max-width: 431px) {
    .footer-con {
      display: flex;
      height: 401px;
      background-color: #006dab;
    }
    .logo-mini-con {
      flex: 1;
      display: flex;
      height: 40px;
      margin-top: 40px;
      margin-left: 30px;
    }
    .sns-mini-con {
      flex: 1;
      display: flex;
      gap: 14px;
      height: 40px;
      justify-content: end;
      margin-top: 40px;
      margin-right: 30px;
    }
  }
`;
