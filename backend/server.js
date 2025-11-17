require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const restaurantsRouter = require('./routes/restaurants');
const feedbacksRouter = require('./routes/feedbacks');
const adminRouter = require('./routes/admin');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/restaurants', restaurantsRouter);
app.use('/api/feedbacks', feedbacksRouter);
app.use('/api/admin', adminRouter);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=> {
  console.log('MongoDB connected');
  app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
})
.catch(err => console.error(err));
