import styled, { keyframes } from "styled-components";
const slideIn = keyframes`
    from{
        transform: translateX(-100%);
        opacity:0;
    }to{
        transform: translateX(0);
        opacity: 1;
    }


`;
const slideOut = keyframes`
    from{
        transform: translateX(0%);
        opacity:1;
    }to{
        transform: translateX(-100%);
        opacity: 0;
    }


`;

export default styled.header`
  z-index: 1;
  display: grid;
  grid-template-columns: 66% auto;
  background-color: ${(props) => props.theme.colors.white};
  width: 100%;
  min-height: 100vh;

  @media (max-width: 1500px) {
    grid-template-columns: 80% auto;
  }

  div.left {
    opacity: 0;
    animation: ${(props) => (!props.enter ? slideOut : slideIn)} 1s forwards
      cubic-bezier(1, 0.04, 0.71, 1.07);
    animation-fill-mode: both;
    background: linear-gradient(
      to top right,
      ${(props) => props.theme.colors.mainLight},
      ${(props) => props.theme.colors.main}
    );
    animation-delay: ${(props) => (props.enter ? "0.8s" : "0.2s")};
    height: 100%;
    padding: 30% 40px 30% ${(props) => props.theme.spacing.sidesLG};
    @media (max-width: 1500px) {
      padding: 30% ${(props) => props.theme.spacing.sidesMD};
    }
    @media (max-width: 1000px) {
      padding: 30% ${(props) => props.theme.spacing.sidesSM};
    }
    @media (max-width: 850px) {
      padding: 30% ${(props) => props.theme.spacing.sidesXS};
    }
  }
  div.right {
    display: flex;
    align-items: center;
    position: relative;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 100%;
    div.right {
      display: none;
    }
  }
`;
