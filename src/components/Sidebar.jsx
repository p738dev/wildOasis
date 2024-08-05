import Logo from "./Logo";

import { StyledSidebar } from "../styles/Sidebar.css";
import MainNav from "./MainNav";

const Sidebar = () => {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
};

export default Sidebar;
