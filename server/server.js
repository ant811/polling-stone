const createError = require('http-errors');
const logger = require('morgan');
const express = require('express');

const app = express();
const { join } = require('path');

// open up CORS
app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.use(logger('dev'));

// You can place your routes here, feel free to refactor:

const {
  candidates,
  policies,
  voter,
  candidateInfoPage,
  bios,
  voterId,
} = require('./routes');

app.use(express.static(join(__dirname, '../client/build')));

app.use('/api/candidates', candidates);
app.use('/api/policies', policies);
app.use('/api/voter', voter);
app.use('/api/candidateinfopage', candidateInfoPage);
app.use('/api/bios', bios);
app.use('/api/voterId/', voterId);

app.use('/candidates/*', express.static(join(__dirname, '../client/build')));
app.use('/voterinfo/*', express.static(join(__dirname, '../client/build')));
app.use('/candidates', express.static(join(__dirname, '../client/build')));
app.use('/voterinfo', express.static(join(__dirname, '../client/build')));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
