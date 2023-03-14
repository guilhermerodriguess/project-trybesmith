import app from './app';

const PORT = 3001;

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

export default server;

// import express from 'express';
// import userRoutes from './routes/userRouter';

// const app = express();
// const { PORT = 3000 } = process.env;

// app.use(express.json());

// app.use('/users', userRoutes);

// app.listen(PORT, () => {
//   console.log(`Listening port ${PORT}`);
// });