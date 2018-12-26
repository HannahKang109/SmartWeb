var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/**
 * [순서2]서버에 특정한 주소로 접근하면 실행되는 기능들
 * 
 * 기능들을 작성한 코드들은 routes 폴더 안에 모여있음
 * routes 폴더 안에 있는 기능 코드들을 가져오려면 (import)
 * require()함수를 활용함
 * 
 * require()함수의 매개변수는 코드를 작성한 파일의 위치
 */


var indexRouter = require('./routes/index.js');
var usersRouter = require('./routes/users.js');
var boardRouter = require('./routes/board.js');

//var timeRouter = require('./routes/time.js');
//var naverBoxRouter = require('./routes/naverBox.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * [순서1]
 * app.use() 함수부분
 * 
 * 서버가 자신에게 접속한 것이 맞는지 확인하고 맞다면,
 * 서브도메인으로 제공할 웹페이지를 구분함
 * 
 * app.use() 함수는 첫번째 매개변수로 접속하는 주소(http://127.0.0.1:3000/은 생략),
 * 두번째 매개변수는 실행되는 기능 이름(기능 이름은 코드 앞부분에서 선언)
 */


app.use('http://127.0.0.1:3000/', indexRouter);
app.use('http://127.0.0.1:3000/users', usersRouter);
//app.use('http://127.0.0.1:3000/naverBox', naverBoxRouter);
app.use('/board', boardRouter);
//app.use('/time', timeRouter);

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
