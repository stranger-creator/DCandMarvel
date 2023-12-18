"use client"
import React from 'react';
import styled from 'styled-components';

const Home: React.FC = () => {
  return (
    <Container>
      <BgImage />
      <Content>
        <CTA>
          <CTALogoOne src="" alt="" />
          
          <SignUpButton href='/signup' >GET ALL THERE</SignUpButton>
          <Desc>
          In the timeless battle of Marvel vs DC, iconic heroes collide and extraordinary stories unfold. From the web-swinging Spider-Man to the caped crusader Batman, explore the epic clash of these legendary universes, where imagination knows no bounds.
          </Desc>
         
        </CTA>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  height: 100vh;
`;

const Content = styled.div`
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
  z-index: 1;
`;

const BgImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: url("/images/marveldc.jpg") center/cover no-repeat;
  background-color: rgba(255, 255, 255, 0.6);
  opacity:30%;
  z-index: -2;
`;


const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  width: 100%;
  min-height: 1px;
  display: block;
  max-width: 600px;
`;

const SignUpButton = styled.a`
  font-weight: bold;
  color: #0063e5;
  background-color: #f9f9f9;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 14px;
  padding: 16.5px 0;
  border: 1px solid #0063e5;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  &:hover {
    background-color: #0063e5;
    color: #f9f9f9;
  }
`;

const Desc = styled.p`
  color: hsla(0, 0%, 55%, 1); /* Lighter text color */
  font-size: 14px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
  text-align: center;
`;

export default Home;