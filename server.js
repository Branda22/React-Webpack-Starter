const Express = require('express');
const app = Express();
const PORT = process.env.port || 8080;

app.use(Express.static('public'));

app.listen(PORT, () => {
	console.log('Server listening on PORT:', PORT);
});