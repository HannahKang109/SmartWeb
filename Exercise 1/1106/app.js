var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//routes폴더에 read.js 파일을 읽어오는 코드
var readRouter = require('./routes/read.js');
//routes폴더에 write.js 파일을 읽어오는 코드
var writeRouter = require('./routes/write.js');
var delRouter = require('./routes/del.js');
var updateRouter = require('./routes/update.js');
var signupRouter = require('./routes/signup.js');
var searchRouter = require('./routes/search.js');
var loginRouter = require('./routes/login.js');

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/signup', signupRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);
// 사용자가 127.0.0.1:3000/나머지주소
app.use('/read', readRouter);
// 사용자가 127.0.0.1:3000/write로 접속할때 write.js를 실행
app.use('/write', writeRouter);
app.use('/update', updateRouter);
app.use('/search', searchRouter);
app.use('/login',loginRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
