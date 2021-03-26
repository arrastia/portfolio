import styled, { keyframes } from 'styled-components';

const spin = keyframes`{
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}`;

const Icon = styled('span')`
  align-items: center;
  display: flex;
  font-size: x-large;
  svg,
  img {
    max-width: 2rem;
    max-height: 2rem;
  }
`;

const Button = styled('button')`
  align-items: center;
  background: linear-gradient(to right top, var(--first-color), var(--second-color));
  border-radius: 5px;
  border: var(--first-color);
  color: var(--text);
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-size: 14px;
  justify-content: space-around;
  margin-right: 0.25em;
  margin: 0;
  opacity: ${({ disabled }) => (disabled ? 0.4 : 0.85)};
  overflow: visible;
  padding: 0.25rem;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.2s, box-shadow 0.2s;
  user-select: none;
  -moz-border-radius: 5px;
  -moz-transition: background-color 0.2s, box-shadow 0.2s;
  -moz-user-select: none;
  -o-transition: background-color 0.2s, box-shadow 0.2s;
  -webkit-border-radius: 5px;
  -webkit-transition: background-color 0.2s, box-shadow 0.2s;
  -webkit-user-select: none;
  &:hover {
    opacity: 1;
    ${Icon} {
      transform: scale(1.15);
      transition: transform 0.1s ease;
    }
  }
  &:focus {
    box-shadow: 0 0 0 0.2em var(--twin-color);
    outline-offset: 0;
    outline: 0 none;
    -moz-box-shadow: 0 0 0 0.2em var(--twin-color);
    -webkit-box-shadow: 0 0 0 0.2em var(--twin-color);
  }
  &:active {
    background-color: var(--twin-color-dark);
    border-color: var(--twin-color-dark);
    color: var(--text);
  }
  > span {
    padding: 0.35rem;
  }
  &.primary {
    background: var(--primary-color);
  }
  &.secondary {
    background: var(--pastel-color);
  }
  &.transparent {
    background: transparent;
  }
  &.loading {
    ${Icon} {
      animation: ${spin} infinite 3s linear;
    }
  }
`;

const Text = styled('span')`
  font-size: large;
  line-height: normal;
  text-transform: capitalize;
`;

export const Styles = { Button, Icon, Text };
