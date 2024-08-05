import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";

import {
  StyledContainer,
  Main,
  StyledAppLayout,
} from "../styles/AppLayout.css";

const AppLayout = () => {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <StyledContainer>
          <Outlet />
        </StyledContainer>
      </Main>
    </StyledAppLayout>
  );
};

export default AppLayout;
