import React, { useCallback, useState } from "react";
import WithAuth from "../helper/withAuth";
import { Context } from "../contexts/mainContext";
import Title from "../components/title/title";
import { Button } from "../components";
const Home = (props:any) => {
  const [counter, setCounter] = useState(0)
  const fireAlert = useCallback(() => {
    alert(`hey ${counter}`)
  } , [counter])
  const handleIncreaseCounter = () =>{
    setCounter(counter+1)
  }
  return (
    <div style={{display : "flex" , flexDirection : "column" , gap : "10px"}}>
      <h2>Home</h2>
      <Title title="home page" />
      <Button onClick={fireAlert} title="Fire alert" />
      <button onClick={handleIncreaseCounter}>increase {counter}</button> 
    </div>
  );
};

export default WithAuth(Home);

