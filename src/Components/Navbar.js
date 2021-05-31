import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
const slideIn = keyframes`
    from{
        transform: translateY(-100%);
        opacity: 0;
    }
    to{
        transform: translateY(0);
        opacity: 1;
    }
`;

const Nav = styled.nav`
  width: 100%;
  display: grid;
  grid-template-columns: 66% auto;
  position: absolute;
  left: 0;
  z-index: 500;
  animation: ${slideIn} 1s;

  @media (max-width: 1500px) {
    grid-template-columns: 80% auto;
  }
  @media (max-width: 900px) {
    grid-template-columns: 100%;
  }

  > div {
    padding: 30px 0;
  }
  div.nav-left {
    padding-left: ${(props) => props.theme.spacing.sidesLG};
    @media (max-width: 1500px) {
      padding-left: ${(props) => props.theme.spacing.sidesMD};
    }
    @media (max-width: 1000px) {
      padding-left: ${(props) => props.theme.spacing.sidesSM};
    }
    @media (max-width: 850px) {
      padding-left: ${(props) => props.theme.spacing.sidesXS};
    }
    //background-color: ${(props) => props.theme.colors.main};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 20px;
  }
  div.nav-left-links {
    @media (max-width: 600px) {
      display: none;
    }
    ul {
      display: flex;
      li {
        list-style: none;
      }
    }
  }
  div.nav-right {
    padding-right: ${(props) => props.theme.spacing.sidesLG};

    @media (max-width: 900px) {
      display: none;
    }

    ul {
      display: flex;
      justify-content: flex-end;
      height: 100%;
      align-items: center;
      li {
        list-style: none;
        margin-left: 2em;
        transition: transform 0.3s;
        :hover {
          transform: scale(1.1);
        }
        svg {
          fill: ${(props) => props.theme.colors.blackLighter};
        }
      }
    }
  }
  a {
    text-decoration: none;
  }
  h1 {
    font-weight: 900;
    font-size: 1.2em;
    background: unset;
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
    span {
      color: ${(props) => props.theme.colors.blackLighter};
    }
  }
  @media (max-width: 1000px) {
    div.nav-right ul li svg {
      fill: ${(props) => props.theme.colors.white};
    }
  }
`;

const Navlink = styled(Link)`
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  padding: 1em 0;
  margin: 0 2em 0 0;
  position: relative;
  font-weight: 900;
  display: flex;
  align-items: center;
  transform: translateX(50%);
  opacity: 0;
  transform: translateY(-100%);
  animation: ${slideIn} 0.4s;
  animation-delay: ${(props) => props.duration + 1}s;
  animation-fill-mode: forwards;
  svg {
    margin-right: 10px;
  }
  ::after {
    background-color: ${(props) => props.theme.colors.white};
    width: ${(props) => (props.active ? "100%" : 0)};
    position: absolute;
    top: 100%;
    left: 0;
    height: ${(props) => (props.active ? "6px" : "4px")};
    border-radius: 15px;
    content: "";
    transition: width 0.3s ease-out, height 0.3s 0.4s;
  }

  :hover::after {
    width: 100%;
    height: 6px;
  }
`;

const Navbar = ({ activeRoute, state }) => {
  return (
    <Nav state={state}>
      <div className="nav-left">
        <Link to="/">
          <h1>
            Daniel <span>de Jong</span>
          </h1>
        </Link>

        <div className="nav-left-links">
          <ul>
            <li>
              <Navlink
                active={activeRoute === "/about"}
                to="/about"
                duration={0.3}
              >
                <InfoOutlinedIcon />
                About me
              </Navlink>
            </li>
            <li>
              <Navlink
                active={activeRoute === "/work"}
                to="/work"
                duration={0.6}
              >
                <WorkOutlineIcon />
                My work
              </Navlink>
            </li>
            {/* <li>
              <Navlink
                active={activeRoute === "/skills"}
                to="/skills"
                duration="0.9s"
              >
                <StarBorderOutlinedIcon />
                My skills
              </Navlink>
            </li> */}
          </ul>
        </div>
      </div>
      <div className="nav-right">
        <ul>
          <li>
            <a href="https://github.com/unexpectedtokens">
              <GitHubIcon />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/daniel-de-jong-046202117/">
              <LinkedInIcon />
            </a>
          </li>
        </ul>
      </div>
    </Nav>
  );
};

export default Navbar;
