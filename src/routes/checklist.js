const express = require('express');

const router = express.Router();//permite criar rotas no arquivo.

router.get('checklists', (req, res) => {
  console.log('Olá');
  res.send();
})

module.exports = router;
