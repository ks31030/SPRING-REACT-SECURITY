//ReducerCount.js
//상태 관리를 위한 Hook 중 하나로, 복잡한 상태 로직을
//다룰 때 유용

// 불필요하게 초기 상태값을 재 생성할 경우
//useReducer (현재상태, dispatch(=상태를 다른 값으로 업데이트하고 재실행시키는 함수)
/// = 상태변경하기위한함수, {초기값설정})

// 객체나 배열 타입의 상태를 관리할 때

// usestate 와 useReducer는 비슷한 hook이기에
// usestate = null
//코드나 상황에 맞게 사용을 해주면 됨

//ContextExamOne.js
//부모 컴포넌트에서 createContext로 생성한
//Context객체를 자식 컴포넌트에서 쉽게 사용할
//수 있도록 만들어진 Hook
//useContext를 사용하면 데이터를 전달하기 위해
//props를 사용하지 않아도 됨
