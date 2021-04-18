import styled, { keyframes } from 'styled-components';

const heartBeat = keyframes`{
  0%,
  17.5% {
    font-size: 0;
  }
}`;
const mainExplosion = keyframes`{
  15% {
    transform: scale(1);
    border-color: #cc8ef5;
    border-width: 2.25rem;
  }
  30%,
  100% {
    transform: scale(1);
    border-color: #cc8ef5;
    border-width: 0;
  }
}`;
const particles = keyframes`{
  0%,
  20% {
    opacity: 0;
  }
  25% {
    opacity: 1;
    box-shadow: 0.32476rem -2.4375rem 0 0rem #ff8080, -0.32476rem -2.0625rem 0 0rem #ffed80, 2.1082rem -1.26585rem 0 0rem #ffed80,
      1.41004rem -1.53985rem 0 0rem #a4ff80, 2.30412rem 0.85901rem 0 0rem #a4ff80, 2.08305rem 0.14233rem 0 0rem #80ffc8,
      0.76499rem 2.33702rem 0 0rem #80ffc8, 1.18748rem 1.71734rem 0 0rem #80c8ff, -1.35019rem 2.0552rem 0 0rem #80c8ff,
      -0.60229rem 1.99916rem 0 0rem #a480ff, -2.44865rem 0.22578rem 0 0rem #a480ff, -1.93852rem 0.77557rem 0 0rem #ff80ed,
      -1.70323rem -1.77366rem 0 0rem #ff80ed, -1.81501rem -1.03204rem 0 0rem #ff8080;
  }
}`;

const bubbleAnimation = keyframes`{
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  
    20% {
      -webkit-transform: scaleY(0.95) scaleX(1.05);
      transform: scaleY(0.95) scaleX(1.05);
    }
  
    48% {
      -webkit-transform: scaleY(1.1) scaleX(0.9);
      transform: scaleY(1.1) scaleX(0.9);
    }
  
    68% {
      -webkit-transform: scaleY(0.98) scaleX(1.02);
      transform: scaleY(0.98) scaleX(1.02);
    }
  
    80% {
      -webkit-transform: scaleY(1.02) scaleX(0.98);
      transform: scaleY(1.02) scaleX(0.98);
    }
  
    97%,
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }`;

const Bubble = styled('figure')`
  background: radial-gradient(circle at bottom, #81e8f6, #76deef 10%, #055194 80%, #062745 100%);
  border-radius: 100%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.21), 0 0px 0px rgba(0, 0, 0, 0.25);
  display: inline-block;
  height: 100%;
  position: relative;
  width: 100%;

  &::before {
    background: radial-gradient(circle at top, white, rgba(255, 255, 255, 0) 58%);
    border-radius: 100%;
    content: '';
    filter: blur(5px);
    height: 90%;
    left: 5%;
    position: absolute;
    top: 1%;
    width: 90%;
    z-index: 2;
    -webkit-filter: blur(5px);
  }

  &::after {
    border-radius: 100%;
    content: '';
    display: none;
    filter: blur(1px);
    height: 80%;
    left: 10%;
    position: absolute;
    top: 5%;
    transform: rotateZ(-30deg);
    width: 80%;
    z-index: 2;
    -webkit-filter: blur(1px);
    -webkit-transform: rotateZ(-30deg);
  }

  .shadow {
    background: radial-gradient(circle, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0) 50%);
    height: 100%;
    position: absolute;
    transform: rotateX(90deg) translateZ(-160px);
    width: 100%;
    z-index: 1;
    -webkit-transform: rotateX(90deg) translateZ(-160px);
  }

  .plain {
    background: black;

    &::before,
    &::after {
      display: none;
    }
  }

  &.bubble {
    /* background: radial-gradient(
      circle at 50% 55%,
      rgba(240, 245, 255, 0.9),
      rgba(240, 245, 255, 0.9) 40%,
      rgba(225, 238, 255, 0.8) 60%,
      rgba(43, 130, 255, 0.4)
    ); */

    background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.3));
    /* -webkit-animation: bubble-anim 2s ease-out infinite;
    animation: bubble-anim 2s ease-out infinite; */

    &:hover {
      /* animation: ${bubbleAnimation} 2s ease-out infinite; */
      /* cursor: crosshair; */
    }

    &::before {
      -webkit-filter: blur(0);
      filter: blur(0);
      height: 80%;
      width: 40%;
      background: radial-gradient(
        circle at 130% 130%,
        rgba(255, 255, 255, 0) 0,
        rgba(255, 255, 255, 0) 46%,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(255, 255, 255, 0.8) 58%,
        rgba(255, 255, 255, 0) 60%,
        rgba(255, 255, 255, 0) 100%
      );
      -webkit-transform: translateX(131%) translateY(58%) rotateZ(168deg) rotateX(10deg);
      transform: translateX(131%) translateY(58%) rotateZ(168deg) rotateX(10deg);
    }
    &::after {
      background: radial-gradient(
        circle at 50% 80%,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0) 74%,
        white 80%,
        white 84%,
        rgba(255, 255, 255, 0) 100%
      );
      display: block;
    }
  }
`;

