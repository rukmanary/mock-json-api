const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router({}); // Empty db to start with
const middlewares = jsonServer.defaults();

server.use(middlewares);

const profile = {
  "name": "Ryan",
  "company": "HMS",
  "role": "Mobile Apps Developer",
  "photo": "https://images.unsplash.com/photo-1620428268482-cf1851a36764?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
};

const otherProfile = {
  "name": "Other Profile",
  "company": "HMS",
  "role": "Backend Developer",
  "photo": "https://plus.unsplash.com/premium_photo-1681457330049-dcdb2ac363fe?q=80&w=1357&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
};

// Example of a dynamic API route
server.get('/profile', (req, res) => {
  res.jsonp(profile);
});

server.get('/other-profile', (req, res) => {
  res.status(503).jsonp(otherProfile);
});

server.get('/service-unavailable', (req, res) => {
  res.status(503).jsonp({
    error: "Service is temporarily unavailable. Please try again later."
  });
});

// Example of POST route for adding a user
server.post('/users', (req, res) => {
  const newUser = {
    id: Date.now(),
    name: req.body.name
  };
  res.jsonp(newUser);
});

server.listen(3000, () => {
  console.log('JSON Server is running on http://localhost:3000');
});
