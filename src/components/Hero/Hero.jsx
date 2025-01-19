import { Heading, Paragraph, SubHeading } from "../UI/Typography/Typography";
import { HeroLeft, HeroRight, HeroStyle } from "./Hero.styled";

function Hero() {
  return (
    <HeroStyle>  
      <section>
        <HeroLeft>
          <Heading>Covid ID</Heading>
          <SubHeading>Monitoring Perkembangan Covid</SubHeading>
          <Paragraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In incidunt blanditiis animi, 
            repellendus iste ad commodi quo rem eos aut, corrupti aspernatur, fugit omnis voluptatem 
            at eligendi reprehenderit modi doloribus.Lorem ipsum dolor sit, amet consectetur adipisicing elit. In incidunt blanditiis animi, 
            repellendus iste ad commodi quo rem eos aut, corrupti aspernatur, fugit omnis voluptatem 
            at eligendi reprehenderit modi doloribus</Paragraph>
        </HeroLeft>
        <HeroRight>
          <img
            src="https://f.top4top.io/p_3048juxt51.jpg"
            alt=""
          />
        </HeroRight>
      </section>
    </HeroStyle>
  );
}

export default Hero;