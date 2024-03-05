import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa"; // Import the 'FaBars' component from the 'react-icons/fa' package

export const Nav = styled.nav`
  background: #4f4f4f; /* Ciemniejszy szary dla paska nawigacji */
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;

export const NavLink = styled(Link)`
  color: #e0e0e0; /* Jasny szary dla tekstu */
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #ffffff; /* Biały dla aktywnego linku */
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #e0e0e0; /* Jasny szary dla ikony menu */
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #bdbdbd; /* Średni szary dla tła przycisku */
  padding: 10px 22px;
  color: #333333; /* Ciemniejszy szary dla tekstu przycisku */
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #e0e0e0; /* Jaśniejszy szary dla tła przycisku przy hover */
    color: #4f4f4f; /* Ciemniejszy szary dla tekstu przy hover */
  }
`;
