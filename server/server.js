#!/usr/bin/env node

const initialize = require('./init/init');
const app = require('./app/app');

initialize().then(() => {
  const port = parseInt(process.env.PORT || '3000');
  app.listen(port, err => {
    if (err) {
      handleError(err, port)
    } else {
      console.log(`Listening on port ${port}`)
    }
  })
}, (err) => {
  throw err
})

function handleError(error, port) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`Port ${port} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`Port ${port} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}
