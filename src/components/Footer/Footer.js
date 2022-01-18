import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+4746640686">+4746640686</LinkItem>
        </LinkColumn>
        <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <LinkItem href="mailto:abab010@student.kristiania.no">abab010@student.kristiania.no</LinkItem>
        </LinkColumn>
      </LinkList>
        <SocialIconsContainer>
            <CompanyContainer>
                <Slogan>Innovating one project at a time</Slogan>
            </CompanyContainer>
            <SocialContainer>
            <SocialIcons href="https://github.com/Ellaoui94">
                <AiFillGithub size="3rem"/>
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/ellaoui-abdellaoui-9b7033207/">
                <AiFillLinkedin size="3rem"/>
            </SocialIcons>
            </SocialContainer>
        </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
