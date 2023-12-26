//server.js
const express = require('express');
const oracledb = require('oracledb');

const app = express();
const PORT = 5001;

const cors = require('cors');

app.use(cors());

const dbConfig = {
  user: 'khk1',
  password: 'kh1234',
  connectString: 'localhost:1521/XE',
};

app.use(express.json());

//binds = [], options = {}
//파라미터를 필수로 넣지 않아도됨
//binds = [],
//where Id 추가적으로 클라이언트가 넣어야지만
//들어갈 수 있는 값을 넣어줌

// 예를들어 runQuery(select * from todos where id = taskId,[taskId])
//options = {} 자동 커밋을 해야하거나 객체화 로 변경해줄 때 많이 사용
async function runQuery(sql, binds = [], options = {}) {
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(sql, binds, options);

    return result.rows.map((row) => ({
      ID: row[0],
      TASK: row[1],
    }));
  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

app.get('/', (request, response) => {
  response.send('백엔드 연결 성공!');
});

app.get('/api/todos', async (request, response) => {
  const todos = await runQuery('SELECT * FROM todos');
  response.json(todos);
});

app.get('/api/cafe', async (request, response) => {
  const cafe = await cafeQuery('SELECT * FROM cafe');
  response.json(cafe);
});

app.listen(PORT, () => {
  console.log(`서버 시작 :  http://localhost:${PORT}`);
});
