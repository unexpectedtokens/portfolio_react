import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from{
    opacity: 0;
    transform: translateY(50%);
  }to{
    opacity: 1;
    transform: translateY(0);
  }

`;
const fadeOut = keyframes`
  from{
    opacity: 1;
    transform: translateY(0);
  }to{
    opacity: 0;
    transform: translateY(50%);
  }

`;

export default styled.header`
  z-index: 2;
  background: linear-gradient(
    to left,
    ${(props) => props.theme.colors.mainLight},
    ${(props) => props.theme.colors.main}
  );
  width: 100%;
  min-height: 30em;
  padding: 200px 0;
  animation: ${(props) => (props.enter ? fadeIn : fadeOut)} 1s;
  animation-fill-mode: both;
  animation-delay: ${(props) => (props.enter ? "1.5s" : "0s")};
  @media (max-width: 600px) {
    padding-top: 150px;
    padding-bottom: 100px;
  }
  > div {
    padding: 0 40px 0 ${(props) => props.theme.spacing.sidesLG};
    @media (max-width: 1500px) {
      padding: 0 ${(props) => props.theme.spacing.sidesMD};
    }
    @media (max-width: 1000px) {
      padding: 0 ${(props) => props.theme.spacing.sidesSM};
    }
    @media (max-width: 850px) {
      padding: 0 ${(props) => props.theme.spacing.sidesXS};
    }
  }
`;

export const InfoBar = styled.div`
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  margin-right: 1.5em;
  align-items: center;
  @media (max-width: 600px) {
    margin-bottom: 1em;
  }
  svg {
    fill: ${(props) => props.theme.colors.white};
    margin-right: 0.5em;
  }
  span {
    color: ${(props) => props.theme.colors.white};
  }
`;
