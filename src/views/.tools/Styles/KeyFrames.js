import { keyframes } from 'styled-components';

const path = keyframes`{
    from {
       transform: rotateZ(0) translateX(53px) rotateZ(0) rotateY(66deg);
     }
     to {
       transform: rotateZ(360deg) translateX(53px) rotateZ(-360deg)
         rotateY(66deg);
     }
 }`;

const spin = keyframes`{
   from {
     transform: rotate(0deg);
   }
   to {
     transform: rotate(360deg);
   }
 }`;

const square = keyframes`{
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-700px) rotate(600deg);
  }
}`;

export { path, spin, square };
