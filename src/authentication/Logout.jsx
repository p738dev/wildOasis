import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "./hooks/useLogout";
import SpinnerMini from "../styles/SpinnerMini.css";
import { ButtonIcon } from "../styles/ButtonIcon.css";

const Logout = () => {
  const { logout, isLoading } = useLogout();

  return (
    <ButtonIcon
      onClick={logout}
      disabled={isLoading}
    >
      {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
};

export default Logout;
