//set game
const setGame = async function () {
  //data from api
  const { board, solution, difficulty } = await boardData(API_LINK);
  const copyBoard = [...board];
  const copySolution = [...solution];

  //display difficulty
  displayDif("difficulty", difficulty);

  const numbersContainer = getElById("numbers-container");
  const sudoku = getElById("sudoku");

  //numbers
  for (let i = 1; i <= LAST_NUMBER; i++) {
    createEl("div", i, "number", numbersContainer);
    const num = getElById(i);
    num.innerText = i;
    num.addEventListener("click", () => changeBGColour("number-selected", num));
  }

  //board
  setBoard(sudoku, copyBoard, copySolution);
};

window.onload = async function () {
  setGame();
  hideEl("sudoku");
  hideEl("btn-resume");
  hideEl("btn-restart");
  timerView();
};
