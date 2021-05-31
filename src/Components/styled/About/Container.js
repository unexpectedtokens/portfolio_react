import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    from{
        opacity: 0; 
    }
    to{
        opacity: 1;
    }

`;
const fadeOut = keyframes`
    from{
        opacity: 1;
    }
    to{
        opacity: 0;  
    }`;

export default styled.div`
  position: absolute;
  min-height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.colors.whiteDarker};
  animation: ${(props) => (props.enter ? fadeIn : fadeOut)} 0.3s;
  animation-fill-mode: both;
  animation-delay: 0.8s;
`;
