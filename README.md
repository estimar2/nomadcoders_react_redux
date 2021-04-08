# Vanilla Redux

Learning Vanilla-Redux and React-Redux </br>
<https://nomadcoders.co/redux-for-beginners>

## Study

<ul>
    <li>
        <h3>redux</h3>
           : data를 (관리하는데) 도와주는 역할을 하기 위해 만들어짐
    </li>
    <li>
        <h3>store</h3>
            : data를 넣는 곳 ( ≒ 너의 state)
        <ul>
            <li> state = 너의 application 에서 바뀌는 data</li>
            <li> store 를 만들면 reducer 를 만들어달라고 함 </li>
            <li> reducer 은 => data를 modify 하는 함수 </li>
        </ul>
    </li>
    <li>
        <h3>reducer</h3>
            : data를 바꾸고 modify 하는 걸 책임지는 함수
        <ul>
            <li> return 하는 것이 중요 </li>
            <li> return 하는 것은 무엇이든지 어플리케이션의 state 가 되는 것 </li>
            <li> current state 와 action 이 함께 불려짐 </li>
        </ul>
    </li>
    <li>
        <h3>action</h3>
            : redux 에서 function을 부를 때 쓰는 두번째 Parameters, 혹은 Argument
    </li>
    <li>
        <h3>reducer 에 actions을 보내는 방법</h3>
            : store를 이용하는 방법
        <ul>
            <li> store.dispatch() </li>
            <li>
                dispatch가 reducer을 불러서 current state와 actions을 더함
                <ul>
                    <li> ( action 은 object 여야함, string 이 될 수 없음 ) </li>
                    <li> actions 은 type 을 필수로 가져야함 </li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <h3>subscribe</h3>
            : store안에 있는 변화들을 알 수 있게 해줌
    </li>
     <li>
        <h3>❌ NEVER MUTATE STATE * MUTATE STATE는 절대 사용하지 말것* ❌</h3>
        <ul>
            <li> => mutate 하는 게 아니라 새로운 objects를 리턴해야 함. </li>
            <li>
                새로운 state를 리턴하는 것
                <ul>
                    <li> ( 상태를 수정하는 것이 아니라 새로운 것을 return 하는 것 ) </li>
                    <li> ✨ 새로운 state를 create하고 그 새로운 state를 return ✨ </li>
                </ul>
            </li>
        </ul>
    </li>
</ul>

## list

|  #0  |  INTRODUCTION   |     |
| :--: | :-------------: | :-: |
| #0.1 | Read this First |  ✔  |
| #0.2 |  Introduction   |  ✔  |
| #0.3 |  Requirements   |  ✔  |
| #0.4 |  Project Setup  |  ✔  |

|  #1  | PURE REDUX : COUNTER |     |  #2  | PURE REDUX : TO DO LIST |     |
| :--: | :------------------: | :-: | :--: | :---------------------: | :-: |
| #1.0 |   Vanilla Counter    |  ✔  | #2.0 |      Vanilla ToDo       |  ✔  |
| #1.1 |  Store and Reducer   |  ✔  | #2.1 |     State Mutation      |  ✔  |
| #1.2 |       Actions        |  ✔  | #2.2 |      Delete To Do       |  ✔  |
| #1.3 |    Subscriptions     |  ✔  | #2.3 |  Delete To Do Part Two  |  ✔  |
| #1.4 |    Recap Refactor    |  ✔  | #2.4 |       Conclusions       |     |

|  #3  |     REACT REDUX      |     |  #4  | REDUX TOOLKIT (BOUNS) |     |
| :--: | :------------------: | :-: | :--: | :-------------------: | :-: |
| #3.0 |        Setup         |     | #4.0 |     Redux Toolkit     |     |
| #3.1 | Connection the Store |     | #4.1 |     createAction      |     |
| #3.2 |   mapStateToProps    |     | #4.2 |     createReducer     |     |
| #3.3 |  mapDespatchToProps  |     | #4.3 |    configureStore     |     |
| #3.4 |    Deleting To Do    |     | #4.4 |      createSlice      |     |
| #3.5 |    Detail Screen     |     | #4.5 |      Conclusions      |     |
| #3.6 |     Conclusions      |     |
