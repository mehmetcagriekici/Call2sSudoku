const updateTime = function () {
  const timerDisplay = getElById("timer");

  TIME_ELAPSED = Date.now() - TIME_START;

  //INITIAL VALUES
  SECONDS = Math.floor((TIME_ELAPSED / 1000) % 60);
  MINS = Math.floor((TIME_ELAPSED / 60000) % 60);
  HOURS = Math.floor((TIME_ELAPSED / 3600000) % 60);

  //MODIFIED VALUES
  HOURS = orgTimerView(HOURS);
  MINS = orgTimerView(MINS);
  SECONDS = orgTimerView(SECONDS);

  timerDisplay.textContent = `${HOURS}:${MINS}:${SECONDS}`;
};

//Timer
const timerView = function () {
  const btnPause = getElById("btn-pause");
  const btnStart = getElById("btn-start");
  const btnResume = getElById("btn-resume");
  const btnRestart = getElById("btn-restart");

  btnResume.addEventListener("click", function () {
    //show board
    showEl("sudoku", "flex");

    //timer
    if (BTN_CLICKED) {
      BTN_CLICKED = false;

      TIME_START = Date.now() - TIME_ELAPSED;
      INTERVAL_ID = setInterval(updateTime, 1000);
    }
  });

  btnRestart.addEventListener("click", function () {
    //reload
    window.location.reload();
  });

  btnPause.addEventListener("click", function () {
    //hide board
    hideEl("sudoku");

    //timer
    if (!BTN_CLICKED) {
      BTN_CLICKED = true;

      TIME_ELAPSED = Date.now() - TIME_START;
      clearInterval(INTERVAL_ID);
    }
  });

  btnStart.addEventListener("click", function () {
    //show board
    showEl("sudoku", "flex");
    //hide start btn
    hideEl("btn-start");
    //show resume, restart btn
    showEl("btn-resume", "block");
    showEl("btn-restart", "block");

    //timer
    BTN_CLICKED = false;

    TIME_START = Date.now() - TIME_ELAPSED;
    INTERVAL_ID = setInterval(updateTime, 1000);
  });
};
