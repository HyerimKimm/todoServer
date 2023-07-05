const express = require('express');
const app = express();
const cors = require('cors');
const port = 4000;
const controllers = require('./controllers');

app.use(express.json());
app.use(cors());

app.get('/', (req,res) => {
    res.send('Hello World!');
})
app.get('/AllData', controllers.getAllData);
app.post('/TodayData', controllers.postTodayData);
app.post('/TomorrowData',controllers.postTomorrowData);

app.listen(port, 
    '0.0.0.0', 
    () => console.log(`✈️ HTTP 서버가 ${port}에서 실행되었습니다.`));