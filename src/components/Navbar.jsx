import React from "react";
import { styled } from "styled-components";
import { Fade,  Slide, } from "react-awesome-reveal";

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <Slide>
          <Logo>Ebuka.</Logo>
        </Slide>
        <LinkResume>
          <Links>
          <Fade cascade>
            <span>Home</span>
            <span>Featured Projects</span>
            <span>About me</span>
            <span>Contact me</span>
          </Fade>
          </Links>
        </LinkResume>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;

  padding: 20px;
  color: white;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const Logo = styled.div`
  font-size: 20px;
  font-family: "Croissant One", cursive;
`;

const LinkResume = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  @media (max-width: 600px) {
    display: none;
  }
`;
const Links = styled.div`
  display: flex;
  gap: 20px;
  font-size: 18px;
`;
const Button = styled.button`
  width: 120px;
  height: 30px;
  padding: 5px;
  border-radius: 5px;
  border: none;
  background-color: #06fdfd;
  transition: 2s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    background-color: #06abab;
  }
`;
export default Navbar;
