import styled from 'styled-components';

import expBg from './../../images/experience-bg.png';

export const MainHeader = styled.h2`
  margin-bottom: 30px;
  padding: 10px 20px;
  font-family: 'Open Sans', sans-serif;
  font-size: 3rem;
  text-align: center;
  transform: perspective(2.5em) rotateX(15deg) scaleY(0.8);
  transition: all 0.5s;

  &:hover {
    transform: perspective(10em) rotateX(11deg) scale(1.2);
    text-shadow: 0 0 5px rgba(217, 233, 164, 0.4);
  }
`;


export const MainContainer = styled.section`
    margin-top: 55px;
`;

export const Healthy = styled.article`
    background-color: #98f89b;
    display: flex;
`;

export const HealthyText = styled.section`
    width: 60%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

export const HealthyHeader = styled.h3`
    font-weight: 300;
    font-size: 2rem;
    text-align: center;
`;

export const HealthyPar = styled.p`
    text-align: justify;
    padding: 0 20px;
    line-height: 30px;
`;

export const HealthyImageContainer = styled.section`
    width: 40%;
    padding: 10px;
`;

export const HealthyImg = styled.img`
    max-width: 100%;
`;

//Experience

export const Experience = styled.section`
    display: flex;
    flex-direction: row-reverse;
    background: url(${expBg}) top left;
`;

export const ExperienceText = styled.article`
    padding: 10px;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const ExperienceHeader = styled.h2`
    font-weight: 300;
    font-size: 2rem;
    text-align: center;
`;

export const ExperiencePar = styled.p`
    text-align: justify;
    padding: 0 20px;
    line-height: 30px;
`;

export const ExperienceImageContainer = styled.section`
    padding: 10px;
    width: 40%;
`;

export const ExperienceImg = styled.img`
    max-width: 100%;
`;

//Fitness

export const Fitness = styled.section`
    padding: 15px;
    margin: 20px 0;
    display: flex;
    justify-content: space-evenly;
`;

export const FitnessElement = styled.article`
    width: 30%;
`;

export const FitnessHeader = styled.h4`
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 15px;
    position: relative;
    &:after {
        content: '';
        display: block;
        height: 1px;
        width: 12%;
        background-color: #696969;
        margin-top: 7px;
        position: absolute;
        left: 50%;
        transform: translate(-50%);
    }
`;

export const FitnessImgContainer = styled.section`
    width: 80%;
    margin: 0 auto;
`;

export const FitnessImg = styled.img`
    max-width: 100%;
    border-radius: 10px;
`;

export const FitnessText = styled.p`
    padding: 20px;
    text-align: center;
`;