import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

// NEVER MUTATE STATE * MUTATE STATE는 절대 사용하지 말것*

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  // console.log(action.type);

  switch (action.type) {
    case ADD_TODO:
      return [];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

const createToDo = () => {
  console.log("create To do list");
};

const onsubmit = (e) => {
  // console.log("submit");

  e.preventDefault();

  const toDo = input.value;

  input.value = "";

  store.dispatch({ type: ADD_TODO, text: toDo });
};

form.addEventListener("click", onsubmit);
