//get element by id
const getElById = (id) => document.getElementById(id);

//add class
const addClass = (element, className) => element.classList.add(className);

//remove class
const removeClass = (element, className) => element.classList.remove(className);

//create element with id and class
const createEl = function (element, id, classNanme, parent) {
  const el = document.createElement(element);
  el.id = id;
  addClass(el, classNanme);
  parent.appendChild(el);
};

//display dif
const displayDif = function (id, dif) {
  const header = getElById(id);
  header.innerText = dif;

  if (dif === "Easy") header.style.color = "yellow";
  if (dif === "Medium") header.style.color = "green";
  if (dif === "Hard") header.style.color = "black";
};

//on number select change background color
const changeBGColour = function (className, element) {
  // check if bg already changed, if so remove the bg color
  if (SELECTED_NUMBER !== null) SELECTED_NUMBER.classList.remove(className);

  SELECTED_NUMBER = element;
  addClass(SELECTED_NUMBER, className);
};

//on click update tile
const updateTile = function (element) {
  if (!SELECTED_NUMBER) return;
  if (element.innerText !== "") return;
  element.innerText = SELECTED_NUMBER.innerText;
};

//update errors
const updateErrors = function (id, count) {
  const errorText = getElById(id);
  errorText.innerText = `Mistakes: ${count}`;
};

//hide element
const hideEl = (id) => (document.getElementById(id).style.display = "none");

//show element
const showEl = (id, displayType) =>
  (document.getElementById(id).style.display = displayType);

//Orginize timer view for double zeros
const orgTimerView = (str) => (`0${str}`.length > 2 ? str : `0${str}`);

//highlight mistakes tiles
const updateTileColor = (tile, color) => (tile.style.backgroundColor = color);

//highlight mistakes errors
const updateErrorColor = (id, color) =>
  (document.getElementById(id).style.color = color);
