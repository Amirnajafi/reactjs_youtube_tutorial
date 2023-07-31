import React from "react";
import DragBox from "../components/DragBox";
import DropBox from "../components/DropBox";

const ReactDnD = () => {
  const [foods, setFoods] = React.useState({
    "1": { title: "Pizza", emoji: "🍕", price: 50 },
    "2": { title: "Burger", emoji: "🍔", price: 30 },
    "3": { title: "Fries", emoji: "🍟", price: 10 },
    "4": { title: "Donuts", emoji: "🍩", price: 5 },
    "5": { title: "Ice Cream", emoji: "🍦", price: 2 },
    "6": { title: "Cake", emoji: "🍰", price: 5 },
  });
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <DropBox />
        <ul>
          <h1>Drag box</h1>
          {Object.keys(foods).map((key) => {
            const item = foods[key];
            return <DragBox item={item} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ReactDnD;
