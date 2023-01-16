import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';

//initialize app
const app = express();



//setting up bodyparser to send requests
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//middleware, every route within postRoutes will start with 'posts'
app.use('/posts', postRoutes);

//connect to mongodb cluster 
const CONNECTION_URL = 'mongodb+srv://Doover:dpc0153682@cluster0.mbpvyls.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

//extablished connection, now to post to db with routes

