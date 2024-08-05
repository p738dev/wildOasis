import { useNavigate } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi";
import Logout from "../authentication/Logout";

import { ButtonIcon } from "../styles/ButtonIcon.css";
import { StyledHeaderMenu } from "../styles/HeaderMenu.css";

const HeaderMenu = () => {
  const navigate = useNavigate();

  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
};

export default HeaderMenu;
