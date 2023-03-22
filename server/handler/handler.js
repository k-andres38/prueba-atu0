
module.exports=(err, req, res, next)=> {
    // console.error(err.stack);
    // res.status(500).json({ error: 'Ocurrió un error en el servidor' });
    // log the error, for example
  
  // send an error response to the client
  res.status(500).send('usuario existente');
  }
