//set board
const setBoard = function (board, boardData, solutionData) {
  for (let row = 0; row < LAST_NUMBER; row++) {
    for (let col = 0; col < LAST_NUMBER; col++) {
      createEl("div", `${row}-${col}`, "tile", board);
      const tile = getElById(`${row}-${col}`);

      if (boardData[row][col] !== 0) {
        tile.innerText = boardData[row][col];
        addClass(tile, "tile-start");
      }

      if (row === 2 || row === 5) addClass(tile, "horizontal-line");

      if (col === 2 || col === 5) addClass(tile, "vertical-line");

      tile.addEventListener("click", function () {
        //compare with solution
        const [r, c] = getCoords(tile);
        if (solutionData[r][c] === +SELECTED_NUMBER.id) {
          updateTile(tile);

          //view
          updateTileColor(tile, "#5FFF0A ");
          setTimeout(() => updateTileColor(tile, "white"), 250);
        } else {
          ERRORS++;
          updateErrors("errors", ERRORS);

          //view
          updateTileColor(tile, "red");
          updateErrorColor("errors", "red");
          setTimeout(() => {
            updateTileColor(tile, "white");
            updateErrorColor("errors", "white");
          }, 250);
        }
      });
    }
  }
};
