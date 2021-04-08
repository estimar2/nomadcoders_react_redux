import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

// ❌ NEVER MUTATE STATE * MUTATE STATE는 절대 사용하지 말것* ❌
//         => mutate 하는 게 아니라 새로운 objects를 리턴해야 함.
//           새로운 state를 리턴하는 것
//          ( 상태를 수정하는 것이 아니라 새로운 것을 return 하는 것 )
//          ✨ 새로운 state를 create하고 그 새로운 state를 return ✨

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

const deleteToDo = (id) => {
  return { type: DELETE_TODO, id };
};

const reducer = (state = [], action) => {
  // console.log(action.type);

  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE_TODO:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

// store.subscribe(() => console.log(store.getState()));

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = (e) => {
  // console.log(e.target.parentNode.id);

  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
};

const paintToDos = () => {
  const toDos = store.getState();

  ul.innerHTML = "";

  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");

    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteToDo);

    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDos);

const onsubmit = (e) => {
  // console.log("submit");

  e.preventDefault();

  const toDo = input.value;

  input.value = "";

  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onsubmit);
