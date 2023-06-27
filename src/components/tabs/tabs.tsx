import React, { forwardRef, memo , useImperativeHandle } from "react";
import styles from './tabs.module.scss'
import ITabs from "./tabs.types";
const  Tabs = forwardRef(function Tabs(props : ITabs, ref : any) {
  const { children } = props;
  const [index , setIndex] = React.useState(0)
  useImperativeHandle(ref, () => {
    return {
      changeTab  : (index : number) =>{
        setIndex(index)
      }
    }
  } , [])

  return (
    <div>
      <div style={{
        display : 'flex',
        gap : '10px'
      
      }}>
        {children.map((child, i) => {
          return (
            <div className={styles.title} onClick={() => setIndex(i)}>
              {child.props.title}
            </div>
          )
        })}
      </div>
      {children.map((child, i) => {
        return (
          <div style={{
            display : index === i ? 'block' : 'none'
          }}>
            {child}
          </div>
        )
      })}
    </div> 
  );
});
export default memo(Tabs);
