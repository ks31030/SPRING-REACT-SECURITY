import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
function App() {
  const [data, setData] = useState([]);
  const [newUser, setNewUser] = useState({userName:'', email:''});
  //fetchData라는 이름을 정의해서 try-catch문을 사용해 비동기 작업 중
  //발생하는 에러를 잡아내고 콘솔에 메시지를 출력하는 것.
  //간접적으로 호출.

  //useEffect 안에서 직접 비동기 작업을 수행.
  //간단하게 catch문을 사용해서 에러를 처리하고 콘솔에 에러 메시지를 출력.
  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get('http://localhost:8080/api/user', {
          withCredentials:true,
        });
        setData(res.data);
      } catch(error){
        console.log(error);
      }
    };
    fetchData();
  }, []);
  
  //데이터 작성한 내용으로 변경하는 함수
  const handleInputChange=(e) => {
    const {name, value} = e.target;
    setNewUser((prevUser) => ({...prevUser, [name] : value}));
  };

  //전송하는 Button 함수 추가
  //데이터 보내줄 Post 추가
  const handleAddUser = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8080/api/user', newUser, {withCredentials:true}
      );
      //변경된 데이터 값
      setData((prevUser) => [...prevUser, response.data]);
      //데이터 저장되고 빈 값으로 초기화 원하면 진행
      setNewUser({userName:'', email:''});
    } catch(error) {
      console.error('데이터가 부적합합니다.', error)
    }
  };




  // useEffect(() => {
  //   axios
  //   .get('http://localhost:8080/api/user', {withCredentials:true,})
  //   //response = res 같은 의미이며, 안에 변수값은 정해진 변수값은 없지만 되도록이면 res response를 사용하면 좋음.
  //   .then((res) => {
  //     setData(res.data);
  //   })
  //   .catch((error) => {
  //     console.log('데이터없음', error);
  //   });
  // }, []);

  return (
    <div>
      <h1>API 호출 확인</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.userName} = {user.email}
          </li>
        ))}
      </ul>
      <h2>새로운 유저 저장</h2>
      <div>
        <label>회원 이름 : </label>
        <input type='text' name='userName' value={newUser, userName} onChange={handleInputChange}/>
      </div>
      <div>
        <label>회원 이메일 : </label>
        <input type='text' name='email' value={newUser, email} onChange={handleInputChange}/>
      </div>
      <button onClick={handleAddUser}>유저 저장</button>
    </div>
  );
}

export default App;
