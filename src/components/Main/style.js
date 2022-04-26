import styled from "styled-components";

export const MainFundo = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Container = styled.div`
  max-height: 100%;
  width: 390px;
  @media (max-width: 402px) {
    max-width: 300px;
  }
  @media (max-width: 425px) {
    max-width: 300px;
  }
  @media (max-width: 376px) {
    max-width: 340px;
  }
  @media (max-width: 338px) {
    max-width: 310px;
  }
  @media (max-width: 381px) {
    max-width: 285px;
  }
  @media (max-width: 338px) {
    max-width: 265px;
  }
  @media (max-width: 379px) {
    max-width: 270px;
  }
  header {
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .text-logo {
      h1 {
        color: ${(props) => props.theme.colors.colorFont};
        letter-spacing: 1px;
        font-size: 24px;
      }
    }
    .theme {
      display: flex;
      align-items: center;
      max-height: 300px;
      height: 100%;
      .theme-logo {
        margin-right: 1rem;
        height: 40px;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        p {
          color: ${(props) => props.theme.colors.colorFont};
          text-transform: uppercase;
          font-size: 12px;
          font-weight: 700;
        }
      }
      .theme-container {
        .selector-theme {
          display: flex;
          justify-content: space-around;
          width: 70px;
          #s-theme {
            margin: 0;
          }
          button {
            border: none;
            color: ${(props) => props.theme.colors.colorFont};
            font-weight: 700;
            cursor: pointer;
            background: transparent;
          }
        }
        .theme-se {
          display: flex;
          align-items: center;
          justify-content: ${(props) => props.theme.typeFlex.flexStart};
          width: 100%;
          background: ${(props) => props.theme.typeFlex.ballFundo};
          height: 1.5rem;
          border-radius: 1rem;
          transition: all 0.05s ease-out;
          .ball-theme {
            background: ${(props) => props.theme.typeFlex.ball};
            width: 17px;
            height: 17px;
            border-radius: 50%;
            margin-left: 0.3rem;
            transition: all 0.05s ease;
          }
        }
      }
    }
  }
  .result {
    display: flex;
    justify-content: end;
    background: ${(props) => props.theme.colors.fundoResult};
    width: 100%;
    height: 5rem;
    margin-top: 1rem;
    border-radius: 0.5rem;
    .container-result {
      border-radius: 0.5rem;
      max-width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: end;
      h2 {
        margin-right: 2rem;
        color: ${(props) => props.theme.colors.colorFont};
        font-size: 35px;
      }
    }
  }
  .context {
    margin-top: 1rem;
    background: ${(props) => props.theme.colors.backCalc};
    height: 340px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    .container-context {
      width: 350px;
      height: 85%;
      display: flex;
      flex-direction: column;
      @media (max-width: 376px) {
        max-width: 320px;
      }
      @media (max-width: 379px) {
        max-width: 320px;
      }
      @media (max-width: 338px) {
        max-width: 290px;
      }
      @media (max-width: 381px) {
        max-width: 240px;
        height: 300px;
      }
      @media (max-width: 402px) {
        max-width: 270px;
        height: 300px;
      }
      @media (max-width: 338px) {
        max-width: 230px;
        height: 300px;
      }
      @media (max-width: 379px) {
        max-width: 240px;
      }
      @media (max-width: 425px) {
        max-width: 270px;
        height: 300px;
      }
      @media (max-width: 379px) {
        max-width: 240px;
        height: 300px;
        border-radius: 0.3rem;
      }
      div {
        display: flex;
        justify-content: space-between;
      }
    }
  }
`;
export const ButtonCalc = styled.button`
  width: 75px;
  height: 45px;
  @media (max-width: 402px) {
    width: 60px;
    height: 50px;
    border-radius: 0.3rem;
  }
  @media (max-width: 425px) {
    width: 60px;
    height: 50px;
    border-radius: 0.3rem;
  }
  @media (max-width: 338px) {
    width: 50px;
    height: 50px;
    border-radius: 0.3rem;
  }
  @media (max-width: 381px) {
    max-width: 50px;
    height: 50px;
    border-radius: 0.3rem;
  }
  border: none;
  font-size: 1.7rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.colorFonts};
  background-color: ${(props) => props.theme.colors.key};
  border-radius: 0.5rem;
  border-bottom: 2px solid ${(props) => props.theme.colors.keyShadow};
  cursor: pointer;
  box-shadow: 0px 1px 3px solid ${(props) => props.theme.colors.keyShadow};
  font-weight: 700;
`;
export const ButtonDelReset = styled.button`
  border: none;
  width: 75px;
  height: 45px;
  border-radius: 0.5rem;
  border-bottom: 2px solid ${(props) => props.theme.colors.delShadow};
  box-shadow: 0px 1px 3px solid ${(props) => props.theme.colors.delShadow};
  background: ${(props) => props.theme.colors.delRest};
  color: ${(props) => props.theme.colors.delColor};
  font-size: 1rem;
  letter-spacing: 1px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 700;
  @media (max-width: 338px) {
    width: 60px;
    height: 60px;
    border-radius: 0.3rem;
  }
  @media (max-width: 402px) {
    width: 50px;
    height: 50px;
    border-radius: 0.3rem;
  }
  @media (max-width: 379px) {
    max-width: 100px;
    height: 50px;
    border-radius: 0.3rem;
  }
  @media (max-width: 425px) {
    width: 50px;
    height: 50px;
    border-radius: 0.3rem;
  }
`;
export const buttonReset = styled.button`
  text-transform: uppercase;
  width: 170px;
  height: 2.8rem;
  border-radius: 0.5rem;
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.colors.delShadow};
  background: ${(props) => props.theme.colors.delRest};
  color: ${(props) => props.theme.colors.delColor};
  font-size: 1rem;
  letter-spacing: 1px;
  font-weight: 700;

  @media (max-width: 338px) {
    width: 110px;
    height: 45px;
    border-radius: 0.3rem;
  }
  @media (max-width: 402px) {
    width: 130px;
    height: 45px;
    border-radius: 0.3rem;
  }
  @media (max-width: 381px) {
    max-width: 115px;
    height: 45px;
    border-radius: 0.3rem;
  }
  @media (max-width: 425px) {
    width: 130px;
    height: 45px;
    border-radius: 0.3rem;
  }
`;
export const ButtonResult = styled.button`
  width: 48%;
  background: ${(props) => props.theme.colors.backResult};
  height: 2.8rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: white;
  border-bottom: 2px solid ${(props) => props.theme.colors.backShadow};
  font-weight: 700;
  @media (max-width: 338px) {
    width: 110px;
    height: 45px;
    border-radius: 0.3rem;
  }
  @media (max-width: 381px) {
    max-width: 115px;
    height: 45px;
    border-radius: 0.3rem;
  }
  @media (max-width: 402px) {
    width: 130px;
    height: 45px;
    border-radius: 0.3rem;
  }
  @media (max-width: 425px) {
    width: 130px;
    height: 45px;
    border-radius: 0.3rem;
  }
`;
