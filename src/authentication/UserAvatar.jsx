import React from "react";
import { StyledAvatarImage, StyledUserAvatar } from "../styles/UserAvatar.css";
import { useUser } from "./hooks/useUser";

const UserAvatar = () => {
  const { user } = useUser();

  const { fullName, avatar } = user.user_metadata;

  return (
    <StyledUserAvatar>
      <StyledAvatarImage
        src={avatar || "default-user.jpg"}
        alt={`Zdjęcie zalogowanego użytkownika ${fullName}`}
      />
      <span>{fullName}</span>
    </StyledUserAvatar>
  );
};

export default UserAvatar;
