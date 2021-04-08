import { createStore } from "redux";

// redux : data를 (관리하는데) 도와주는 역할을 하기 위해 만들어짐

// sotre : data를 넣는 곳 ( ≒ 너의 state)
//         state = 너의 application 에서 바뀌는 data
//         store 를 만들면 reducer 를 만들어달라고 함
//         reducer 은 => data를 modify 하는 함수

// reducer : data를 바꾸고 moidfy 하는 걸 책임지는 함수
//           return 하는 것이 중요
//           return 하는 것은 무엇이든지 어플리케이션의 state 가 되는 것
//           current state 와 action 이 함께 불려짐

// action : redux에서 function 을 부룰때 쓰는 두번째 VREyeParameters, 혹은 argument

// reducer 에 action을 보내는 방법 : store를 이용하는 방법
//                                   store.dispatch()
//                                   dispatch가 reducer을 불러서 current state와 actions을 더함
//                                                                             ( action 은 object 여야함, string 이 될 수 없음 )
//                                                                               actions 은 type 을 필수로 가져야함

// subscribe : sotre안에 있는 변화들을 알 수 있게 해줌

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("span");

number.innerText = 0;

const countModifier = (count = 0, action) => {
  // console.log(count, action);

  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: "ADD" });
};

const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" });
};

// add.addEventListener("click", () => countStore.dispatch({ type: "ADD" }));
// minus.addEventListener("click", () => countStore.dispatch({ type: "MINUS" }));

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
