const express = require('express');
const checklistRouter = require('./src/routes/checklist')
const app = express();

app.use(express.json());

// nesse formato, define uma pré rota derivando da router
app.use('/checklists', checklistRouter);//criado


app.listen(3000, () => {
  console.log('Servidor foi iniciado')
})
