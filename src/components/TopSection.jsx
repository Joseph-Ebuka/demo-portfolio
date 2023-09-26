import React from "react";
import Navbar from "./Navbar";
import { styled } from "styled-components";
import { VscGithub } from "react-icons/vsc";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import  { Fade, Bounce, Slide, Roll } from "react-awesome-reveal";
const TopSection = () => {
  return (
    <>
      <Wrapper className="topsection">
        <Container>
          <Navbar />
          <MainContent>
            <Bounce>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p>
                  HI, I am <strong>Joseph Ebuka David</strong>
                </p>
                <span>
                  A Seasoned <strong>Frontend Developer</strong> transforming
                  ideas into stunning <br /> digital experiences. lets create
                  something amazing!
                </span>
              </div>
            </Bounce>
            <Slide>
              <div>
                <button>
                  <VscGithub />{" "}
                </button>
                <button>
                  <AiFillLinkedin />
                </button>
                <button>
                  <AiOutlineMail />
                </button>
                <button>
                  <FiTwitter />
                </button>
              </div>
            </Slide>
          </MainContent>
        </Container>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  height: 65vh;
  color: white !important;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 130px;
`;
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: max-content;
  text-align: center;
  gap: 50px;
  p {
    font-size: 20px;
    font-weight: 600;
  }
  span {
    font-size: 18px;
  }
  strong {
    color: #0ceaf2;
  }
  div {
    display: flex;
    gap: 20px;
    button {
      border-radius: 50%;
      width: 30px;
      height: 30px;
      border: none;
      font-size: 24px;
      padding: 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
`;

export default TopSection;
