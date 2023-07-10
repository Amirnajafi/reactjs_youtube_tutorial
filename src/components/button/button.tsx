import React, { memo } from "react";
import IButton from "./button.types";
import styles from "./button.module.scss";
import { StyledButton } from "./styledButton";
const Button = ({ onClick, children, title, isLoading, color }: IButton) => {
  console.log("my button render");
  return (
    <StyledButton color={color} disabled={isLoading} onClick={onClick}>
      <>
        {isLoading ? (
          <span>"loading ...."</span>
        ) : (
          <span>{children ? children : <span>{title}</span>}</span>
        )}
      </>
    </StyledButton>
  );
};
export default memo(Button);
