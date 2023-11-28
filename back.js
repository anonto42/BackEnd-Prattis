let express = require('express');

let app = express();

app.set('view engine', 'ejs')
app.use(express.static('./public'))

app.get('/', function(req, res, next){
    res.render('index')
    next()
})
app.get('/error',function(req, res, next){
    throw Error('Error');
})
app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
})

// app.get('/profile/:username', function(req, res, next){
//     // res.send(`Welcome MR/MRS ${req.params.username}`
//     res.render('index')
//     next()
// })
app.listen(3000);