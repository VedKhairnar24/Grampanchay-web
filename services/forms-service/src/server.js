const createApp = require('./app');

const port = process.env.PORT || 3040;
const app = createApp();
app.listen(port, () => console.log(`forms-service listening on ${port}`));
