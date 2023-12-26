import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Joke = () => {
  const [joke, setJoke] = useState('');

  // 비동기 작업 콜백 지옥을 방지
  // promise
  // useContext
  /*
    //axios 조금 더 간단한 네트워크 요청을 전달
    fetch('https://v2.jokeapi.dev/joke/Any')
    .then(response =>{
        if(!response.ok){
            throw new Error('에러내용');
        }
        return response.json();
    })
    */
  /*
        useEffect(() => {
            const fetchData = async () => {
                try{
                    const response = await axios.get('https://v2.jokeapi.dev/joke/Any');
                    setJoke(response.data.joke || `${response.data.setup} ${response.data.delivery}`);
                }catch (err){
                    console.log("err",err);
                }
            };
            fetchData();
        },[]);
        ↓ 아래 버전으로 변경해서 사용하면 사용 가능
    */
  useEffect(() => {
    axios
      .get('https://v2.jokeapi.dev/joke/Any')
      .then((response) => {
        setJoke(
          response.data.joke ||
            `${response.data.setup} ${response.data.delivery}`
        );
      })
      .catch((err) => console.log('err', err));
  }, []);

  return (
    <div>
      <p>{joke}</p>
    </div>
  );
};
export default Joke;
