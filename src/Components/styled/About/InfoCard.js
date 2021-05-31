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

export const InfoCardContainer = styled.section`
  padding: 0 ${(props) => props.theme.spacing.sidesLG};
  background-color: ${(props) => props.theme.colors.whiteDarker};

  @media (max-width: 1500px) {
    padding: 0 ${(props) => props.theme.spacing.sidesMD};
    grid-template-columns: repeat(2, auto);
  }
  @media (min-width: 1500px) {
    align-content: start;
  }
  @media (max-width: 1000px) {
    padding: 0 ${(props) => props.theme.spacing.sidesSM};
  }
  @media (max-width: 850px) {
    padding: 2em ${(props) => props.theme.spacing.sidesXS} 0;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  align-items: stretch;
  grid-gap: 1em;
  align-content: stretch;
  transform: translateY(-100px);
  @media (max-width: 1500px) {
    grid-template-columns: repeat(2, auto);

  }
  @media (min-width: 1500px) {
    align-content: start;
  }
  @media (max-width: 1000px) {
  }
  @media (max-width: 850px) {
    grid-template-columns: repeat(1, auto);

1  }
`;

export const InforCardContainerColored = styled.section`
  padding: 0 ${(props) => props.theme.spacing.sidesLG};
  margin-top: 200px;
  background-color: ${(props) => props.theme.colors.mainLight};

  @media (max-width: 1500px) {
    padding: 0 ${(props) => props.theme.spacing.sidesMD};
    grid-template-columns: repeat(2, auto);
  }
  @media (min-width: 1500px) {
    //align-items: s;
  }
  @media (max-width: 1000px) {
    padding: 0 ${(props) => props.theme.spacing.sidesSM};
  }
  @media (max-width: 850px) {
    padding: 2em ${(props) => props.theme.spacing.sidesXS} 0;
    grid-template-columns: repeat(1, auto);
  }
`;

export const InfoCard = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.1);
  flex-grow: 1;
  h2 {
    text-align: center;
    margin-bottom: 20px;
    color: ${(props) => props.theme.colors.mainDark};
    font-size: 1.5em;
    font-weight: 700;
  }
  > svg {
    font-size: 3em;
    fill: ${(props) => props.theme.colors.main};
    margin-bottom: 20px;
    font-weight: 100;
  }
  ul {
    margin-bottom: 20px;
  }

  li {
    list-style: none;
    display: flex;
    align-items: center;
    margin-bottom: 0.5em;
    justify-content: center;
    span {
      color: ${(props) => props.theme.colors.blackLighter};
      font-weight: 100;
      text-align: left;
    }
    svg {
      margin-right: 0.5em;
      fill: ${(props) => props.theme.colors.main};
    }
  }
  animation: ${(props) => (props.enter ? fadeIn : fadeOut)} 1s;
  animation-delay: ${(props) =>
    props.enter ? "1" + props.delay : "0" + props.delay}s;
  animation-fill-mode: both;
  a {
    margin-top: 1em;
    color: ${(props) => props.theme.colors.main};
  }
  h4 {
    text-align: center;
    margin-bottom: 20px;
    color: ${(props) => props.theme.colors.main};
    font-size: 1em;
    font-weight: 500;
  }
`;
