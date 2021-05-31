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
        transform: translateX(0);
        opacity:1;
    }to{
        transform: translateX(-100%);
        opacity: 0;
    }


`;

export const BannerTitle = styled.h1`
  color: ${(props) => props.theme.colors.white};
  font-weight: 500;
  font-size: 3em;

  margin-bottom: 0.5em;
  animation: ${(props) => (props.enter ? slideIn : slideOut)} 0.8s;
  animation-delay: ${(props) => (props.enter ? "1.5s" : 0)};
  animation-fill-mode: both;
  /* text-transform: uppercase; */
`;

export const BannerSubtitle = styled.h2`
  animation: ${(props) => (props.enter ? slideIn : slideOut)} 1.4s;
  animation-delay: ${(props) => (props.enter ? "1.5s" : 0)};
  animation-fill-mode: both;
  font-size: 1em;
  font-weight: 100;
  color: ${(props) => props.theme.colors.white};
  transition: transform 1s, opacity 1s;
  transform: translateX(${(props) => (props.enter ? 0 : "-100%")});
  opacity: ${(props) => (props.enter ? 1 : 0)};
`;

export const SectionTitleColored = styled.h3`
  color: ${(props) => props.theme.colors.main};
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 1em;
  margin-bottom: 1em;
`;
export const SectionTitle = styled.h4``;

export const ProjectTitle = styled.h2`
  color: ${(props) => props.theme.colors.mainDarker};
  font-weight: 900;
  font-size: 1.5em;
  margin-bottom: 0.5em;
`;

export const ProjectDescription = styled.p``;
