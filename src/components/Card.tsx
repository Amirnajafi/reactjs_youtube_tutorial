import React from "react";
import { useDrag, useDrop } from "react-dnd";

export const Card = ({ id, text, index, moveCard }) => {
  const ref = React.useRef(null);
  const style = {
    border: "1px dashed gray",
    padding: "0.5rem 1rem",
    marginBottom: ".5rem",
    backgroundColor: "white",
    cursor: "move",
  };

  const [{ handlerId }, drop] = useDrop({
    accept: "cards",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: any, monitor) {
      const dragIndex = item.index;
      const hoverIndex = index;
      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "cards",
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <div ref={ref} style={{ ...style, opacity }} data-id={handlerId}>
      {text}
    </div>
  );
};
