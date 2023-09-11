//app
let SELECTED_NUMBER = null;
let SELECTED_TILE = null;
let ERRORS = 0;
const LAST_NUMBER = 9;

//api
const API_LINK = "https://sudoku-api.vercel.app/api/dosuku";

//timer
let TIME_START = 0;
let TIME_CURRENT = 0;
let TIME_ELAPSED = 0;
let BTN_CLICKED = true;
let INTERVAL_ID;
let HOURS = 0;
let MINS = 0;
let SECONDS = 0;
