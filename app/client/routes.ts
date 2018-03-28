const nextRoutes = require('next-routes');
const routes = module.exports = nextRoutes();

routes.add('hero', '/marvel/:id', 'marvel');
