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
  &.dark-mode {
    align-items: center;
    background-color: transparent;
    border-radius: 5px;
    border: 0;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-flex;
    font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    --theme-ui-colors-text: var(--theme-ui-colors-text, hsl(0, 0%, 10%));
    --theme-ui-colors-background: var(--theme-ui-colors-background, hsl(0, 0%, 100%));
    --theme-ui-colors-primary: var(--theme-ui-colors-primary, #f8e71c);
    --theme-ui-colors-secondary: var(--theme-ui-colors-secondary, #ff1e88);
    font-kerning: normal;
    font: inherit;
    height: 40px;
    justify-content: center;
    background: transparent;
    margin: 0;
    opacity: 0.6;
    overflow: visible;
    padding: 0;
    position: relative;
    text-transform: none;
    transform: scale(0.8);
    transition: opacity 0.3s ease;
    width: 40px;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    -webkit-font-smoothing: antialiased;

    &:hover {
      opacity: 1;
    }

    &:focus {
      opacity: 1;
      outline: none;
    }

    .item-1 {
      border-radius: 50%;
      box-sizing: border-box;
      cursor: pointer;
      font-kerning: normal;
      font: inherit;
      height: 24px;
      margin: 0;
      padding: 0;
      position: relative;
      text-transform: none;
      width: 24px;
      -webkit-font-smoothing: antialiased;
    }

    .moon_item-1 {
      background-color: var(--theme-ui-colors-text, hsl(0, 0%, 10%));
      font-feature-settings: 'kern', 'liga', 'clig', 'calt';
      --theme-ui-colors-text: var(--theme-ui-colors-text, hsl(0, 0%, 10%));
      --theme-ui-colors-background: var(--theme-ui-colors-background, hsl(0, 0%, 100%));
      --theme-ui-colors-primary: var(--theme-ui-colors-primary, #f8e71c);
      --theme-ui-colors-secondary: var(--theme-ui-colors-secondary, #ff1e88);
      overflow: hidden;
      transform: scale(1);
      transition: all 0.45s ease;

      &::before {
        background-color: var(--theme-ui-colors-background, hsl(0, 0%, 100%));
        border-color: var(--theme-ui-colors-background, hsl(0, 0%, 100%));
        border-radius: 50%;
        border: 2px solid;
        content: '';
        height: 24px;
        opacity: 1;
        position: absolute;
        right: -9px;
        top: -9px;
        transform: translate(0, 0);
        transition: 0.45s ease;
        width: 24px;
      }

      &::after {
        border-radius: 50%;
        box-shadow: 0 -23px 0 hsl(0, 0%, 10%), 0 23px 0 hsl(0, 0%, 10%), 23px 0 0 hsl(0, 0%, 10%), -23px 0 0 hsl(0, 0%, 10%),
          15px 15px 0 hsl(0, 0%, 10%), -15px 15px 0 hsl(0, 0%, 10%), 15px -15px 0 hsl(0, 0%, 10%), -15px -15px 0 hsl(0, 0%, 10%);
        content: '';
        height: 8px;
        left: 50%;
        margin: -4px 0 0 -4px;
        position: absolute;
        top: 50%;
        transform: scale(0);
        transition: all 0.35s ease;
        width: 8px;
      }
    }

    .sun_item-1 {
      background-color: var(--theme-ui-colors-text, hsl(0, 0%, 100%));
      font-feature-settings: 'kern', 'liga', 'clig', 'calt';
      --theme-ui-colors-text: var(--theme-ui-colors-text, hsl(0, 0%, 100%));
      --theme-ui-colors-background: var(--theme-ui-colors-background, hsl(0, 0%, 5%));
      --theme-ui-colors-primary: var(--theme-ui-colors-primary, #f8e71c);
      --theme-ui-colors-secondary: var(--theme-ui-colors-secondary, #ff76a2);
      overflow: visible;
      transform: scale(0.55);
      transition: all 0.45s ease 0s;

      &::before {
        background-color: var(--theme-ui-colors-background, hsl(0, 0%, 5%));
        border-image: initial;
        border-radius: 50%;
        border-style: solid;
        border-width: 2px;
        content: '';
        height: 24px;
        opacity: 0;
        position: absolute;
        right: -9px;
        top: -9px;
        transform: translate(14px, -14px);
        transition: transform 0.45s ease 0s;
        width: 24px;
      }

      &::after {
        border-radius: 50%;
        box-shadow: rgb(255, 255, 255) 0px -23px 0px, rgb(255, 255, 255) 0px 23px 0px, rgb(255, 255, 255) 23px 0px 0px,
          rgb(255, 255, 255) -23px 0px 0px, rgb(255, 255, 255) 15px 15px 0px, rgb(255, 255, 255) -15px 15px 0px,
          rgb(255, 255, 255) 15px -15px 0px, rgb(255, 255, 255) -15px -15px 0px;
        content: '';
        height: 8px;
        left: 50%;
        margin: -4px 0px 0px -4px;
        position: absolute;
        top: 50%;
        transform: scale(1);
        transition: all 0.35s ease 0s;
        width: 8px;
      }
    }

    .item-2 {
      border-radius: 50%;
      box-sizing: border-box;
      cursor: pointer;
      font-kerning: normal;
      font: inherit;
      height: 24px;
      margin: 0;
      padding: 0;
      position: absolute;
      right: -1px;
      text-transform: none;
      top: -8px;
      width: 24px;
      -webkit-font-smoothing: antialiased;
    }

    .moon_item-2 {
      background-color: var(--theme-ui-colors-background, hsl(0, 0%, 100%));
      border: 0;
      font-feature-settings: 'kern', 'liga', 'clig', 'calt';
      --theme-ui-colors-text: var(--theme-ui-colors-text, hsl(0, 0%, 10%));
      --theme-ui-colors-background: var(--theme-ui-colors-background, hsl(0, 0%, 100%));
      --theme-ui-colors-primary: var(--theme-ui-colors-primary, #f8e71c);
      --theme-ui-colors-secondary: var(--theme-ui-colors-secondary, #ff1e88);
      opacity: 1;
      transform: translate(0, 0);
      transition: transform 0.45s ease;
    }

    .sun_item-2 {
      background-color: var(--theme-ui-colors-background, hsl(0, 0%, 5%));
      border-color: initial;
      border-image: initial;
      border-style: initial;
      border-width: 0px;
      font-feature-settings: 'kern', 'liga', 'clig', 'calt';
      --theme-ui-colors-text: var(--theme-ui-colors-text, hsl(0, 0%, 100%));
      --theme-ui-colors-background: var(--theme-ui-colors-background, hsl(0, 0%, 5%));
      --theme-ui-colors-primary: var(--theme-ui-colors-primary, #f8e71c);
      --theme-ui-colors-secondary: var(--theme-ui-colors-secondary, #ff76a2);
      opacity: 0;
      transform: translate(14px, -14px);
      transition: transform 0.45s ease 0s;
    }
  }
`;

const Text = styled('span')`
  font-size: large;
  line-height: normal;
  text-transform: capitalize;
`;

export const Styles = { Button, Icon, Text };
