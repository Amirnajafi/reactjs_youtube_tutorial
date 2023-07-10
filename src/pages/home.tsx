import { useCallback, useContext, useEffect, useRef, useState } from "react";
import Tabs from "../components/tabs";
import WithAuth from "../helper/withAuth";
import str from "../helper/localizations";
import { Context } from "../contexts/mainContext";
import { Button } from "../components";
import {
  BoredredButton,
  StyledButton,
  SubmitButton,
} from "../components/button/styledButton";
const Home = (props: any) => {
  const { settings } = useContext(Context);
  const tabs = useRef<any>(null);
  const handleChangeChildTab = () => {
    tabs.current.changeTab(2);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <span>{str.formatString(str.test, { count: 23 })}</span>

      <StyledButton onClick={handleChangeChildTab}>
        <span>change tab to blue</span>
      </StyledButton>

      <BoredredButton color={"red"} onClick={handleChangeChildTab}>
        <span className="active">change tab to red</span>
      </BoredredButton>

      <SubmitButton color={"red"} onClick={handleChangeChildTab}>
        <span>change tab to red</span>
      </SubmitButton>

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
