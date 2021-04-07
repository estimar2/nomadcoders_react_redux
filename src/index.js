import { createStore } from "redux";

// redux : data를 (관리하는데) 도와주는 역할을 하기 위해 만들어짐

// sotre : data를 넣는 곳 ( ≒ 너의 state)
//         state = 너의 application 에서 바뀌는 data
//         store 를 만들면 reducer 를 만들어달라고 함
//         reducer 은 => data를 modify 하는 함수

// reducer : data를 바꾸고 moidfy 하는 걸 책임지는 함수
//           return 하는 것이 중요

// action : redux에서 function 을 부룰때 쓰는 두번째 VREyeParameters, 혹은 argument

// reducer 에 action을 보내는 방법 : store를 이용하는 방법
//                                   store.dispatch()

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("span");

const countModifier = (count = 0, action) => {
  if (action.type === "ADD"){
    return count + 1;
  } else if(action.type === "MINUS"){
    return count - 1;
  } else {
    return count;
  }

};

const countStore = createStore(countModifier);

countStore.dispatch({type : "ADD"});
countStore.dispatch({type : "ADD"});
countStore.dispatch({type : "ADD"});
countStore.dispatch({type : "ADD"});
countStore.dispatch({type : "ADD"});
countStore.dispatch({type : "ADD"});
countStore.dispatch({type : "MINUS"})

console.log(countStore.getState())
