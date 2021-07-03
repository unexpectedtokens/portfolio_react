import { useEffect, useState } from "react";
import Banner, {
  InfoBar,
  InfoContainer,
} from "../Components/styled/About/Banner";
import Container from "../Components/styled/About/Container";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@material-ui/icons/AccessTimeOutlined";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import BatteryChargingFullOutlinedIcon from "@material-ui/icons/BatteryChargingFullOutlined";
import SchoolOutlinedIcon from "@material-ui/icons/SchoolOutlined";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import CodeOutlinedIcon from "@material-ui/icons/CodeOutlined";
import BuildOutlinedIcon from "@material-ui/icons/BuildOutlined";
import WebOutlinedIcon from "@material-ui/icons/WebOutlined";
import {
  BannerTitle,
  SectionTitle,
  SectionTitleColored,
} from "../Components/styled/Titles";
import {
  CardContainer,
  InfoCard,
  InfoCardContainer,
  InforCardContainerColored,
} from "../Components/styled/About/InfoCard";
import { Link } from "react-router-dom";

const About = ({ state, setActiveRoute }) => {
  const [enter, setEnter] = useState(false);
  useEffect(() => {
    setActiveRoute("/about");
  });
  useEffect(
    () => setEnter(state === "entering" || state === "entered"),
    [state]
  );
  const getAge = () => {
    const birthDate = new Date("11/24/1996");
    const now = new Date();
    const curYear = now.getFullYear();
    const curMonth = now.getMonth() + 1;
    const curDay = now.getDate();
    const birthYear = birthDate.getFullYear();
    const birthMonth = birthDate.getMonth() + 1;
    const birthDay = birthDate.getDate();
    let age = curYear - birthYear;
    if (curMonth < birthMonth) {
      age--;
    }
    if (curMonth === birthMonth && curDay < birthDay) {
      age--;
    }
    // if (isNaN(age)) {
    //   return "24";
    // }
    return age;
  };
  console.log(getAge());
  return (
    <Container enter={enter}>
      <Banner enter={enter}>
        <div>
          <BannerTitle enter={enter}>
            Daniel de Jong: Software Engineer
          </BannerTitle>
          <InfoBar>
            <InfoContainer>
              <LocationOnOutlinedIcon />
              <span>Maastricht, the Netherlands</span>
            </InfoContainer>
            <InfoContainer>
              <AccessTimeOutlinedIcon />
              <span>{getAge()} years old</span>
            </InfoContainer>
            <InfoContainer>
              <WorkOutlineOutlinedIcon />
              <span>Zuyd Hogeschool - ICT Academie</span>
            </InfoContainer>
          </InfoBar>
        </div>
      </Banner>
      <InfoCardContainer>
        <CardContainer>
          <InfoCard enter={enter} delay=".2">
            <SchoolOutlinedIcon />
            <h2>Education</h2>
            <ul>
              {[
                "Self-educating software engineering: 2018 - now",
                "MBO at Grafisch Lyceum Utrecht: 2019 - 2020",
                "Associate's Degree ICT at Zuyd Hogeschool: 2020 - now",
              ].map((x) => (
                <li key={x}>
                  <CheckCircleOutlineOutlinedIcon />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </InfoCard>
          <InfoCard enter={enter} delay=".5">
            <WorkOutlineOutlinedIcon />
            <h2>Work experience</h2>
            <ul>
              {[
                "Hobby projects - Making websites/apps for fun and educational purposes: 2018 - now",
                "Self-employed at Dtronics Tech Solutions - Freelance web development: 2019 - 2021",
              ].map((x) => (
                <li key={x}>
                  <CheckCircleOutlineOutlinedIcon />
                  <span>{x}</span>
                </li>
              ))}
            </ul>

            <Link to="/work">See what kind of things I've made &rarr;</Link>
          </InfoCard>
          <InfoCard enter={enter} delay=".8">
            <BatteryChargingFullOutlinedIcon />
            <h2>Spare time</h2>
            <ul>
              {[
                "Playing guitar",
                "Rock climbing",
                "Running",
                "Working on hobby projects",
              ].map((x) => (
                <li key={x}>
                  <CheckCircleOutlineOutlinedIcon />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </InfoCard>
        </CardContainer>
      </InfoCardContainer>
      <InfoCardContainer>
        <div>
          <SectionTitleColored>My skills</SectionTitleColored>
          <SectionTitle>
            What I have learned during my career as a Software Engineer
          </SectionTitle>
        </div>
      </InfoCardContainer>
      <InforCardContainerColored>
        <CardContainer>
          <InfoCard enter={enter} delay=".8">
            <CodeOutlinedIcon />
            <h2>Backend Development</h2>
            <h4>Programming languages:</h4>
            <ul>
              {["Golang", "NodeJS/Javascript", "Python", ".NET/C#"].map((x) => (
                <li key={x}>
                  <CodeOutlinedIcon />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <h4>Frameworks:</h4>
            <ul>
              {["ExpressJS", "Django/Django-Rest-framework", "ASP.NET"].map(
                (x) => (
                  <li key={x}>
                    <CodeOutlinedIcon />
                    <span>{x}</span>
                  </li>
                )
              )}
            </ul>
            <h4>Databases:</h4>
            <ul>
              {["MySQL", "PostgreSQL", "SQL Server", "MongoDB"].map((x) => (
                <li key={x}>
                  <CodeOutlinedIcon />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <h4>Want to learn:</h4>
            <ul>
              {["GraphQL", "OAuth2"].map((x) => (
                <li key={x}>
                  <CodeOutlinedIcon />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </InfoCard>
          <InfoCard enter={enter} delay=".8">
            <WebOutlinedIcon />
            <h2>Frontend Development</h2>
            <h4>(Programming) languages:</h4>
            <ul>
              {["Javascript/Typescript", "HTML5", "CSS3/SASS"].map((x) => (
                <li key={x}>
                  <CodeOutlinedIcon />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <h4>Frameworks/libraries:</h4>
            <ul>
              {[
                "ReactJS",
                "VueJS",
                "Styled-Components",
                "React Native",
                "Material-UI",
              ].map((x) => (
                <li key={x}>
                  <CodeOutlinedIcon />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <h4>Want to learn:</h4>
            <ul>
              {["NextJS", "Dart/Flutter", "Kotlin"].map((x) => (
                <li key={x}>
                  <CodeOutlinedIcon />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </InfoCard>
          <InfoCard enter={enter} delay=".8">
            <BuildOutlinedIcon />
            <h2>Tools</h2>

            <ul>
              {["Docker", "Vagrant", "Postman"].map((x) => (
                <li key={x}>
                  <CodeOutlinedIcon />
                  <span>{x}</span>
                </li>
              ))}
            </ul>

            <h4>IDE's:</h4>
            <ul>
              {["Visual Studio Code", "Visual Studio"].map((x) => (
                <li key={x}>
                  <CodeOutlinedIcon />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <h4>Design tools:</h4>
            <ul>
              {["Adobe XD", "Visual Paradigm"].map((x) => (
                <li key={x}>
                  <CodeOutlinedIcon />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </InfoCard>
        </CardContainer>
      </InforCardContainerColored>
    </Container>
  );
};

export default About;
