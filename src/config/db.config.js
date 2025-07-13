import mongoose from 'mongoose';

const dbConfig = {
  url: process.env.MONGO_DB_URL
};

// Connect to MongoDB using the URL
mongoose.connect(dbConfig.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((error) => {
    console.error('Connection error:', error);
  });
