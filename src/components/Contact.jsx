import React from "react";
import { styled } from "styled-components";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
const Contact = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <span>Get in touch</span>
          <p>
            Contact <strong>Me</strong>
          </p>
          <p>
            I am currently open to full time, contract or part time opportunites
            in <br /> <strong>Frontend Development</strong>
          </p>
        </Header>
        <Content>
          <Details>
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
          </Details>
          <ReachOut>
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
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
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
    }
    textarea {
      width: 300px;
      height: 100px;
      border-radius: 10px;
      resize: none;
      background-color: transparent;
      color: white;
    }
  }
`;
export default Contact;
