var express = require('express');
var router = express.Router();
require('dotenv').config()
var knex = require('knex')({
  client: 'mssql',
  connection: {
    host : process.env.host,
    user : process.env.user,
    password : process.env.password,
    database : process.env.database,
  }
});
knex.linked=process.env.linked

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'nunjucks' });
})
router.get('/datos',async (req,res,next)=>{
let rs=await knex.raw(`select count(*) total from ${knex.linked}GLO_DocumentosDeIdentidadPorPersona`)
console.log(rs)
res.send(`hay ${rs[0].total} datos`)
});

module.exports = router;
