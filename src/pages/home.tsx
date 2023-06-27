import { useCallback, useEffect, useRef, useState } from "react";
import Tabs from "../components/tabs";
import WithAuth from "../helper/withAuth";
const Home = (props:any) => {
  const tabs  = useRef<any>(null)

  const handleChangeChildTab  = () =>{
    tabs.current.changeTab(2)
  }
  return (
    <div style={{display : "flex" , flexDirection : "column" , gap : "10px"}}>

      <button onClick={handleChangeChildTab}>
        change tab to second
      </button>
      <Tabs ref={tabs}>
        <div title="Tab1">
          <h2>Tab1</h2>
        </div>
        <div title="Tab2">
          <h2>Tab2</h2>
        </div>
        <div title="Tab3">
          <h2>Tab3</h2>
        </div>
                
      </Tabs>
      
    </div>
  );
};

export default WithAuth(Home);

