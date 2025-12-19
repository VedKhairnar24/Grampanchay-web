const createApp = require('./app');

const port = process.env.PORT || 3020;
const app = createApp();
app.listen(port, () => console.log(`content-service listening on ${port}`));
