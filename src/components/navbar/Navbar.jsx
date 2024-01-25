/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { DiCssdeck } from "react-icons/di";
import {
  ButtonContainer,
  GitHubButton,
  MobileIcon,
  Nav,
  NavItems,
  NavLink,
  NavLogo,
  NavbarContainer,
  Span,
} from "./navbarcompnent";
import { Bio } from "../../data/constatnts";
import { useTheme } from "styled-components";

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20;",
              cursor: "pointer",
            }}
          >
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon></MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            Github Profile
          </GitHubButton>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
};
