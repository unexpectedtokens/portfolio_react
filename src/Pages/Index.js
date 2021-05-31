import Banner from "../Components/styled/HomePage/Banner";
import { BannerSubtitle, BannerTitle } from "../Components/styled/Titles";
import arpeg from "../assets/arpeggio.png";
import dtron from "../assets/dtronics.png";
import tron from "../assets/trondo.png";
import { useEffect } from "react";
import { useState } from "react";
import BannerImage, {
  BannerImgContainer,
} from "../Components/styled/HomePage/BannerIMG";
import { ButtonLink } from "../Components/styled/Button";
import Container from "../Components/styled/About/Container";
const HomePage = ({ state, setActiveRoute }) => {
  const [enter, setEnter] = useState(false);

  useEffect(() => {
    if (state === "entering" || state === "entered") {
      setEnter(true);
    }
    if (state === "exiting" || state === "exited") {
      setEnter(false);
    }
  }, [state]);
  useEffect(() => {
    setActiveRoute("/");
    //eslint-disable-next-line
  });
  return (
    <Container enter={enter}>
      <Banner enter={enter}>
        <div className="left" style={{ opacity: 0 }}>
          <BannerTitle enter={enter}>
            From Idea to Design to Working Product
          </BannerTitle>
          <BannerSubtitle enter={enter}>
            Meet Daniel de Jong - Software Engineer
          </BannerSubtitle>
          <ButtonLink to="/about">Find out more &rarr;</ButtonLink>
        </div>
        <div className="right">
          <BannerImgContainer enter={enter}>
            <BannerImage src={tron} delay={0.3} />
            <BannerImage src={dtron} delay={0.6} />
            <BannerImage src={arpeg} delay={0.9} />
          </BannerImgContainer>
        </div>
      </Banner>
    </Container>
  );
};

export default HomePage;
