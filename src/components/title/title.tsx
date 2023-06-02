import React, { memo } from "react";
import styles from './title.module.scss'
import ITitle from "./title.types";
const  Title = ({ title }: ITitle) => {
  console.log("my title render")
  return (
    <span>
      {title}
    </span> 
  );
};
export default memo(Title);
