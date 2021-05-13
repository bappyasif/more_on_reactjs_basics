import Brick from "bricks.js";

export let initializeGrid = (grid) => {
  // let elem = Brick({
    return Brick({
    container: grid,
    packed: "packed",
    sizes: [
      { columns: 2, gutter: 11 },
      { mq: "602px", columns: 3, gutter: 11 },
      { mq: "803px", columns: 4, gutter: 11 },
      { mq: "1001px", columns: 5, gutter: 11 },
      { mq: "1111px", columns: 6, gutter: 11 },
    ],
  });
  // return elem;
};

export let layoutInitialGrid = (grid) => grid.resize(true).pack();
