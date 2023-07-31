import React, { useCallback, useState } from "react";
import { Card } from "../components/Card";
import update from "immutability-helper";

const ReactDnDList = () => {
  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setCards((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1], // remove the dragged item
          [hoverIndex, 0, prevCards[dragIndex]], // insert the dragged item at the hover index
        ],
      })
    );
  }, []);
  const [cards, setCards] = useState([
    {
      id: 1,
      text: "Write a cool JS library",
    },
    {
      id: 2,
      text: "Make it generic enough",
    },
    {
      id: 3,
      text: "Write README",
    },
    {
      id: 4,
      text: "Create some examples",
    },
    {
      id: 5,
      text: "Spam in Twitter and IRC to promote it (note that this element is taller than the others)",
    },
    {
      id: 6,
      text: "???",
    },
    {
      id: 7,
      text: "PROFIT",
    },
  ]);
  return (
    <div>
      {cards.map((card, i) => {
        return (
          <Card id={card.id} text={card.text} index={i} moveCard={moveCard} />
        );
      })}
    </div>
  );
};

export default ReactDnDList;
