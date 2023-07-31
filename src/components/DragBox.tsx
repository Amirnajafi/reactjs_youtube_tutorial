import { useDrag } from "react-dnd";

const DragBox = (props: any) => {
  const { item } = props;
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "foodItem",
    item: props.item,
    collect(monitor) {
      return {
        isDragging: !!monitor.isDragging(),
      };
    },
  }));
  if (isDragging) {
    return null;
  }
  return (
    <div
      style={{ width: "500px", display: "flex", border: "1px solid black" }}
      ref={drag}
    >
      {item.emoji} - {item.title} : ${item.price}
    </div>
  );
};

export default DragBox;
