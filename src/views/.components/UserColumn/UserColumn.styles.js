import styled from 'styled-components';

const CV = styled('div')``;

const Dashboard = styled('div')`
  align-items: center;
  background: var(--glass-bg);
  /* background: rgba(255, 255, 255, 0.1); */
  /* box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5); */
  border-radius: 2rem 0rem 0rem 2rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-evenly;
  position: relative;

  & .dark-mode {
    position: absolute;
    top: 1rem;
    left: 1rem;
  }
`;

const Image = styled('img')`
  height: 10rem;
  width: 10rem;
  border: 0.2rem solid var(--react);
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
