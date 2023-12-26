import React, { useReducer } from 'react';

//Switch를 활용해서 현재 상태와 액션을 받아서 새로운 상태를
//전달할 예정
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };

    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };

    default:
      return state;
  }
};

const Counter = () => {
  //useReducer를 사용해서 상태와 디스패치 함수를 얻을 예정
  //counterReducer : 현재 상태와 액션값을 받아서 다음 상태를 결정하는데 사용
  // 위 counterReducer 함수에서는 switch 문을 활용해서 값 조정을 함
  //useReducer 상태와 디스패치 함수를 생성
  //첫 번째 매개변수로 counterReducer 받고
  //두 번째 매개변수로 { count: 0 }을 줘서 초기 값을 0으로 설정
  //dispatch : 액션을 발생시키는데 사용되는 함수
  //위에서 switch문 안에 있는 case 가 선택 되면 선택된 상태를 return해서
  //업데이트를  처리
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <>
      <p>count : {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>증가</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>감소</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>초기화</button>
    </>
  );
};
export default Counter;
