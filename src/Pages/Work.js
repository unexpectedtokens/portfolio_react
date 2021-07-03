import { useEffect } from "react";
import { useState } from "react";
import Banner from "../Components/styled/About/Banner";
import Container from "../Components/styled/About/Container";
import dtronics from "../assets/dtronics.png";
import trondo from "../assets/trondo.png";
import pitcher from "../assets/pitcher.png";
import arpeg from "../assets/arpeggio.png";
import portfolio from "../assets/portfolio.png";
import lembas from "../assets/lembas.png";

import {
  ProjectDescription,
  ProjectTitle,
  SectionTitleColored,
} from "../Components/styled/Titles";
import {
  ProjectsContainer,
  ProjectSection,
  TechRepres,
  TechRepresContainer,
} from "../Components/styled/Work/Project";

const WorkObj = [
  {
    title: "Lembas",
    typeapp: "Recipe/ Mealplanning app",
    description:
      "App to store recipes and generate mealplans based on daily calorie intake",
    tech: ["ReactJS", "Create React App", "Styled Components"],
    image: lembas,
  },
  {
    title: "Dtronics Tech Solutions",
    typeapp: "Business Website",
    description:
      "The website I built for my freelance web development business.",
    tech: [
      "ReactJS",
      "GatsbyJS",
      "Styled-Components",
      "Django-Rest-Framework",
      "PostgreSQL",
    ],
    image: dtronics,
  },
  {
    title: "Trondo",
    typeapp: "Task Management App",
    description:
      "A web app which helps keeping track of stuff you have yet to do.",
    tech: ["VueJS", "ExpressJS", "MongoDB"],
    image: trondo,
  },
  {
    title: "Pitcher",
    typeapp: "Open Maps App",
    description:
      "An app using google maps to display climbing and boulder gyms",
    tech: ["ReactJS", "Open Maps API", "Styled-Components"],
    image: pitcher,
  },
  {
    title: "Arpeggio",
    typeapp: "Social media site",
    description:
      "A website where musicians can find each other to make some noise.",
    tech: [
      "ReactJS",
      "GatsbyJS",
      "Django-Rest-Framework",
      "PostgreSQL",
      "Firebase",
      "Styled-Components",
    ],
    image: arpeg,
  },
  {
    title: "This very website",
    typeapp: "Portfolio website",
    description: "A website to show off my skills and work",
    tech: ["ReactJS", "Styled-Components"],
    image: portfolio,
  },
];

const Work = ({ state, setActiveRoute }) => {
  const [enter, setEnter] = useState(false);

  useEffect(() => {
    setEnter(state === "entering" || state === "entered");
  }, [state]);
  useEffect(() => {
    setActiveRoute("/work");
  });
  return (
    <Container enter={enter}>
      <Banner
        enter={enter}
        style={{ minHeight: "20vh", padding: "80px 0" }}
      ></Banner>
      <ProjectsContainer>
        {WorkObj.map((proj, index) => {
          return (
            <ProjectSection colored={false}>
              <div>
                <div class="projsectleft">
                  <SectionTitleColored>{proj.typeapp}</SectionTitleColored>
                  <ProjectTitle>{proj.title}</ProjectTitle>
                  <ProjectDescription>{proj.description}</ProjectDescription>
                  <TechRepresContainer>
                    {proj.tech.map((tech) => (
                      <TechRepres>{tech}</TechRepres>
                    ))}
                  </TechRepresContainer>
                </div>
                <div class="projsectright">
                  <figure>
                    <img src={proj.image} alt={proj.image} />
                  </figure>
                </div>
              </div>
            </ProjectSection>
          );
        })}
      </ProjectsContainer>
    </Container>
  );
};

export default Work;
