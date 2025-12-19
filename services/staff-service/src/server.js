const createApp = require('./app');

const port = process.env.PORT || 3030;
const app = createApp();
app.listen(port, () => console.log(`staff-service listening on ${port}`));
