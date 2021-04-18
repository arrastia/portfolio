import styled from 'styled-components';

import { square } from 'views/.tools/Styles/KeyFrames';

const Glass = styled('div')`
  /* background: var(--white); */
  background: var(--glass-bg);
  border-radius: 2rem;
  /* min-height: 80vh; */
  height: 80vh;
  width: 60%;
  z-index: 1;
  backdrop-filter: blur(2rem);
  display: flex;
`;

const Bubbles = styled('ul')`
  height: 100vh;
  left: 0;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: 0;

  li {
    animation: ${square} 25s infinite;
    background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.3));
    bottom: -160px;
    display: block;
    border-radius: 50%;
    height: 40px;
    list-style: none;
    position: absolute;
    transition-timing-function: linear;
    width: 40px;
    -webkit-animation: ${square} 25s infinite;
    -webkit-transition-timing-function: linear;

    &:nth-child(1) {
      left: 10%;
    }

    &:nth-child(2) {
      animation-delay: 2s;
      animation-duration: 17s;
      height: 80px;
      left: 20%;
      width: 80px;
    }

    &:nth-child(3) {
      animation-delay: 4s;
      left: 25%;
    }

    &:nth-child(4) {
      animation-duration: 22s;
      background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.3));
      height: 60px;
      left: 40%;
      width: 60px;
    }

    &:nth-child(5) {
      left: 70%;
    }

    &:nth-child(6) {
      animation-delay: 3s;
      background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.3));
      height: 120px;
      left: 80%;
      width: 120px;
    }

    &:nth-child(7) {
      animation-delay: 7s;
      height: 160px;
      left: 32%;
      width: 160px;
    }

    &:nth-child(8) {
      animation-delay: 15s;
      animation-duration: 40s;
      height: 20px;
      left: 55%;
      width: 20px;
    }

    &:nth-child(9) {
      animation-delay: 2s;
      animation-duration: 40s;
      background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.3));
      height: 10px;
      left: 25%;
      width: 10px;
    }

    &:nth-child(10) {
      animation-delay: 11s;
      height: 160px;
      left: 90%;
      width: 160px;
    }
  }
`;

export const Styles = { Bubbles, Glass };
