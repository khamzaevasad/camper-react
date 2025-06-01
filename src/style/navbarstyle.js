import styled from 'styled-components';

export const NavbarContainer = styled.div`
  position: fixed;
  background-color: white;
  width: 100%;

  .nav-container {
    display: flex;
    height: 90px;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
  }
  .logo-con {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
  .menu-icon {
    width: 30px;
    height: 30px;
    display: none;
    cursor: pointer;
  }

  .menus-con {
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex: 3;
    color: var(--text, #373737);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .menus-con div:hover {
    cursor: pointer;
    color: #ff4d00;
  }

  .login-con {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    gap: 23px;
  }

  .option-icon {
    display: none;
  }

  .login-con img:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 1366px) {
    /*Navbar*/
    .menus-con {
      display: none;
    }
    .menu-icon {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .logo-con {
      justify-content: left;
      padding-left: 10%;
    }
    .login-con {
      justify-content: end;
      padding-right: 10%;
    }
    /*Navbar*/
  }
  @media only screen and (max-width: 431px) {
    /*Navbar*/
    .lang-icon,
    .menu-icon,
    .user-icon {
      display: none;
    }
    .option-icon {
      display: flex;
    }
    /*Navbar*/
  }
`;
