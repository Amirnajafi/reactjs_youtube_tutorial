import React, { useMemo } from "react";
import { useDrop } from "react-dnd";

const DropBox = (props: any) => {
  const [foods, setFoods] = React.useState([]);

  const [{}, drop] = useDrop(() => ({
    accept: "foodItem",
    drop: (item: any, monitor) => {
      console.log("item drop", item);
      setFoods((prevFoods) => [...prevFoods, item]);
    },
  }));

  const totalPrice = useMemo(() => {
    return foods.reduce((acc: any, food: any) => {
      return acc + food.price;
    }, 0);
  }, [foods]);
  return (
    <div
      style={{ width: 500, height: 500, border: "1px solid black" }}
      ref={drop}
    >
      <h1>DropBox</h1>
      <h3>total price : ${totalPrice}</h3>
      <ul>
        {foods.map((food: any) => {
          return (
            <li>
              {food.emoji} - {food.title} : ${food.price}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DropBox;
