import { createStore } from "redux";

// redux = data를 (관리하는데) 도와주는 역할을 하기 위해 만들어짐

// sotre : data를 넣는 곳 ( ≒ 너의 state)
//         state = 너의 application 에서 바뀌는 data
//         store 를 만들면 reducer 를 만들어달라고 함
//         reducer 은 => data를 modify 하는 함수

// reducer = data를 바꾸고 moidfy 하는 걸 책임지는 함수

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("span");

const countModifier = (count = 0) => {
  count++;
  count--;

  return count;
};

const countStore = createStore(countModifier);

console.log(countStore.getState());
