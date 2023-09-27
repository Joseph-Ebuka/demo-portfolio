import React from "react";
import { styled } from "styled-components";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import AwesomeReveal, { Slide } from "react-awesome-reveal";

const Contact = () => {
  return (
    <Wrapper>
      <Container>
        <Slide direction="up">
          <Header>
            <span>Get in touch</span>
            <p>
              Contact <strong>Me</strong>
            </p>
            <p>
              I am currently open to full time, contract or part time
              opportunites in <br /> <strong>Frontend Development</strong>
            </p>
          </Header>
        </Slide>
        <Content>
          <Details>
            <AwesomeReveal animation="leftSlide" duration={800} delay={300}>
              {/* Your content goes here */}
              <div>
                <span>Have an awesome project idea?</span>

                <strong>Lets discuss</strong>
              </div>

              <div>
                <span>
                  <IoCallOutline /> +2349042350500
                </span>
                <span>
                  <AiOutlineMail /> ebukaj665@gmail.com
                </span>
                <span>
                  <IoLocationOutline /> lagos Nigeria
                </span>
              </div>
            </AwesomeReveal>
          </Details>
          <ReachOut>
            <AwesomeReveal animation="rightSlide" duration={800} delay={300}>
              <div>
                <label htmlFor="name">Full name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter name..."
                />
              </div>
              <div>
                <label htmlFor="email">Enter Email</label>
                <input
                  type="text"
                  name="name"
                  id="email"
                  placeholder="Enter email..."
                />
              </div>
              <div>
                <label htmlFor="name">Message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <Button>Reach Out</Button>
            </AwesomeReveal>
          </ReachOut>
        </Content>
      </Container>
    </Wrapper>
  );
};
const Details = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
  gap: 30px;
  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    text-align: left;
    span {
      font-size: 20px;
    }
    strong {
      color: #02dac5;
      font-size: 18px;
    }
  }
  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    text-align: left;
    span {
      font-weight: bold;
      display: flex;
      gap: 20px;
    }
  }
`;
const Button = styled.button`
  background: #02dac5;
  padding: 5px;
  border: none;
  border-radius: 5px;
  color: white;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const Header = styled.div`
  span {
    color: #b3b1b1;
    font-weight: 600;
  }
  p {
    font-size: 20px;
    strong {
      color: aqua;
    }
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  background-color: #1d1d1d;
  height: max-content;
  width: 80vw;
  border-radius: 10px;
  padding: 10px;
`;

const ReachOut = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    text-align: left;
    input {
      background-color: transparent;
      border: 1px solid #02dac5;
      outline: none;
      width: 300px;
      height: 50px;
      border-radius: 10px;
      color: white;
      font-size: 16px;
    }
    textarea {
      width: 300px;
      height: 100px;
      border-radius: 10px;
      resize: none;
      background-color: transparent;
      color: white;
      font-size: 16px;
    }
  }
`;
export default Contact;
