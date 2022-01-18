import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import {picture} from "../../constants/constants";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
        <SectionTitle main center>
            Welcome To <br/>
            My Personal Portfolio
                </SectionTitle>
        <SectionText>
            I am a Frontend and mobile development student. I am in my fourth semester now.
            I have had a lots of fun with coding, and learning how to make ideas into a reality.
            I still have a lot to learn, and need experience in order to become better and become a more valuable developer for companies.
        </SectionText>
        <Button onClick={() => window.location = 'mailto:abab010@student.kristiania.no'}>Send me a mail 😊</Button>
    </LeftSection>
  </Section>
);

export default Hero;