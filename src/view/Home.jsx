import React from "react";
import TopSection from "../components/TopSection";
import { styled } from "styled-components";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Contact from '../components/Contact'
import About from "../components/About";
const Home = () => {
  return (
    <Wrapper>
      <TopSection />
      <Services/>
      <Projects/>

      <About/>
      <Contact/>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: #131313;
  color: white !important;
  text-align: center;
  gap: 30px;
  display: flex;
  flex-direction: column;
`;
export default Home;
