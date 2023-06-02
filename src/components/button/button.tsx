import React, { memo } from "react";
import IButton from "./button.types";
import styles from './button.module.scss'
const Button = ({ onClick, children, title, isLoading }: IButton) => {
  console.log("my button render")
  return (
    <button className={styles.button} disabled={isLoading} onClick={onClick}>
      <>
        {isLoading ? (
          <span>"loading ...."</span>
        ) : (
          <span>{children ? children : <span>{title}</span>}</span>
        )}
      </>
    </button>
  );
};
export default memo(Button);
