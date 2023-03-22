const express= require('express');
const app = express();

const { auth,requiresAuth } = require('express-openid-connect');

const port=4000;


const config = {
  authRequired: false,
  auth0Logout: true,
  secret: "DzHc-pzvzwde9XcIPa0-lvX8Wv1cHygo70R3ZOmUMsLwhQa-ctkjX3VHPpBO3h6I",
  baseURL:"http://localhost:4000",
  clientID:"0VEjAiecOqWfQQl4bCYn98Jjyy1IK7ww",
  issuerBaseURL: "https://dev-c7jccwgb5x7xqvsp.us.auth0.com"
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/login', (req, res) => {
 
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

const {  } = require('express-openid-connect');

app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});
// app.use(express.urlencoded({extended: true}));

// app.use(express.json())

// const router=require('./server/routes/userRoute');

// app.use('/',router);


// const errorHandler = require('./server/handler/handler');
// app.use(errorHandler);



module.exports = app;
app.listen(port,console.log(`el servidor esta corriendo en el puerto ${port}`))





