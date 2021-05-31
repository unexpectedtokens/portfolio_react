import styled from "styled-components";

export const ProjectsContainer = styled.main`
  padding: 100px 0;
`;

export const ProjectSection = styled.section`
  padding: 0 ${(props) => props.theme.spacing.sidesLG};
  background-color: ${(props) =>
    props.colored
      ? props.theme.colors.blackLighter
      : props.theme.colors.whiteDarker};

  > div {
    display: grid;
    grid-template-columns: 40% auto;
    align-items: center;
    align-content: center;
  }
  @media (max-width: 1500px) {
    padding: 0 ${(props) => props.theme.spacing.sidesMD};
  }
  @media (max-width: 1000px) {
    padding: 0 ${(props) => props.theme.spacing.sidesSM};
  }
  @media (max-width: 850px) {
    padding: 0 ${(props) => props.theme.spacing.sidesXS};
  }
  .projsectright {
    display: flex;
    justify-content: flex-end;
    figure {
      width: 80%;

      img {
        width: 100%;
        margin-left: 2em;
        margin-bottom: 2em;
        border-radius: 15px;
      }
    }
  }
`;

export const TechRepresContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1em;
`;

export const TechRepres = styled.span`
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors.mainLight};
  color: ${(props) => props.theme.colors.white};
  margin: 0 0.5em 0.5em 0;
  border-radius: 15px;
  font-size: 0.6em;
`;
