import { useState } from "react";
import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from{
    transform: translateX(50%);
    opacity: 0;
  }to{
    transform: translateX(0);
    opacity: 1;
  }

`;

const slideOut = keyframes`
  from{
    transform: translateX(0);
    opacity: 1;
  }to{
    transform: translateX(50%);
    opacity: 0;
  }

`;

export const BannerImgContainer = styled.div`
  transform: translateX(-10%) rotate(30deg);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  min-width: 400px;
  width: 40vw;
  align-items: flex-start;
  > div {
    padding: 0.5em;
    width: 50%;
    animation: ${(props) => (props.enter ? slideIn : slideOut)} 2s;
    animation-fill-mode: both;
    animation-delay: ${(props) => (props.enter ? "1.2s" : "0")};
  }
  @media (max-width: 1500px) {
    > div {
      padding: 0.2em;
      width: 75%;
    }
  }
`;

const Figure = styled.figure`
  border-radius: 15px;
  overflow: hidden;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  transform: scale(1.1);
`;

const BannerImage = ({ src, delay }) => {
  return (
    <div style={{ animationDelay: `${delay}s` }}>
      <Figure>
        <Image src={src} />
      </Figure>
    </div>
  );
};

export default BannerImage;
