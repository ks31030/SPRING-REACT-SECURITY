import React, { useState, useEffect } from 'react';
const NumberGuessingGameLimit = () => {
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
  const [userGuess, setUserGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(5);
  const [guessHistory, setGuessHistory] = useState([]);

  useEffect(() => {
    if (attempts === 0) {
      setMessage(`게임오버! 정답은 ${targetNumber} 입니다. 껄껄`);
      setTargetNumber(generateRandomNumber());
      setAttempts(5);
      setGuessHistory([]);
    }
  }, [attempts, targetNumber]);

  const inputChange = (event) => {
    setUserGuess(event.target.value);
  };

  const inputSubmit = (event) => {
    event.preventDefault();
    const guess = parseInt(userGuess, 10);

    if (isNaN(guess)) {
      setMessage('숫자를 작성해주세요.');
    } else {
      const newGuessHistory = [...guessHistory, guess];
      setGuessHistory(newGuessHistory);

      if (guess === targetNumber) {
        setMessage(`정답입니다. 숫자는 : ${targetNumber}입니다.`);
        setTargetNumber(generateRandomNumber());
        setAttempts(5);
        setGuessHistory([]);
      } else {
        const remainingAttempts = attempts - 1;
        setAttempts(remainingAttempts);

        if (remainingAttempts === 0) {
          setMessage(`게임오버! 정답은 ${targetNumber} 입니다. 껄껄`);
          setTargetNumber(generateRandomNumber());
          setAttempts(5);
          setGuessHistory([]);
        } else {
          setMessage(
            guess < targetNumber
              ? '너무 낮습니다. 다시 시도하세요.'
              : '너무 높습니다. 다시 시도하세요.'
          );
        }
      }

      setUserGuess('');
    }
  };

  return (
    <div>
      <h1>숫자맞추기게임</h1>
      <p>1부터 100 사이 숫자 맞추기</p>
      <form onSubmit={inputSubmit}>
        <input
          type="number"
          value={userGuess}
          onChange={inputChange}
          placeholder="Enter your guess"
          min="1"
          max="100"
          required
        />
        <button type="submit">제출하기</button>
      </form>
      <div>
        <p>남은 기회: {attempts}</p>
        <p>입력한 숫자: {guessHistory.join(', ')}</p>
      </div>
      {message && <div>{message}</div>}
    </div>
  );
};

export default NumberGuessingGameLimit;
