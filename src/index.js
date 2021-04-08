import { bindActionCreators, createStore } from "redux";

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

const reducer = (state = [], action) => {
  // console.log(action.type);

  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: Date.now() }];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const onsubmit = (e) => {
  // console.log("submit");

  e.preventDefault();

  const toDo = input.value;

  input.value = "";

  store.dispatch({ type: ADD_TODO, text: toDo });
};

form.addEventListener("submit", onsubmit);
