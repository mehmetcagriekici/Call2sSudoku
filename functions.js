// get sudoku from api
const getSudoku = async function (link) {
  const result = await fetch(link);
  const data = await result.json();
  // .dif, .val, .sol
  return data.newboard.grids[0];
};

//build board
const boardData = async function (link) {
  const data = await getSudoku(link);
  const { value: board, solution, difficulty } = await data;
  return { board, solution, difficulty };
};

//get coords [row, col]
const getCoords = (tile) => tile.id.split("-").map((el) => parseInt(el));
