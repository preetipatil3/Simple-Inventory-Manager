require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { init } = require('./models');
const itemsRouter = require('./routes/items.routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(cors());
app.use(express.json());

// routes
app.use('/api/items', itemsRouter);

app.get('/', (req, res) => res.send('Inventory Manager API'));

// error handler last
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

init()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('Failed to initialize DB', err);
    process.exit(1);
  });
