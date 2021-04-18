import styled from 'styled-components';

const CV = styled('div')``;

const Dashboard = styled('div')`
  align-items: center;
  background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));
  border-radius: 2rem 0rem 0rem 2rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-evenly;
`;

const Image = styled('img')`
  height: 10rem;
  border-radius: 50%;
`;

const Link = styled('div')`
  display: flex;
  margin: 2rem 0rem;
  padding: 1rem 5rem;
  align-items: center;

  h2 {
    padding: 0rem 2rem;
  }
`;

const SectionName = styled('h2')``;
const Title = styled('h1')``;
const Subtitle = styled('h3')``;
const User = styled('div')`
  text-align: center;
`;

export const Styles = { CV, Dashboard, Image, Link, SectionName, Subtitle, Title, User };
