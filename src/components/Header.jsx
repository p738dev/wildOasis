import React from "react";

import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../authentication/UserAvatar";

import { StyledHeader } from "../styles/Header.css";

const Header = () => {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
};

export default Header;
