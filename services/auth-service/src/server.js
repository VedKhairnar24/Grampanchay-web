const createApp = require('./app');

const port = process.env.PORT || 3010;
const app = createApp();
app.listen(port, () => console.log(`auth-service listening on ${port}`));
