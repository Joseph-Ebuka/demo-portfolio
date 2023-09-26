import React from "react";
import { styled } from "styled-components";

import gallery from "../assets/img/GalleyApp.png";
import resturant from "../assets/img/resturant.png";
import movie from "../assets/img/movie.png";
import cloth from "../assets/img/cloth.png";

const Projects = () => {
  const projects = [
    {
      name: "Cloth Mock",
      img: cloth,
      link: "https://clothmock.vercel.app/",
      about:
        "Cloth mock is an app u an use ti check color pallets on cloths and test logos and designs on clothes",
    },
    {
      name: "Movie Box",
      img: movie,
      link: "https://hng-task2-moviebox.vercel.app/",
      about:
        "Movie Box is a web app that passes informations about various movies to the uses",
    },
    {
      name: "Dining Kings",
      img: resturant,
      link: "https://dininkkings.vercel.app/",
      about:
        "Dinning Kings is a resturant website that displays the gives infor about the resturant",
    },
    {
      name: "Gallery App",
      img: gallery,
      link: "https://hngx-task3-images-app.vercel.app/",
      about:
        "An App that give users acces to all the images in the world with drag and drop features",
    },
  ];
  return (
    <Wrapper>
      <Container>
        <Header>
          <span>Portfolio</span>
          <p>
            Featured <strong>Projects</strong>
          </p>
        </Header>
        <Content>
          {projects.map((project) => (
            <BoxWrapper>
              <TopBox>
                <TopBoxContent>
                  <img src={project.img} alt="hello world" />
                </TopBoxContent>
              </TopBox>
              <BottomBox>
                <h3>
                  <a href={project.link}>{project.name}</a>
                </h3>
                <span>{project.about}</span>
              </BottomBox>
            </BoxWrapper>
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
  padding: 20px;
`;

const Container = styled.div``;
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
`;
const BoxWrapper = styled.div`
  width: 350px;
  height: max-content;
  position: relative;
  padding: 10px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const TopBox = styled.div`
  width: 350px;
  height: 250px;
  border: 1px solid white;
  position: relative;

  text-align: left;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const TopBoxContent = styled.div`
  width: 350px;
  height: 250px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const BottomBox = styled.div`
  width: 300px;
  height: 100px;

  position: relative;
  text-align: left;
  a {
    text-decoration: none;
    color: white;
  }
`;
export default Projects;
