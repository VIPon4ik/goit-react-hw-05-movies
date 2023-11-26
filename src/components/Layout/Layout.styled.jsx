import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { COLORS } from 'constants';

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: ${COLORS.black};
  transition: color 0.2s ease-in-out;

  &.active {
    color: ${COLORS.light_red};
  }

  &:hover,
  &:active {
    color: ${COLORS.light_red};
  }
`;

export const Header = styled.header`
  padding: 20px;
  display: flex;
  gap: 20px;
  min-width: 320px;
  background-color: ${COLORS.white};
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
  position: fixed;
  width: 100%;
  color: ${COLORS.black};
`;

export const ThemeButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 60px;
  transform: translate(0, -50%);
  display: flex;
  align-items: center;
`;
export const ThemeButton = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
  margin: 0;
  vertical-align: top;
  background: ${COLORS.light_red};
  border-radius: 30px;
  outline: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.2, 0.85, 0.32, 1.2);

  &::after {
    transition: all 0.3s cubic-bezier(0.2, 0.85, 0.32, 1.2);
    content: '';

    display: inline-block;
    position: absolute;
    left: 3px;
    top: 1.5px;

    width: 22px;
    height: 22px;
    background-color: ${COLORS.white};
    border-radius: 50%;

    transform: translateX(0);
  }

  &:checked::after {
    transform: translateX(calc(100% + 3px));
    background-color: ${COLORS.light_red};  
  }

  &:checked {
    background-color: ${COLORS.second_white};
  }
`;

export const Container = styled.div`
  max-width: 1240px;
  min-width: 320px;
  min-height: 100vh;
  padding: 90px 20px 20px 20px;
  margin: 0 auto;
  background-color: ${COLORS.second_white};
  color: ${COLORS.black};
`;
