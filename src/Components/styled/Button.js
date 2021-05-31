import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonLink = styled(Link)`
  padding: 1em 3em;
  //background: ${(props) => props.theme.colors.whiteDarker};
  color: ${(props) => props.theme.colors.whiteDarker};
  border: 5px solid ${(props) => props.theme.colors.whiteDarker};
  border-radius: 50px;
  position: relative;
  text-decoration: none;
  display: inline-block;
  margin-top: 2em;
  font-family: "Lato";
  font-weight: 900;
`;
