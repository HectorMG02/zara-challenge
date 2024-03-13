import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Text from '../Text/Text';
import { IconButton } from '../IconButton/IconButton';

const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-decoration: none;
`;

const Thumbnail = styled.img`
  height: 19rem;
  object-fit: cover;
`;

const Divider = styled.hr`
  height: 0.5rem;
  margin: var(--spacing-none);
  border: var(--spacing-none);
  background-color: var(--colors-marvel-red);
`;

const AnimatedContainer = styled.div`
  height: 0;
  transition: height 400ms ease-in-out;
  background-color: var(--colors-marvel-red);

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const CharacterName = styled(Text)`
  color: var(--colors-white);
  text-transform: uppercase;
  z-index: 1;
`;

const StyledIconButton = styled(IconButton)`
  margin-right: -8px;
  z-index: 1;

  & svg path {
    transition: fill 400ms ease-in-out;
  }
`;

const CharacterInfo = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-12);
  flex: 1;
  position: relative;
  background-color: var(--colors-black);
  cursor: default;

  box-sizing: border-box;
  padding: var(--spacing-16) var(--spacing-16) var(--spacing-24) var(--spacing-16);

  &:hover ${AnimatedContainer} {
    height: 100%;
  }
  &:hover ${StyledIconButton} svg path {
    fill: var(--colors-white);
  }

  &:after {
    content: '';
    position: absolute;
    z-index: 1;
    background-color: var(--colors-white);

    width: 1.2rem;
    height: 1.2rem;
    right: -0.6rem;
    bottom: -0.6rem;
    transform: rotate(45deg);
  }
`;

export const S = {
  StyledLi,
  StyledLink,
  Thumbnail,
  Divider,
  AnimatedContainer,
  CharacterName,
  StyledIconButton,
  CharacterInfo,
}