const Stage = styled('section')`
  display: inline-block;
  height: 300px;
  margin: 20px;
  perspective-origin: 50% 50%;
  perspective: 1200px;
  transition: opacity 2s ease;
  width: 300px;
  opacity: 1;
  -moz-perspective-origin: 50% 50%;
  -moz-perspective: 1200px;
  -ms-perspective-origin: 50% 50%;
  -ms-perspective: 1200px;
  -o-perspective-origin: 50% 50%;
  -o-perspective: 1200px;
  -webkit-perspective-origin: 50% 50%;
  -webkit-perspective: 1200px;

  & .exp::before,
  & .exp::after {
    border-radius: 50%;
    content: '';
    /* left: 50%; */
    position: absolute;
    /* top: 50%; */
    z-index: -1;
  }
  & .exp::before {
    left: 0;
    border: solid 2.25rem #e2264d;
    box-sizing: border-box;
    height: 100%;
    /* margin: -2.25rem; */
    transform: scale(0);
    width: 100%;
  }
  & .exp::after {
    left: 50%;
    /* position: absolute; */
    /* padding: 10rem; */
    top: 50%;
    box-shadow: 0.32476rem -3rem 0 -0.1875rem #ff8080, -0.32476rem -2.625rem 0 -0.1875rem #ffed80,
      2.54798rem -1.61656rem 0 -0.1875rem #ffed80, 1.84982rem -1.89057rem 0 -0.1875rem #a4ff80, 2.85252rem 0.98418rem 0 -0.1875rem #a4ff80,
      2.63145rem 0.2675rem 0 -0.1875rem #80ffc8, 1.00905rem 2.84381rem 0 -0.1875rem #80ffc8, 1.43154rem 2.22414rem 0 -0.1875rem #80c8ff,
      -1.59425rem 2.562rem 0 -0.1875rem #80c8ff, -0.84635rem 2.50595rem 0 -0.1875rem #a480ff, -2.99705rem 0.35095rem 0 -0.1875rem #a480ff,
      -2.48692rem 0.90073rem 0 -0.1875rem #ff80ed, -2.14301rem -2.12438rem 0 -0.1875rem #ff80ed,
      -2.25479rem -1.38275rem 0 -0.1875rem #ff8080;
    margin: -0.1875rem;
    width: 0.375rem;
    height: 0.375rem;
  }

  &.exploted {
    opacity: 0;

    & .exp {
      color: #ff5297;
      will-change: font-size;
      animation: ${heartBeat} 3s cubic-bezier(0.17, 0.89, 0.32, 1.49);
    }
    & .exp::before,
    & .exp::after {
      animation: inherit;
      animation-timing-function: ease-out;
    }
    & .exp:before {
      will-change: transform, border-color, border-width;
      animation-name: ${mainExplosion};
    }
    & .exp:after {
      will-change: opacity, box-shadow;
      animation-name: ${particles};
    }
  }
`;

export const Styles = { Bubble, Stage };
