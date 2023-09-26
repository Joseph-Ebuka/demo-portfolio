import React from "react";
import styled from "styled-components";
import { PiCodeBold } from "react-icons/pi";
import { HiOutlinePencilSquare } from "react-icons/hi2";

const Services = () => {
  const services = [
    {
      id: "01",
      title: "Web Development",
      icon: <PiCodeBold />,
      content:
        "i use my knowlede of various programming skills amd technologies sucj as HTML5 CSS3 JavaScript Typescript Tailwind Bootstrap React.js Next.js and more to build beautiful and fully scalable web applications for users",
    },
    {
      id: "02",
      title: "Content Writing",
      icon: <HiOutlinePencilSquare />,
      content:
        "As a content writer, I transform ideas into compelling stories. With words as my canvas, I paint narratives that engage, inform, and inspire. Let's tell your story together.",
    },
    {
      id: "03",
      title: "Ui Design",
      icon: <PiCodeBold />,
      content:
        "With a strong foundation in user-centered design, I specialize in crafting seamless and visually captivating interfaces. My skills in user research, wireframing, and prototyping help me deliver engaging digital solutions.",
    },
  ];
  return (
    <Wrapper>
      <Container>
        <Header>
          <span>Services</span>
          <p>
            What <strong>I do</strong>
          </p>
        </Header>
        <Content>
          {services.map((service) => (
            <Box key={service.id}>
              <BoxHeader>
                <span>{service.id}</span>
              </BoxHeader>
              <BoxContent>
                <div>{service.icon}</div>
                <Article>
                  <h3>{service.title}</h3>

                  <div>
                    <span>{service.content}</span>
                  </div>
                </Article>
              </BoxContent>
            </Box>
          ))}
        </Content>
      </Container>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Box = styled.div`
  width: 300px;
  height: 250px;
  border: 1px solid white;
  position: relative;
  padding: 10px;
  text-align: left;
  background-color: #262626;
`;
const BoxHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const Article = styled.article``;

export default Services;
